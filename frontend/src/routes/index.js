 import { createBrowserRouter } from "react-router-dom";
 import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import Admin from "../pages/Admin";
import AllProducts from "../pages/AllProducts";



 const router = createBrowserRouter ([
  {
    path : "/",
    element : <App/>,
    children :[
      {
          path :"",
          element : <Home/>
      },
      {
        path :"Login",
        element : <Login/>
      },
    
      {
        path :"forgot-password",
        element : <ForgotPassword/>
      },
      {
        path :"sign-up",
        element : < SignUp/>
      },
      {
        path :"admin-panel",
        element : < Admin/>,
        children : [
            {
              
                path :"All-product",
                element : < AllProducts/>
              },
            

          
        ]
      },
    ]
  }
 ])
 
 export default router