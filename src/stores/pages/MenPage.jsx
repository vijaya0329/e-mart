import React from 'react'
import { menData } from '../components/data/Men'


const MenPage = () => {
  return (
    <>
    
    <div className='pageSection'>
        {menData.map((item)=> {
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

export default MenPage