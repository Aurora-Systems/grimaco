import { FormEvent, useRef, useState } from "react"
import { Nav, NavbarBrand, NavbarCollapse, Navbar } from "react-bootstrap"
import emailjs from "@emailjs/browser"
import {toast} from "react-toastify"

export const NavbarComp=()=>{
  
        return(
            <div className="sticky-top bg-white">

                <div className="bg-white p-0 sticky-top">
                    <div className="ms-2 me-2">
                    <Navbar expand="lg" >
                     
                           <NavbarBrand>
                                <h5 className="primary_text">Grimaco <span className="secondary_text">Incorporated</span></h5>
                            </NavbarBrand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav "  >
                                <small>Menu</small>
                            </Navbar.Toggle>
                            <NavbarCollapse  id="basic-navbar-nav ">
                                <Nav className="text-dark me-auto ">
                                    <Nav.Link  className="text-black" href="/">Home</Nav.Link>
                                    <Nav.Link className="text-black" href="/blog">Blog</Nav.Link>
                                    <Nav.Link className="text-black" href="#contact">Contact</Nav.Link>
                                </Nav>
                                <a href="tel:+263776034923"><button className="btn primary_button w-100">Call Us</button></a>
                            </NavbarCollapse>
                    </Navbar>
                    </div>
                </div>
            </div>
        )
    
}

export const Footer=()=>{
    const [loading, set_loading] =useState<boolean>(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form:any = useRef();
    const sendEmail = (e:FormEvent) => {
    e.preventDefault();
    set_loading(true)
    emailjs
      .sendForm('service_2tebyla', 'template_u5zwtxl', form.current, {
        publicKey: 'ew1StMU__aUWbv1Rf',
      })
      .then(
        () => {
          toast('Message Sent');
          form.current.reset()
        },
        (error) => {
            toast('Failed to send message');
            console.log(error)
        },
      ).finally(()=>{
        set_loading(false)
      })
  };
    return(
        <>
          <div className="container-fluid mb-3 " id="contact">
                <h1 className="secondary_text text-center">Contact <span className="primary_text">Us</span></h1>
                <div className="row">
                    
                    <div className="col-sm">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-3">
                                <span>Full Name</span>
                                <input type="text" name="full_name" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <span>Contact Number</span>
                                <input type="tel" name="contact_number" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <span>Email</span>
                                <input type="email" name="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <span>Your Message</span>
                                <textarea className="form-control" name="message"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btn primary_button " disabled={loading}>{loading?"Sending...":"Send"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           <div className="text-center text-white secondary_background container-fluid pt-2 pb-2">
                <div className="row d-flex align-items-center">
                    <div className="col-sm mb-3">
                        <p className="fw-bold">Contact Details</p>
                        <div className="d-flex flex-column">
                            <span>7 Bodmin Avenue, Cotswold Hills, Mabelreign. Harare. </span>
                            <span>gilmadziva@grimaco.co.zw</span>
                            <span>+263 77 603 4923</span>
                        </div>
                    </div>
                    <div className="col-sm mb-3">
                        <p className="fw-bold">Socials</p>
                        <div className="d-flex flex-column">
                            <span><a className="text-white" href="https://www.linkedin.com/company/grimaco-incorporated/"  target="_blank">Linkedin</a></span>
                            <br/>
                            <span>All Rights Reserved © Grimaco Incorporated {new Date().getFullYear()}</span>
                        </div>
                    </div>
                    <div className="col-sm mb-3">
                        <h1 className="display-4">Grimaco Incorporated</h1>
                    </div>
                </div>
            </div>
            <div className="text-center primary_background ">
                <span className="text-white">Made By <a className="text-white" target="_blank" href="https://aurorasystems.co.zw"><u>Aurora</u></a></span>
            </div>
        </>
    )
}