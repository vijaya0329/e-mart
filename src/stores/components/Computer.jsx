import React from 'react'

import {ComputerData} from './data/Computer'

const Computer = () => {

    const firstFiveImages = ComputerData.slice(1,6)
  return (
    <>
    <h2>Computers</h2>
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

export default Computer