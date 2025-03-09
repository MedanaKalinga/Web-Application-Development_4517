import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='min-h-[calc(100vh-120px)] md:flex hidden'>

    <aside className='bg-blue-300 min-h-full  w-full  max-w-60 customShadow'>
      
            <div>   
                    <Link to={"All-product"} className='px-1 py-3 hover:bg-slate-100 flex justify-center'>All product</Link>
            </div>  
    </aside>

    <main className='w-full h-full p-2'>
        <Outlet/>
    </main>
</div>

  )
}

export default Admin