import React, { useState } from 'react';
import logo from '../Assest/logo/Logo.png';
import { IoIosSearch } from "react-icons/io";
import { HiUserCircle } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

  const [menuDisply,setmenuDisply ] = useState(false)


  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
    <div className='h-full container mx-auto flex items-center px-2 justify-between'>
       <Link to= {"/"}>
          <img src={logo} alt='Logo' className='h-16 ' />
      </Link>

      
    <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
      <input type='text' placeholder='Search Items Here..' className='w-full outline-none '/>
      <div className='text-lg min-w-[50px] h-8 flex items-center bg-blue-900 justify-center rounded-r-full text-white'>
        <IoIosSearch/>
      </div>
    </div>

    <div className='flex justify-center gap-7 items-center'>
    


     <div className='relative  flex justify-center'onClick={()=>setmenuDisply(preve => !preve)}>

     <div className ='text-4xl cursor-pointer  '>
        < HiUserCircle/>
      </div>

      {
        menuDisply && (  <div className='absolute bg-white bottom-0 top-11 h-fit shadow-lg rounded p-2 '>
          <Link to= {"admin-panel"}> ADMIN</Link>
        </div>)
      }

     

     </div>

      <div className =' py-1 text-3xl cursor-pointer relative '>
          <span> <FaShoppingCart/></span>
          <div>
            <p className = 'text-sm a bg-blue-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>0</p>
          </div>
      </div>

      <div>
        <Link to={"/Login"} className='px-3 py-2 rounded-full border-blue-900 text-white bg-blue-900 hover:bg-blue-950'>Login</Link>
      </div>
     </div>
    </div>

  </header>




  );
};

export default Header;
