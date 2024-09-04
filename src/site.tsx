import { bg_img } from "./compoents/css_functions"
import Marquee from "react-fast-marquee"
import Star from "./compoents/StarRating"
import {FloatingWhatsApp} from "react-floating-whatsapp"
const Site = () => {
    return (
        <div>
            <div className="d-flex justify-content-between p-2 align-items-center">
                <div className="d-flex flex-row align-items-center">
                    {/* <img src="" width={60} className="img-fluid" /> */}
                    <h5 className="fs-5 custom_font primary_text fw-bold">Grimaco <span className="secondary_text">Incorporated</span></h5>
                </div>
                <div>
                    <a href="tel:+263771939493" target="_blank"><button className="btn text-white primary_button">Call Us</button></a>
                </div>
            </div>
            <div className="d-flex  justify-content-center align-items-center" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home.jpg"), height: "90vh" }}>
                <div className="text-center bg-light bg-opacity-50 p-5 rounded">
                    <h1 className="display-1 primary_text">Grimaco <span className="secondary_text">Incorporated</span></h1>
                    <p className="f fst-italic">"Your Satisfaction, Our Pleasure"</p>
                    <a href="https://wa.me/+263776034923" target="_blank"><button className="btn primary_button">Find Out More</button></a>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm p-5">
                        <h1 className="primary_text display-2">Welcome to Grimaco Incorporated</h1>
                        <p>At Grimaco Incorporated, we are dedicated to empowering businesses through expert consultancy, sales coaching, and comprehensive training solutions. Our commitment is to provide the highest quality services that meet the evolving needs of our clients. With a foundation built on integrity, excellence, and unwavering dedication, we strive to help your business not only survive but thrive in today’s competitive landscape. Welcome to a partnership where your success is our ultimate goal.</p>
                        <a href="https://wa.me/263776034923" target="_blank"><button className="btn primary_button">Get In Touch</button></a>
                    </div>
                    <div className="col-sm  p-5" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home_second.jpg"), minHeight: "50vh" }}>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm order-md-2 p-5 align-items-center d-flex">
                        <div>
                            <h1 className="secondary_text display-2">Our Expertise</h1>
                            <p>At Grimaco Incorporated, our expertise lies in transforming businesses through strategic consultancy, tailored sales coaching, and cutting-edge training programs. With years of experience across diverse industries, we bring a deep understanding of market dynamics, customer behaviors, and competitive challenges. Our team of seasoned professionals is adept at identifying opportunities for growth, optimizing sales strategies, and delivering impactful training that equips your workforce with the skills they need to excel. Whether you're looking to enhance operational efficiency, boost sales performance, or upskill your team, our expert guidance ensures you achieve your business objectives with precision and confidence.</p>
                            <a href="https://wa.me/263776034923" target="_blank"><button className="btn secondary_button">Get In Touch</button></a>
                        </div>
                    </div>
                    <div className="col-sm primary_background p-5" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home_third.jpg"), minHeight: "50vh" }}>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5 text-center">
                <div>
                    <h1 className="secondary_text display-2 fw-bold text-center">Our Mission</h1>
                    <p>To build a commercially viable, evolving self-contained, and well-equipped enterprise that is adaptive to and capable of withstanding competitive forces and challenges that present themselves in the wider environment in its quest to outlive its founders.</p>
                </div>
                <div className="mb-3 mt-3">
                    <img src="https://ngratesc.sirv.com/ristian/2149009004.jpg" className="img-fluid"/>
                </div>

                <div className=""><p><span className="display-5 fw-bold primary_text ">Our Core Values</span></p>
                    <p>At Grimaco Incorporated, our core values guide everything we do. They are the foundation of our commitment to excellence and integrity in every service we offer. Here’s a closer look at what drives us:</p>
                </div>
                <div className="row gap-2 m-4">
                    <div className="col-sm text-center p-3 border">
                        <p className="fw-bold primary_text">Reliability</p>
                        <p>We pride ourselves on being a dependable partner you can count on. Our commitment to reliability means delivering consistent, high-quality results and being there for our clients whenever they need us. Trust us to be a stable force in your business journey, providing support and solutions you can always rely on</p>
                        
                    </div>
                    <div className="col-sm text-center rounded p-3 border">
                        <p className="fw-bold primary_text">Intergirty</p>
                        <p>Integrity is the cornerstone of our business. We operate with transparency, honesty, and ethical principles in every interaction. Our commitment to integrity ensures that we build lasting, trust-based relationships with our clients, always putting their best interests at the forefront of our work.</p>
                       
                    </div>
                    <div className="col-sm text-center rounded p-3 border">
                        <p className="fw-bold primary_text">Excellence</p>
                        <p>Excellence is at the heart of everything we do. We strive for the highest standards in all aspects of our services, from business consultancy to sales training and coaching. Our pursuit of excellence ensures that every solution we provide is of the highest quality, designed to meet and exceed your expectations.</p>
                        
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div>
                    <h1 className="fw-bold display-2 text-center primary_text pt-5 pb-5">Our Services</h1>
                </div>
                <div className=" pb-4">

                <div className="row gap-3 m-4 text-center ">
                    <div className="col-sm  p-3 rounded border">
                        <p className="fw-bold secondary_text">Business Consultancy</p>
                        <p>Our business consultancy services are designed to help you navigate the complexities of today's market. We provide strategic insights and actionable plans tailored to your unique business needs, helping you optimize operations, reduce costs, and unlock new growth opportunities. Partner with us to transform your business into a more efficient, competitive, and successful enterprise.</p>
                    </div>
                    <div className="col-sm  p-3 rounded border">
                        <p className="fw-bold secondary_text">Sales Training</p>
                        <p>Empower your sales team with the skills and knowledge they need to excel. Our sales training programs focus on developing critical sales techniques, customer engagement strategies, and closing skills. Whether your team is new to sales or seasoned professionals, our training is tailored to enhance their performance, drive higher conversion rates, and ultimately boost your bottom line.</p>
                    </div>
                    <div className="col-sm  p-3 rounded border">
                        <p className="fw-bold secondary_text">Executive Coaching</p>
                        <p>Designed for business professionals, our executive coaching services focus on enhancing execution and motivation. We work with leaders and executives to refine their skills, overcome challenges, and unlock their full potential. Whether you're looking to improve decision-making, leadership abilities, or overall effectiveness, our personalized coaching ensures you achieve your professional goals and lead your organization with confidence.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center pt-5 pb-5">
                <h1 className="fw-bold display-2">
                    Our Portfolio
                </h1>
                <p className="">Clients we have worked with</p>
                <Marquee>
                    <div className="p-2 me-3 bg-light">
                        <span>Standard Global Communications</span>
                    </div>
                    <div className="p-2 me-3 bg-light">
                        <span>Aviocean Freight Services</span>
                    </div>
                    <div className="p-2 me-3 bg-light">
                        <span>Insurance Institute of Zimbabwe</span>
                    </div>
                    <div className="p-2 me-3 bg-light">
                        <span>University of Zimbabwe</span>
                    </div>
                    <div className="p-2 me-3 bg-light">
                        <span>Vadomark Logistics</span>
                    </div>
                    <div className="p-2 me-3 bg-light">
                        <span>VIP Butchery& Takeaway</span>
                    </div>

                </Marquee>
                <div className="row gap-4 m-4">
                    <div className="col-sm bg-white rounded d-flex  justify-content-center mb-2">
                            <div>
                            <br/>
                            <Star />
                            <br/>
                            <p className="fst-italic">"Thank you for impacting our lives sharing with us knowledge that can change our lives. We promise to make use of the nformation and put it into action"</p>                    
                            <p className="fw-bold">Safe Space</p>
                            </div>
                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                    <br/>

                            <Star/>
                            <br/>
                            <p className="fst-italic">"You are truly a goldmine of knowledge. It truly is a team effort. Our communication skills have improved and im glad to say the results are showing!"</p>                    
                            <p className="fw-bold">Aurora</p>
                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                            <br/>
                            <Star/>
                            <br/>
                            <p className="fst-italic">"Grimaco Incorporated has been a game-changer for our business. Their consultancy provided us with strategies that led to improvements in our operations. "</p>                    
                            <p className="fw-bold">Bleu</p>
                    </div>
                </div>

            </div>
            <div className="text-center text-white secondary_background container-fluid pt-2 pb-2">
                <div className="row d-flex align-items-center">
                    <div className="col-sm">
                        <p className="fw-bold">Contact Details</p>
                        <div className="d-flex flex-column">
                            <span>7 Bodmin Avenue, Cotswold Hills, Mabelreign. Harare. </span>
                            <span>gilmadziva@grimaco.co.zw</span>
                            <span>+263 77 603 4923</span>
                        </div>
                    </div>
                    <div className="col-sm">
                        <p className="fw-bold">Socials</p>
                        <div className="d-flex flex-column">
                            <span><a className="text-white" href="https://www.linkedin.com/company/grimaco-incorporated/"  target="_blank">Linkedin</a></span>
                            <br/>
                            <span>All Rights Reserved © Grimaco Incorporated {new Date().getFullYear()}</span>
                        </div>
                    </div>
                    <div className="col-sm">
                        <h1 className="display-4">Grimaco Incorporated</h1>
                    </div>
                </div>
            </div>
            <div className="text-center primary_background ">
                <span className="text-white">Made By <a className="text-white" target="_blank" href="https://aurorasystems.co.zw"><u>Aurora</u></a></span>
            </div>
        <FloatingWhatsApp phoneNumber="+263776034923" accountName="Ristian Consultancy" avatar="https://ngratesc.sirv.com/ristian/logo.png"/>
        </div>
    )
}

export default Site