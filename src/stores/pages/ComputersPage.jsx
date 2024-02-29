import React from 'react'
import { useState } from 'react';
import { ComputerData } from '../components/data/Computer'
import { Link } from 'react-router-dom'

const ComputersPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  

  const companyHandler = (mango) => {
    
    if (selectedProduct.includes(mango)) {
      setSelectedProduct = (selectedProduct.filter(item => item !== mango));
      
    } else {
        setSelectedProduct = ([ ...selectedProduct, mango ]);
    }
    
    };
    const filteredProduct = selectedProduct.length===0?
    ComputerData : ComputerData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
       <div className="fullpage">
        <div className="pro-selected">
          {ComputerData.map((computer) => {
            return (
              <label key={computer.id}>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(computer.company)}
                  onChange={() => companyHandler(computer.company)}
                />
                {computer.company}
              </label>
            );
          })}
        </div> 
               <div className='pageSection'>
                {ComputerData.map((item)=>{
                  return(
                    <div>
                    <Link to = {`/computers/${item.id}`}>
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
      </div>
    </>
  );
};

export default ComputersPage