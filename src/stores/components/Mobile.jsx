import React from 'react'

import { mobileData } from './data/mobiles'


const Mobile = () => {
    const lastFourImages = mobileData.slice(5,9)
  return (
    <>
    <h2>Mobiles</h2>
    <div className='proSection'>
        {
        lastFourImages.map((item) => {
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

export default Mobile