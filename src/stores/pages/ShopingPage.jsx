import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../components/data/dataService";

const ShopingPage = () => {
  const { catogery } = useParams();
  const [data, setData] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data);

  useEffect(() => {
    const data = getData(catogery);
    const tempCompanies = new Set();
    data.map((product) => tempCompanies.add(product.company));
    setCompanies(Array.from(tempCompanies));
    setData(data);
    setFilteredProducts(data);
  }, [catogery]);

  const companyHandler = (company) => {
    let temp = [];
    if (selectedProduct.includes(company)) {
      temp = selectedProduct.filter((item) => item !== company);
    } else {
      temp = [...selectedProduct, company];
    }
    setFilteredProducts(
      temp.length === 0
        ? data
        : data.filter((product) => temp.includes(product.company))
    );
    setSelectedProduct(temp);
  };

  return (
    <>
      <div className="fullpage">
        <div className="pro-selected">
          {companies.map((company) => {
            return (
              <label key={company}>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(company)}
                  onChange={() => companyHandler(company)}
                />
                {company}
              </label>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProducts.map((item) => {
            return (
              <div>
                <Link to={`/${catogery}/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />
                  </div>
                </Link>

                <div className="proModel">
                  {item.company},{item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopingPage;
