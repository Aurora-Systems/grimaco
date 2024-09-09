import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import Site from './site'
import { Footer, NavbarComp } from './compoents/navigation'
import { ToastContainer } from 'react-toastify'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'react-toastify/dist/ReactToastify.css';
import Blog from './compoents/blog'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarComp/>
    <BrowserRouter>
    <Routes>

      <Route index path="/" element={<Site/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    <FloatingWhatsApp phoneNumber="+263776034923" accountName="Grimaco Incorporated" avatar="https://ngratesc.sirv.com/grimaco/logo.png"/>
    <ToastContainer/>
  </StrictMode>,
)
