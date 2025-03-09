

const backendDomain = "http://localhost:8080"

const summaryApi = {
  signUp : {
    url : `${backendDomain}/api/singUp`,
    method : "post"
  },

  deleteProduct: {
    url: `${backendDomain}/api/logout`,
    method: "get",
  },


  signin : {
    url : `${backendDomain}/api/signin`,
    method : "post"
  },

  current_user : {
    url : `${backendDomain}/api/user-details`,
    method : "get"
  },

  uploadProduct : {
    url : `${backendDomain}/api/insert-item`,
    method : 'post'
  },
  
  allProduct: {
    url : `${backendDomain}/api/get-product`,
    method : 'get'
},

  UpdateProduct: {
  url : `${backendDomain}/api/update-product`,
  method : 'put'
},

categaryProduct: {
  url : `${backendDomain}/api/get-categeray`,
  method : 'get'
},

categorywiseproduct: {
  url : `${backendDomain}/api/product-category`,
  method : 'post'
},

deleteProduct: {
  url: `${backendDomain}/api/deleteProduct`,
  method: "delete",
},




}



export default summaryApi