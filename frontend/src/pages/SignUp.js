import React from 'react'

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { FaUserPen } from "react-icons/fa6";

const SignUp = () => {
   const [showPassword,setShowPassword] = useState(false)
   const [showConfirmPassword,setshowConfirmPassword] = useState(false)
      const [data,setData] = useState({
        email : "",
        password : "",
        name :"",
        ConfirmPassword : ""
      })

      const navigate = useNavigate()
  
      const handleOnChange = (e) =>{
        const { name , value } = e.target
  
        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
      }
      const handleSubmit = async(e) =>{
        e.preventDefault()

        if(data.password === data.ConfirmPassword){

          const dataResponse = await fetch(summaryApi.signUp.url,{
              method : summaryApi.signUp.method,
              headers : {
                  "content-type" : "application/json"
              },
              body : JSON.stringify(data)
            })
  
          const dataApi = await dataResponse.json()
          

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }

          if(dataApi.error){
            toast.error(dataApi.message)
          }

          
        }else {
          console.log("plaese check the password and confirmpassword")
        }

        
      }
  return (
    <section id='SignUp'>
      <div className='mx-auto container p-4'>
        <div className='bg-white p-5 w-full max-w-md mx-auto '>
         <div className='w-24 h-24 mx-auto flex items-center justify-center text-blue-800 text-4xl'>
                 <FaUserPen />
               </div>

          <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>

          <div className='grid'>
              <label>Name :</label>
                <div className='bg-slate-100 p-2 '>
                <input 
                  type='text' 
                  placeholder='Enter your Name'
                  name='name' 
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className=' w-full h-full bg-transparent'/>
                </div>
            </div>

            <div className='grid'>
              <label>Email :</label>
                <div className='bg-slate-100 p-2 '>
                <input 
                  type='email' 
                  placeholder='Enter your Email'
                  name='email' 
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className=' w-full h-full bg-transparent'/>
                </div>
            </div>

            <div>
              <label>Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                   <input  
                   type={showPassword ? "text" : "password"} 
                   placeholder='enter password'
                   name='password' 
                   onChange={handleOnChange}
                   required
                   className='w-full h-full outline-none bg-transparent'/>
                    
                     <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                         <span>
                            {
                             showPassword ? (<FaEyeSlash/>) :(<FaEye/>)
                              }
                           </span>
                      </div>
                </div>
              

            </div>

            <div>
              <label> Confirm Password :</label>
              <div className='bg-slate-100 p-2 flex'>
                   <input  
                   type={showConfirmPassword ? "text" : "password"} 
                   placeholder='Confirm password'
                   name='ConfirmPassword' 
                   onChange={handleOnChange}
                   required
                   className='w-full h-full outline-none bg-transparent'/>
                    
                     <div className='cursor-pointer text-xl' onClick={()=>setshowConfirmPassword((preve)=>!preve)}>
                         <span>
                            {
                             showConfirmPassword ? (<FaEyeSlash/>) :(<FaEye/>)
                              }
                           </span>
                      </div>
                </div>
                

            </div>
            <button  className='bg-blue-800 hover:bg-blue-950 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>SignUp</button>
          </form>

          <p className='my-5'>Have account ? <Link to={"/Login"} className=' text-blue-800 hover:text-blue-950 hover:underline'>Sign up</Link></p>


        </div>

      </div>


    </section>
  )
}

export default SignUp