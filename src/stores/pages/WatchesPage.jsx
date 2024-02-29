import React from 'react'
import { watchesData } from '../components/data/Watches'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Watches from '../components/Watches';


const WatchesPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
 if (selectedProduct.includes(mango)) {
      setSelectedProduct = (selectedProduct.filter(item => item !== mango));
      
    } else {
        setSelectedProduct = ([ ...selectedProduct, mango ]);
    }
    };
    const filteredProduct = selectedProduct.length===0?
    watchesData: watchesData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    
    <div className='pageSection'>
        {watchesData.map((item)=> {
            return(
                <label key={Watches.id}>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(Watches.company)}
                  onChange={() => companyHandler(Watches.company)}
                />
                {Watches.company}
              </label> 
              )
        })}
        </div>
        <div className="pageSection">
        {watchesData.map((item)=> {
            return(
                <div>
                  <Link to = {`/watches/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt=''/>
                    </div>
                  </Link>
                
                
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
                
        })}
        
        </div>
    </>
  );
};
        


        
        
    

export default WatchesPage