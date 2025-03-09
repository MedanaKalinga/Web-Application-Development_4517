import React, { useState } from 'react'
import image1 from "../Assest/hero1.jpg"
import image2 from "../Assest/Hero2.jpg"
import image4 from "../Assest/hero3.jpg"
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";


const Banner = () => {
  const [imageslide,setimageslide] = useState(0)

  const bannerImage = [
        image1,
        image2,
        image4,
       
      ]

      const nextimage = ()=>{

        if(bannerImage.length-1 > imageslide){

          setimageslide(preve => preve + 1)

        }


      } 

      const previmage = ()=>{

        if(imageslide != 0){
          setimageslide(preve => preve - 1)
        }

        

      }
  return (
    <div className='container mx-auto py-10 px-4 rounded'>
  <div className='relative h-72 w-full bg-blue-200'>
    
    {/* Navigation Buttons */}
    <div className='absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 flex justify-between w-full'>
      <button onClick={previmage} className='bg-white rounded-full p-2'>
        <FaAnglesLeft />
      </button>
      <button onClick={nextimage} className='bg-white rounded-full p-2'>
        <FaAnglesRight />
      </button>
    </div>

    {/* Image Slider */}
    <div className='flex h-full w-full overflow-hidden'>
      {
        bannerImage.map((imagepath, index) => {
          return (
            <div 
              key={imagepath} 
              className='w-full h-full min-w-full min-h-full flex-shrink-0 transition-all' 
              style={{ transform: `translateX(-${imageslide * 100}%)`, transition: 'transform 0.5s ease' }}
            >
              <img src={imagepath} className='w-full h-full object-cover' />
            </div>
          )
        })
      }
    </div>

  </div>
</div>

  )
}

export default Banner