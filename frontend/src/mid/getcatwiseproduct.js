const { default: summaryApi } = require("../common")

const fetchcatwiseProduct = async (category) => {
  const response = await fetch(summaryApi.categorywiseproduct.url, {
    method: summaryApi.categorywiseproduct.method,
    headers: {
      "Content-Type": "application/json"  
    },
    body: JSON.stringify({ category })  
  });

  const dataResponse = await response.json();
  console.log("dataResponse", dataResponse);
  return dataResponse;
};



export default fetchcatwiseProduct
