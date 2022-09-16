import React, { useState, useEffect } from 'react'
import PaymentHead from '../PaymentHead'
import Button from '@mui/material/Button';
import { ethers } from "ethers";
import ABI from '../../../utils/FOW.json';
import { useRouter } from 'next/router';
import Link from 'next/link';



function Crypto() {

  const deployAddress = '0xb6b8869F2717ee5F5bdFDd03bE7121D0dbc1E6bf'
  const [walletAddress, setWalletAddress] = useState('')

  const getAddress = async () => {
    try {
      if(typeof window != 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        
        setWalletAddress(address)
      }
    } catch (error) {
      console.log("Wallet Address Error: ", error)
    }
  }

  useEffect(() => {
    getAddress()
  }, [])

  const router = useRouter()

  const data = router.query

  const celoAmount = Number(data.finalAmount) * 1.25

  const sendCELO = async () => {
    try {
      if(typeof window != 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const abi = ABI.abi
        const contract = new ethers.Contract(deployAddress, abi, signer)
        const owner = await contract.owner()
        console.log("owner of this contract is: ", owner, celoAmount)

        await contract.send({ value: ethers.utils.parseEther(`${celoAmount}`) })
        
        await window.location.replace(`/components/FOW/PaymentComplete?finalAmount=${data.finalAmount}`)
      }
    } catch (error) {
      console.log("send CELO error: ", error)
    }
  }

  const styles = {
    page: `w-screen h-screen flex flex-col justify-between items-center`,
    body: `w-full h-full flex flex-col justify-between items-center max-w-screen-sm`,
    info: `w-11/12 h-3/6 flex flex-col justify-between items-center bg-slate-300/[.9] shadow-xl border-white-900/75`,
    priority: `w-11/12 h-1/5 flex flex-col justify-around items-center bg-slate-300/[.9] shadow-xl border-white-900/75 rounded-md`,
    btn: `w-11/12 h-1/6`,
    addr: `w-10/12 h-10 bg-white rounded-xl p-2 flex justify-between items-center`,
    smallBox: `bg-white rounded-md w-11/12 h-10 ml-1 text-xs flex items-center font-semibold text-gray-500`,
    box: `rounded-xl w-20 h-20 bg-transparent flex items-center justify-center`,
    boxHold: `w-8/12 flex justify-between items-center max-w-11/12`
  }

  return (
    <div className={styles.page}>
      <PaymentHead />
      <div className={styles.body}>
        <div className={styles.info}>
          <div className="flex flex-col justify-around items-start w-10/12 h-3/5">
            <div className={styles.addr}>
              <div className="rounded-full w-16 h-8">
                <img src="/images/Metamask.png" className='w-full h-full rounded-full'/>
              </div>
              <span className='font-semibold text-gray-500 text-sm p-2'>{walletAddress.slice(0, 5)}....{walletAddress.slice(38, 42)}</span>
              <div className="w-12 h-12">
                <img src="/images/qr-code.png" className='w-full h-full' />
              </div>
            </div>
            <div className={styles.boxHold}>
              <img src="/images/celo-logo.png" className='w-10 h-10'/>
              <div className={styles.smallBox}>{celoAmount} CELO</div>
            </div>
            <div className={styles.boxHold}>
              <span className='font-semibold text-gray-500'>USD</span>
              <div className={styles.smallBox}>{data.finalAmount} USD</div>
            </div>
          </div>
          <div className="h-2/6 w-10/12">
            <div className="">
              <span className='font-semibold'>Label (Optional)</span>
            </div>
            <div className="w-10/12 bg-white rounded-xl h-10 p-2">
              <span className='font-semibold text-gray-500'>Meat and produce</span>
            </div>
          </div>
        </div>
        <div className={styles.priority}>
          <div className="mr-auto ml-5 font-semibold text-sm">
            <span className='p-1'>Priority</span>
          </div>
          <div className="w-11/12 h-5/6 flex justify-between items-center">
            <div className="flex flex-col w-1/4 h-full items-center justify-center">
              <div className={styles.box}>
                <img src="/images/cycle.png" className='w-full h-full' />
              </div>
              <span className='font-semibold text-sm'>Low</span>
            </div>
            <div className="flex flex-col w-1/4 h-full items-center justify-center">
              <div className={styles.box}>
              <img src="/images/bike.png" className='w-full h-full' />
              </div>
              <span className='font-semibold text-sm'>Normal</span>
            </div>
            <div className="flex flex-col w-1/4 h-full items-center justify-center ">
              <div className={styles.box}>
                <img src="/images/car.png" className='w-full h-full' />
              </div>
              <span className='font-semibold text-sm'>High</span>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <span className='font-semibold'>Fees: {data.finalAmount}$</span>
          <div className="w-full flex justify-center items-center">
            <Button variant="contained" className='p-2 w-11/12' onClick={sendCELO}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crypto
