import React from 'react'
import { womenData } from './data/Women'



const Women = () => {
    const firstFiveImages = womenData.slice(0,5)
  return (
    <>
    <h2>Women</h2>
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

export default Women