import React from 'react'

function produce({ name, image, price, weight }) {

  const styles = {
    produceBox: `w-full p-2 flex justify-between rounded-md`,
    imageBox: `w-20 h-28 rounded-xl border-4 border-r-black border-b-black rounded-t-2xl rounded-l-2xl border-l-transparent border-t-transparent`,
    aboutBox: `border-2 border-black w-8/12 rounded-md flex flex-col justify-around p-1`,
    text: `text-sm text-black font-semibold`,
    smallText: `text-xs text-black font-semibold`,
    img: `w-full h-full border-2 border-black rounded-lg`
  }
  return (
    <div className={styles.produceBox}>
      <div className={styles.imageBox}>
        <img src={`${image}`} className={styles.img} />
      </div>
      <div className={styles.aboutBox}>
        <span className={styles.text}>{name}</span>
        <span className={styles.text}>{weight}</span>
        <span className={styles.text}>{price}</span>
      </div>
    </div>
  )
}

export default produce