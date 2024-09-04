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
                    <a href="https://wa.me/263776034923" target="_blank"><button className="btn primary_button">Find Out More</button></a>
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

                <div>Our Values</div>
                <div className="row gap-2 m-4">
                    <div className="col-sm text-center p-3 border">
                        <p className="fw-bold">Global Reach</p>
                        <p>Our connections span across four major countries, giving you access to international job markets.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                    </div>
                    <div className="col-sm text-center rounded p-3 border">
                        <p className="fw-bold">Tailored Placements</p>
                        <p>We consider your CV, educational background, and age to find the best possible job match for you.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-hand-index" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                        </svg>
                    </div>
                    <div className="col-sm text-center rounded p-3 border">
                        <p className="fw-bold">Comprehensive Support</p>
                        <p>From the application process to job placement, we provide full support to ensure your success.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                        </svg>
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