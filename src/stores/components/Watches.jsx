import React from 'react'
 import { watchesData } from './data/Watches'


const Watches = () => {
    const firstFiveImages = watchesData.slice(0,5)
  return (
    <>
    <h2>Watches</h2>
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

export default Watches