import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import productCategory from '../mid/ProductCategory';
import UploadImage from '../mid/UploadImage';
import {toast} from 'react-toastify'
import summaryApi from '../common';

const InsertProduct = ({ onClose, fetchData}) => {
  const [data, setData] = useState({
    isActive : true,
    productName: "",
    Brand: "",
    category: "",
    image: [],
    Price: "",
    detail: "",
  });

  const [uploadimageshow, setUploadImageShow] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInsertProduct = async (e) => {
    const file = e.target.files[0];
    setUploadImageShow(file.name);
    console.log("file", file);

    const toCloudinary = await UploadImage(file);

    setData((Preve)=>{



      return{
        ...Preve,
        image : [...Preve.image,toCloudinary.url]
      }
    })
    console.log("Uploaded image", toCloudinary.url);
  };

 const handlesubmit = async(e) =>{
    e.preventDefault()

    console.log("API URL:", summaryApi.uploadProduct.url);

    console.log("Data being sent:", JSON.stringify(data, null, 2));



   

    const response = await fetch(summaryApi.uploadProduct.url,{
      method : summaryApi.uploadProduct.method,
      credentials : 'include',
      headers : {
        "content-type" : "application/json"
      },
      body : JSON.stringify(data)
    })

    const responseData = await response.json()

    if(responseData.success){
        toast.success(responseData?.message)
        onClose()
        fetchData()
    }


    if(responseData.error){
      toast.error(responseData?.message)
    }
  

  }

  return (
    <div className="fixed w-full h-full left-0 right-0 top-0 bottom-0 bg-opacity-35 bg-blue-300 flex justify-center items-center">
     <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-y-auto">

        <div className="flex justify-center items-center">
          <h2 className="font-bold text-lg">Insert Product</h2>
          <div className="w-fit ml-auto text-xl hover:text-blue-600 cursor-pointer" onClick={onClose}>
            <IoClose />
          </div>
        </div>

        <form className="grid p-4 gap-2"onSubmit={handlesubmit}>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            placeholder="Enter Name"
            name="productName"
            value={data.productName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border"
            required
          />

          <label htmlFor="Brand">Brand Name:</label>
          <input
            type="text"
            id="Brand"
            placeholder="Enter Brand Name"
            name="Brand"
            value={data.Brand}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border"
            required
          />

          <label htmlFor="category">Category:</label>
          <select required
            name="category"
            value={data.category}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border"

          >
            <option value="" disabled>Select a category</option>
            {productCategory.map((el, index) => (
              <option value={el.value} key={el.value + index}>
                {el.label}
              </option>
            ))}
          </select>

          <label htmlFor="productImage" className="mt-3">
            Product Image:
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="text-slate-500 flex justify-center items-center flex-col gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Product Image</p>
          <input type="file" id="uploadImageInput" className="hidden" onChange={handleInsertProduct} />
           </div>
        </div>
        </label>
        <div>
            {
             data?.image[0] ? (
              data.image.map((el, index) => {
                return (
                  <img
                    key={el} // Using the image URL as the key (assuming it's unique)
                    src={el}
                    width={90}
                    height={90}
                    className='bg-slate-100 border'
                  />     
                  )
                })

              )
              :(
                <p></p>
              )
            }
          <label htmlFor="Price">Price:</label>
            <input
              type="number"
              id="Price"
              placeholder="Enter Price"
              name="Price"
              value={data.Price}
              onChange={handleOnChange}
              className="p-2 bg-slate-100 border w-full"
              required
              
            />

                <label htmlFor="detail" className="mt-3">Details:</label>
                <textarea
                  id="detail"
                  name="detail"
                  placeholder="Enter details"
                  value={data.detail}
                  onChange={handleOnChange}
                  className="p-2 bg-slate-100 border w-full h-28 resize-none"
                  
                />
        
        </div>
            <button className=' px-3 py-2 bg-blue-800 text-white mb-6 top-1 hover:bg-blue-900'>Upload Item</button>
        </form>
      </div>
    </div>

    
  );
};

export default InsertProduct;
