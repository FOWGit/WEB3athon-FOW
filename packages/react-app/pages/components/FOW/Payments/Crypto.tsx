import React from 'react'
import PaymentHead from '../PaymentHead'
import Button from '@mui/material/Button';


function Crypto() {

  const styles = {
    page: `w-screen h-screen flex flex-col justify-between items-center`,
    body: `w-full h-full flex flex-col justify-between items-center max-w-screen-sm`,
    info: `w-11/12 h-3/6 flex flex-col justify-between items-center bg-slate-300/[.9] shadow-xl border-white-900/75`,
    priority: `w-11/12 h-1/5 flex flex-col justify-around items-center bg-slate-300/[.9] shadow-xl border-white-900/75 rounded-md`,
    btn: `w-11/12 h-1/6`,
    addr: `w-10/12 h-10 bg-white rounded-xl p-2 flex justify-between items-center`,
    smallBox: `bg-white rounded-md w-8/12 h-10`,
    box: `rounded-xl w-20 h-20 bg-white`,
  }

  return (
    <div className={styles.page}>
      <PaymentHead />
      <div className={styles.body}>
        <div className={styles.info}>
          <div className="flex flex-col justify-around items-start w-10/12 h-3/5">
            <div className={styles.addr}>
              <span className='font-semibold text-gray-500 text-xs'>0x9304B2hdfsf787sf</span>
              <div className="border-4 w-10 h-10"></div>
            </div>
            <div className="w-5/12 flex justify-between items-center">
              <img src="/images/apple-logo.png" className='w-10 h-10'/>
              <div className={styles.smallBox}></div>
            </div>
            <div className="w-5/12 flex justify-between items-center">
              <span className='font-semibold text-gray-500'>USD</span>
              <div className={styles.smallBox}></div>
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
            <span className='p-5'>Priority</span>
          </div>
          <div className="w-11/12 h-5/6 flex justify-between items-center">
            <div className="flex flex-col w-1/4 h-full items-center justify-center">
              <div className={styles.box}></div>
              <span className='font-semibold text-sm'>Low</span>
            </div>
            <div className="flex flex-col w-1/4 h-full items-center justify-center">
              <div className={styles.box}></div>
              <span className='font-semibold text-sm'>Low</span>
            </div>
            <div className="flex flex-col w-1/4 h-full items-center justify-center ">
              <div className={styles.box}></div>
              <span className='font-semibold text-sm'>Low</span>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <span className='font-semibold'>Fees: 0.04$</span>
          <div className="w-full flex justify-center items-center">
            <Button variant="contained" className='p-2 w-11/12'>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crypto