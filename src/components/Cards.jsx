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
    <div className="">
      <div className="grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-4 2xl:gap-x-0 gap-5 place-items-center p-3 font-poppins ">
        {productData.map((products) => (
          <div key={id}>
            <div className="md:w-[300px] 2xl:w-[400px]">
              <div>
                <div className="relative">
                  <img
                    src={products.img}
                    alt="product image"
                    className="w-[300px] h-[200px] md:w-[300px] md:h-[400px] 2xl:w-[500px] 2xl:h-[400px] "
                  />
               
                  {products.discount < 0 ? (
                    <div className="top-5 absolute right-5 bg-badgeRed rounded-[200%] h-12 w-12 text-center">
                    <p className="  text-white  mt-3">
                      {products.discount}%
                    </p>
                    </div>) : (
                        <p></p>
                  )} 
                  

                  {products.new === true ? (
                    <div className="top-5 absolute right-5 bg-badgeGreen rounded-[200%] h-12 w-12 text-center">
                    <p className="  text-white  mt-3">
                     {products.new} New
                    </p>
                  </div>
                  ) : (
                    <p></p>
                  )}
                  
                </div>

              </div>

              <div className="bg-cardGrey p-3 w-full h-28">
                <h1 className="text-xl text-headingGrey pb-1 font-bold">
                  {products.productName}
                </h1>
                <p className="text-sm text-cardTextGrey pb-1">
                  {products.description}
                </p>

                {products.beforePrice > 1 ? (
                  <p className="text-base text-headingGrey">
                    £{products.price}{" "}
                    <span className="text-lineThroughGrey line-through">
                      £{products.beforePrice}
                    </span>
                  </p>
                ) : (
                  <p>£{products.price}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
