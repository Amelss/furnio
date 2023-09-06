import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";

export default function Cards() {

  const [productData, setProductData] = useState([])
  const { id } = useParams();

  const getProductData = async () => {
    await axios
      .get(`./productData.json`)
      .then((res) => {
        setProductData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getProductData()
  }, [])


  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3 content-center font-poppins ">
        {productData.map((products) => (
          <div key={id}>
            <div className="md:w-[300px]">
              <div>
                <img
                  src={products.img}
                  alt="product image"
                  className="w-[300px] h-[200px] md:w-[300px] md:h-[400px]"
                />
                <div>{products.new}</div>
              </div>

              <div className="bg-cardGrey p-3 w-full h-28">
                <h1 className="text-xl text-headingGrey">{products.productName}</h1>
                <p className="text-sm text-cardTextGrey">{products.description}</p>

                {products.beforePrice > 1 ? (
                  <p className="text-base text-headingGrey">
                  {products.price} <span className="text-lineThroughGrey line-through">{products.beforePrice}</span>
                </p>
                ) : (<p>{products.price}</p> )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
