import { Link } from "react-router-dom";
import { useState } from 'react'
import logo from '../img/car_logo.svg'

function Header(){

  const [nav, setNav] = useState(false);
  const openNav = () => {
    setNav(!nav);
  }


    return(


    <div>
        {/* Da creare navbar mobile */}
        
      
          



        {/* Desktop */}
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
    
      
      
      <ul class="font-medium justify-center text-center flex flex-col pt-3 pb-3 border border-gray-100 rounded-lg  md:flex-row md:space-x-8  md:border-0   dark:border-gray-700">
      <img  src={logo} height={25} width={25}>
      </img>
      <li>
          <Link to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Home
          </Link>
          </li>

        <li>
          <Link to="/Chi_Siamo" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          Chi Siamo</Link>
        </li>
        
        

        <li>
          <Link to="/Contattaci" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            Contattaci</Link>
        </li>
        
        <div className="space-x-4 flex-end mr-12">
          <button><span>Login</span></button>
          
          <button className="border-b border-red-900">
            <span>REGISTRATI</span></button>
        </div>
      </ul>
    </div>
  
      

   </div>
  
      

    )
  }








export default Header