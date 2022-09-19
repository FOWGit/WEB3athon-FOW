import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Button from '@mui/material/Button';



function Additional() {

  const [walletAddr, setWalletAddr] = useState('')

  const Submit = async () => {
    try {

      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      }

      console.log(walletAddr)
    } catch (error) {
      console.log(error)
    }
  }

  const styles = {
    page: `w-screen h-screen flex flex-col justify-around items-center`,
    aro: `w-full flex justify-start max-w-md`,
    info: `flex flex-col w-11/12 justify-start max-w-md`,
    bigLetter: `flex flex-col w-11/12 justify-around text-slate-400 h-1/5 max-w-md`,
    inputBox: `w-full bg-slate-300/[.9] shadow-2xl border-white-900/75 p-2 rounded-md`,
    input: `w-full w-full bg-slate-300/[.0] border-white-900/75 p-1 rounded-md focus:outline-none`,
    space: `w-10 h-2 rounded-md bg-blue-300 mt-1.5`,
    submit: `text-white capitalize w-full p-1 max-w-md`,
  }

  return (
    <div className={styles.page}>
      <Link href="/components/FOW/Signup">  
        <div className={styles.aro}>
          <ArrowBackIcon color="primary" fontSize='large' />
        </div>
      </Link>
      <div className={styles.info}>
        <span className='text-3xl font-semibold'>Additional</span>
        <span className='text-3xl font-semibold'>Information</span>
      </div>
      <div className={styles.bigLetter}>
        <span className='text-2xl font-semibold'>Crypto Wallet Address</span>
        <div className={styles.inputBox}>
          <input type="text" placeholder='Enter your crypto wallet address' className={styles.input} onChange={(e) => setWalletAddr(e.target.value)} value={walletAddr} />
        </div>
      </div>
      <div className={styles.space}>
        <span> </span>
      </div>
      <Link href="/components/FOW/Option">
        <div className="w-10/12 max-w-md mb-5">
          <Button variant="contained" className={styles.submit} onClick={Submit}>Submit</Button>
        </div>
      </Link>
    </div>
  )
}

export default Additional