import React from 'react'
import CategaryList from '../components/CategaryList'
import Banner from '../components/Banner'
import DisplyproducHome from '../components/DisplyproducHome'


const Home = () => {
  return (
    <div>
      <Banner/>
      <CategaryList/>
      <DisplyproducHome category={"Mouse"} topic={"Best Selling Mouse"}/>
      <DisplyproducHome category={"headphones"} topic={"Best Selling  Headphones"}/>
      <DisplyproducHome category={"monitors"} topic={"Best Selling  Monitors"}/>
      <DisplyproducHome category={"laptop"} topic={"Best Selling  Laptop"}/>
      <DisplyproducHome category={"keyboards"} topic={"Best Selling  Keyboards"}/>
      <DisplyproducHome category={"controllers"} topic={"Best Selling  Controllers"}/>
      
      
 
     

    </div>
  )
}

export default Home
