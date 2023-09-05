import { Link } from "react-router-dom"


export default function Header() {
  return (
      <div>
      <div className="">
        <div>
          <div className="flex items-center p-3 md:p-8">
            <img src="./src/assets/logo.png" alt="logo" className="w-10" />
            <h2 className="font-montserrat font-bold ml-2 text-3xl">Furniro</h2>
          </div>
          
        </div>
        <div>
          <Link to={"/"}> </Link>
        </div>
    
      </div>
    
      </div>
  )
}
