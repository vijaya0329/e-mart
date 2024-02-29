import React , {useState} from 'react'
import { furnatuerData } from '../components/data/Furnatuer'
import { Link } from 'react-router-dom'


const FurnatuerPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
  if (selectedProduct.includes(mango)) {
      setSelectedProduct = (selectedProduct.filter(item => item !== mango));
      
    } else {
        setSelectedProduct = ([ ...selectedProduct, mango ]);
    }
    };
    const filteredProduct = selectedProduct.length===0?
    furnatuerData : furnatuerData.filter((orange)=>selectedProduct.includes(orange.company))
  return (
    <>
    <div className="fullpage">
        <div className="pro-selected">
          {furnatuerData.map((furnatuer) => {
            return (
              <label key={furnatuer.id}>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(furnatuer.company)}
                  onChange={() => companyHandler(furnatuer.company)}
                />
                {furnatuer.company}
              </label>
            );
          })}
        </div>
    
    <div className='pageSection'>
        {furnatuerData.map((item)=> {
            return(
                <div>
                    <Link to = {`/furnatuer/${item.id}`}>
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


export default FurnatuerPage;