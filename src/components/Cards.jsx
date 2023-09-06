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
      


      <h1 className="text-orange-500">Cards</h1>  
      {productData.map((products) => (
        <div key={id}>  
          <div>
            <h1>{products.productName}</h1>
          </div>
          
        </div>
      ))}
      </div>
  )
}
