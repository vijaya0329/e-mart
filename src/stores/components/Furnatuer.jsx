import React from 'react'
import { furnatuerData } from './data/Furnatuer'

const Furnatuer = () => {
    const firstFiveImages = furnatuerData.slice(0,5)
  return (
    <>
    <h2>Furnatuer</h2>
    <div className='proSection'>
        {
        firstFiveImages.map((item) => {
        return (
            <div className='imgBox'>
                <img className='proImg' src={item.image} alt="" />
            </div>
        )
        })
    }
    </div>
    </>
  )
}

export default Furnatuer