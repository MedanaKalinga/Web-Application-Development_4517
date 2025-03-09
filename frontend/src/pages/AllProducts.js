import React, { useState } from 'react'
import InsertProduct from '../components/InsertProduct'
import { useEffect } from 'react'
import summaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'


const AllProducts = () => {
  const [openUpload,setopenUpload] = useState(false)
  const [allProduct,setAllProduct] = useState([])

  const fetchAllProduct = async() =>{
    const response = await fetch(summaryApi.allProduct.url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },})
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(()=>{
    fetchAllProduct()
  },[])


  return (
    <div>
        <div className='flex justify-between py-2'>
          <h2 className='font-bold text-lg:'>All product</h2>
          <button className='border-2 border-blue-800 py-1 px-3 rounded-full hover:bg-blue-900 hover:text-white'onClick={()=>setopenUpload(true)}>Upload product</button>
        </div>

     {/**all product */}

     <div className='flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
     {
            allProduct.map((product,index)=>{
              return(
                <AdminProductCard data={product} key={index+"allProduct"} fetchdata={fetchAllProduct}/>
                
              )
            })
          }
</div>


      {/**insert product */}
      {
        openUpload && (
          <InsertProduct onClose={()=>setopenUpload(false)} fetchData={fetchAllProduct}/>
        )
      }


    
    </div>
  )
}

export default AllProducts