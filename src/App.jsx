import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom'
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className='bg-dark'>
      <h1 className='text-white text-center py-2 shadow-lg'>React laravel blog app </h1>
    </div>
    <Routes>
      <Route path='/' element={<Blogs/>}/>
    <Route path='/create' element={<CreateBlog/>}/>
    </Routes>
    <ToastContainer />
   
    </>
  )
}

export default App
