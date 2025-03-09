import React, { useEffect, useState } from 'react'
import summaryApi from '../common'

const CategaryList = () => {
  const [categaryproduct, setcategaryproduct] = useState([])
  const [loading, setloading] = useState(false)

  const fetchcategaryproduct = async () => {
    setloading(true) // Start loading
    const response = await fetch(summaryApi.categaryProduct.url)
    const dataresponse = await response.json()
    setloading(false) // Stop loading after fetching
    setcategaryproduct(dataresponse.data)
  }

  useEffect(() => {
    fetchcategaryproduct()
  }, [])

  return (
    <div className='container mx-auto p-4'>
      <div className='flex items-center gap-4 justify-between'>
        {categaryproduct.map((product, index) => {
          return (
            <div key={index} className='text-center'>
              <div className='w-32 h-32 flex rounded-full overflow-hidden p-2 bg-blue-200 items-center justify-center 
                  hover:bg-blue-300 transition duration-300 ease-in-out'> {/* Background hover effect */}
                <img
                  src={product?.image[0]}
                  alt={product?.category}
                  className='h-full object-fill transform transition duration-300 ease-in-out hover:scale-110' // Image zoom effect
                />
              </div>
              <p className='text-center capitalize'>{product.category}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategaryList
