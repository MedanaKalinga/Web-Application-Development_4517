import React, { useEffect, useState } from 'react'
import fetchcatwiseProduct from '../mid/getcatwiseproduct'

const DisplyproducHome = ({category,topic}) => {

  const [data,setdata] = useState([])
  const [loading,setloading] = useState(false)
 

  const fetchData = async () => {
  setloading(true);
  const categoryproducts = await fetchcatwiseProduct(category);


  //console.log("categoryproducts",categoryproducts); 
  
  setloading(false);
  setdata(categoryproducts.data);
};
 

//console.log("category",category)
  useEffect(()=>{

      fetchData()

  },[])




  return (
    <div className='container mx-auto p-4 my-6 '>

        <h2 className='text-2xl font-bold py-2'>{topic}</h2>

      
        <div className='flex items-center gap-2 '>
        <div className="container mx-auto px-4">
  <div className="flex flex-wrap justify-between gap-2"> 
    {data.slice(0, 4).map((product, index) => {
      return (
        <div 
          key={index} 
          className='w-full sm:w-[49%] md:w-[24%] h-40 bg-blue-300 rounded-sm shadow flex hover:transition duration-300 ease-in-out' 
        >
          <div className='bg-blue-200 h-full p-2 min-w-[150px]'>
            <img 
              src={product.image[0]} 
              alt={product.name} 
              className='object-scale-down h-full transform transition duration-300 ease-in-out hover:scale-110'
            />
          </div>

          <div className='p-4'>
            <h2 className='font-semibold text-lg text-ellipsis line-clamp-1'>{product.productName}</h2>
            <p className='capitalize text-slate-700'>{product.category}</p>
            <p >Rs{product.Price}</p>

           <div className=''>
           <button className='text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-full' >Add to Cart</button>
           </div>
          </div>
        </div>
      )
    })}
  </div>
</div>

        </div>

      
        

       

    </div>
  )
}

export default DisplyproducHome