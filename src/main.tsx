import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './index.css'
import Site from './site'
import { Footer, NavbarComp } from './compoents/navigation'
import { ToastContainer } from 'react-toastify'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'react-toastify/dist/ReactToastify.css';
import Blog from './compoents/blog'
import BusinessConsultancy from './services/business_consultancy'
import SalesTraining from './services/sales_training'
import NetworkMarketing from './services/network_marketing'
import ExecutiveCoaching from './services/executive_coaching'
import Marketing from './services/marketing'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarComp/>
    <BrowserRouter>
    <Routes>

      <Route index path="/" element={<Site/>}/>
      <Route path="/services">
        <Route index element={<BusinessConsultancy/>}/>
        <Route path="business_consultancy" element={<BusinessConsultancy/>}/>
        <Route path="sales_training" element={<SalesTraining/>}/>
        <Route path="executive_coaching" element={<ExecutiveCoaching/>}/>
        <Route path="network_marketing" element={<NetworkMarketing/>}/>
        <Route path="marketing_and_brand_activation" element={<Marketing/>}/>
      </Route>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    <FloatingWhatsApp phoneNumber="+263776034923" accountName="Grimaco Incorporated" avatar="https://ngratesc.sirv.com/grimaco/logo.png"/>
    <ToastContainer/>
  </StrictMode>,
)
