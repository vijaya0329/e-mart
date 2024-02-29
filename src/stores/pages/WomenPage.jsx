import React from 'react'
import { womenData } from '../components/data/Women'


const WomenPage = () => {
  return (
    <>
    
    <div className='pageSection'>
        {womenData.map((item)=> {
            return(
                <div>
                <div className="pageImg">
                    <img src={item.image} alt=''/>
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}

    </div>
    </>
  )
}

export default WomenPage