import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryApi from './common';
import Context from './context';

function App() {

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: 'include',
    });

    const dataApi = await dataResponse.json();

   
  };

  useEffect(() => {
    fetchUserDetails(); 
  }, []); 

  return (


    <>

<Context.Provider value={{
          fetchUserDetails // user detail fetch 
          
      }}>
      <ToastContainer position='top-center' />
      <Header />
      <main className='min-h-[calc(100vh-120px)] py-16'>
        <Outlet />
      </main>
      <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
