import React, { useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import AdminEditItem from './AdminEditItem';
import { RiDeleteBinFill } from "react-icons/ri";
import summaryApi from '../common';
import { toast } from 'react-toastify';

const AdminProductCard = ({ 
  data,
  fetchdata,

}) => {



    const [editProduct,seteditProduct] = useState(false)
    

    
    const handleDelete = async () => {
      try {
        const response = await fetch(summaryApi.deleteProduct.url, {
          method: summaryApi.deleteProduct.method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: data._id }),
        });
    
        const responseData = await response.json();
    
        if (responseData.success) {
          toast.success(responseData.message);
          fetchdata();
        } else {
          toast.error(responseData.message || "Error deleting product");
        }
      } catch (error) {
        toast.error("Error deleting product");
      }
    };
    




    
  return (
    
<div className="bg-white p-5 rounded-lg shadow-lg w-52">
  {/* First Row: Image Centered */}
  <div className="flex justify-center">
    <img 
      src={data?.image[0]} 
      width={140} 
      height={140} 
      className="w-36 h-36 object-cover"
    />
  </div>

  {/* Second Row: Name, Price, and Buttons */}
  <div className="flex items-center justify-between mt-3">
    <div className="flex flex-col w-full">
      <h1 className="text-base font-semibold truncate overflow-hidden text-ellipsis max-w-[110px]">
        {data.productName}
      </h1>
      <h2 className="text-sm font-medium text-gray-600">
        Rs {data.Price}
      </h2>
    </div>

    <div className="flex gap-2 flex-shrink-0">
      <button 
        className="p-1.5 bg-blue-500 hover:bg-blue-700 rounded-full text-white cursor-pointer"
        onClick={() => seteditProduct(true)}
      >
        <MdModeEdit size={16} />
      </button>

      <button 
        className="p-1.5 bg-red-500 hover:bg-red-700 rounded-full text-white cursor-pointer"
        onClick={handleDelete}
      >
        <RiDeleteBinFill size={16} />
      </button>
    </div>
  </div>

  {/* Edit Modal */}
  {editProduct && (
    <AdminEditItem productData={data} onClose={() => seteditProduct(false)} fetchdata={fetchdata} />
  )}
</div>





  
  )
}

export default AdminProductCard