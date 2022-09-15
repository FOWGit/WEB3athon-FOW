import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

import { useRouter } from 'next/router'


function CheckOut() {

  const router = useRouter()

  const data = router.query

  const totalCost = Number(data.count1)*0.12 + Number(data.count2)*0.34 + Number(data.count3)*0.56
  const taxAmount = (totalCost * 2) /100
  const finalAmount = totalCost + taxAmount

  const sendData = {
    finalAmount
  }

  const styles = {
    page: `w-screen h-screen flex flex-col justify-between items-center`,
    nav: `w-full h-1/6 bg-slate-300/[.9] shadow-xl border-white-900/75 flex justify-around items-center max-w-screen-sm`,
    address: `w-11/12 h-2/6 rounded-xl flex flex-col justify-around items-center bg-slate-300/[.9] shadow-xl border-white-900/75 max-w-screen-sm`,
    item: `w-11/12 h-2/6 rounded-xl flex justify-around items-start bg-slate-300/[.9] shadow-xl border-white-900/75 max-w-screen-sm`,
    btn: `w-11/12 h-20 rounded-xl flex justify-center items-center max-w-screen-sm`,
    sub_nav: `w-full h-10 flex justify-around items-center`,
    inputs: `w-11/12 h-4/5 flex flex-col justify-around items-center mb-3`,
    input: `bg-transparent focus:outline-none ml-2`,
    left: `w-1/3 h-5/6 flex justify-center`,
    mid: `w-1/3 h-full flex flex-col justify-around items-start`,
    right: `w-1/3 h-full`,
    count: `w-28 h-10 bg-white rounded-xl mr-2 flex justify-between items-center p-2`
  }

  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <Link href="/components/FOW/order/Meat">
          <div className="mr-3">
            <ArrowBackIcon color='primary' fontSize='large' />
          </div>
        </Link>
        <div className="">
          <span>Checkout</span>
        </div>
        <div className="ml-3">
          <SearchIcon color='primary' fontSize='large' />
        </div>
      </div>
      <div className={styles.address}>
        <div className={styles.sub_nav}>
          <span className='border-transparent rounded-md border-b-sky-500 border-4 text-semibold text-grey-500 text-sm'>Home Delivery</span>
          <span className='text-semibold text-grey-500 text-sm'>Take Out</span>
        </div>
        <div className={styles.inputs}>
          <div className="w-10/12">
            <span className='mr-auto text-sm font-bold'>Personal Details</span>
          </div>
          <div className="w-10/12 h-1/4 bg-white rounded-xl mb-1">
            <input type="text" placeholder='Name' className={styles.input} />
          </div>
          <div className="w-10/12 h-1/4 bg-white rounded-xl mb-1">
            <input type="email" placeholder='Email' className={styles.input} />
          </div>
          <div className="w-10/12 h-1/4 bg-white rounded-xl ">
            <input type="tel" placeholder='Phone' className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.left}>
          <div className="w-24 h-24 rounded-xl bg-white mt-5"></div>
        </div>
        <div className={styles.mid}>
          <span className='font-semibold'>Beef Minced - {data.count1}</span>
          <span className='font-semibold'>Beef NY Strip - {data.count2}</span>
          <span className='font-semibold'>Beef with bones - {data.count3}</span>
          <span className='font-semibold text-neutral-700 text-xs'>Product Total</span>
          <span className='font-semibold text-neutral-700 text-xs'>Tax</span>
          <span className='font-semibold text-neutral-700 text-xs'>Subtotal</span>
        </div>
        <div className={styles.right}>
          <div className="w-full h-1/2 flex justify-center items-center">
            <div className={styles.count}>
              <RemoveIcon color='primary' />
              <span>{data.totalCount}</span>
              <AddIcon color='primary' />
            </div>
          </div>
          <div className="w-full h-1/2 flex flex-col justify-around items-start mt-0.5">
            <span className='font-semibold text-neutral-700 text-xs mt-4'>{totalCost}$</span>
            <span className='font-semibold text-neutral-700 text-xs'>2% = {taxAmount}</span>
            <span className='font-semibold text-neutral-700 text-xs'>{finalAmount}$</span>
          </div>
        </div>
      </div>
      <Link 
        href={{
          pathname: "/components/FOW/Payments/Crypto",
          query: sendData
        }}>
        <div className={styles.btn}>
          <Button variant="contained" className='p-2 w-11/12' onClick={() => console.log("data: ", data)}>Proceed to pay</Button>
        </div>
      </Link>
    </div>
  )
}

export default CheckOut