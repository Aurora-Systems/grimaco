export const Navbar=()=>{
    return(
        <div className="d-flex justify-content-between p-2 align-items-center">
                <div className="d-flex flex-row align-items-center">
                    {/* <img src="" width={60} className="img-fluid" /> */}
                    <h5 className="fs-5 custom_font primary_text fw-bold">Grimaco <span className="secondary_text">Incorporated</span></h5>
                </div>
                <div className="d-flex gap-2 flex-row align-items-center">
                    <a href="/" className="text-black">Home</a>
                    <a href="/blog" className="text-black">Blog</a>
                    <a href="#contact" className="text-black">Contact</a>
                    <a href="tel:+263771939493" target="_blank"><button className="btn text-white primary_button">Call Us</button></a>
                </div>
        </div>
    )
}

export const Footer=()=>{
    return(
        <>
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