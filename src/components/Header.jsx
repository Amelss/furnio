import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu";


export default function Header() {
  return (
    <div>
      {/* -------------DESKTOP NAV------------- */}
      <nav className="hidden md:flex p-3 md:p-8 items-center justify-between">
        <div>
          <div className="flex items-center ">
            <img
              src="./src/assets/logo.png"
              alt="logo"
              className="w-10 md:w-14"
            />
            <h2 className="font-montserrat font-bold ml-2 text-3xl md:text-4xl">
              Furniro
            </h2>
          </div>
        </div>
        <div>
          <Link to={"/"} className="font-poppins">
            Home
          </Link>
          <Link to={"/"} className="font-poppins">
            Shop
          </Link>
          <Link to={"/"} className="font-poppins">
            About
          </Link>
          <Link to={"/"} className="font-poppins">
            Contact
          </Link>
        </div>

        <div className="flex justify-between">
          <img
            src="./src/assets/account.png"
            alt="logo"
            className="w-4 md:w-6"
          />
          <img
            src="./src/assets/search.png"
            alt="logo"
            className="w-4 md:w-6"
          />
          <img src="./src/assets/heart.png" alt="logo" className="w-4 md:w-6" />
          <img src="./src/assets/cart.png" alt="logo" className="w-4 md:w-6" />
        </div>
      </nav>

      {/*----------------- MOBILE NAV --------------*/}
      <nav className="md:hidden p-3 items-center justify-between">
        <div>
          <div className="flex items-center ">
            <img
              src="./src/assets/logo.png"
              alt="logo"
              className="w-10 md:w-14"
            />
            <h2 className="font-montserrat font-bold ml-2 text-3xl md:text-4xl">
              Furniro
            </h2>
          </div>
        </div>

        <div>
          <Menu>
            <Link to={"/"} className="font-poppins">
              Home
            </Link>
            <Link to={"/"} className="font-poppins">
              Shop
            </Link>
            <Link to={"/"} className="font-poppins">
              About
            </Link>
            <Link to={"/"} className="font-poppins">
              Contact
            </Link>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
