import { bg_img } from "./compoents/css_functions"
import Marquee from "react-fast-marquee"
import Star from "./compoents/StarRating"
import {FloatingWhatsApp} from "react-floating-whatsapp"

const Site = () => {
    return (
        <div>
            <div className="d-flex justify-content-between p-2 align-items-center">
                <div className="d-flex flex-row align-items-center">
                    <img src="https://ngratesc.sirv.com/ristian/logo.png" width={60} className="img-fluid" />
                    <h5 className="fs-5 custom_font primary_text">Grimaco <span className="secondary_text">Incorporated</span></h5>
                </div>
                <div>
                    <a href="tel:+263771939493" target="_blank"><button className="btn text-white primary_button">Call Us</button></a>
                </div>
            </div>
            <div className="d-flex  justify-content-center align-items-center" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home.jpg"), height: "90vh" }}>
                <div className="text-center bg-light bg-opacity-50 p-5 rounded">
                    <h1>Grimaco Incorporated</h1>
                    <p className="f fst-italic">"Your Satisfaction, Our Pleasure"</p>
                    <a href="https://wa.me/263776034923" target="_blank"><button className="btn primary_button">Find Out More</button></a>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm p-5">
                        <h1 className="primary_text">Welcome to Grimaco Incorporated</h1>
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
                            <h1 className="secondary_text">Our Expertise</h1>
                            <p>At Grimaco Incorporated, our expertise lies in transforming businesses through strategic consultancy, tailored sales coaching, and cutting-edge training programs. With years of experience across diverse industries, we bring a deep understanding of market dynamics, customer behaviors, and competitive challenges. Our team of seasoned professionals is adept at identifying opportunities for growth, optimizing sales strategies, and delivering impactful training that equips your workforce with the skills they need to excel. Whether you're looking to enhance operational efficiency, boost sales performance, or upskill your team, our expert guidance ensures you achieve your business objectives with precision and confidence.</p>
                            <a href="https://wa.me/263776034923" target="_blank"><button className="btn secondary_button">Get In Touch</button></a>
                        </div>
                    </div>
                    <div className="col-sm primary_background p-5" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home_third.jpg"), minHeight: "50vh" }}>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5">
                <div>
                    <h1 className="text-black display-1 fw-bold text-center">Why Us?</h1>
                </div>
                <div className="row gap-2 m-4">
                    <div className="col-sm text-center secondary_background rounded text-white p-3">
                        <p className="fw-bold">Global Reach</p>
                        <p>Our connections span across four major countries, giving you access to international job markets.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                        </svg>
                    </div>
                    <div className="col-sm text-center secondary_background rounded text-white p-3">
                        <p className="fw-bold">Tailored Placements</p>
                        <p>We consider your CV, educational background, and age to find the best possible job match for you.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-hand-index" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                        </svg>
                    </div>
                    <div className="col-sm text-center secondary_background rounded text-white p-3">
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

                <div className="row gap-3 m-4 text-center text-white">
                    <div className="col-sm secondary_background p-3 rounded">
                        <p className="fw-bold">CV and Cover Letter Writing</p>
                        <p>Your CV and cover letter are often your first impression with potential employers. Our professional writing service ensures that your application materials stand out. We tailor each CV and cover letter to highlight your strengths, skills, and experiences, presenting you as the ideal candidate for the job. With our expert touch, you’ll confidently present your qualifications and make a lasting impression.</p>
                    </div>
                    <div className="col-sm secondary_background p-3 rounded">
                        <p className="fw-bold">Training and Coaching</p>
                        <p>Success in your career requires more than just securing a job; it involves continuous learning and development. Our training and coaching services are designed to enhance your skills and prepare you for the demands of your new role. Whether you need industry-specific training, interview coaching, or guidance on career development, our experts provide personalized support to help you thrive in your career.</p>
                    </div>
                    <div className="col-sm secondary_background p-3 rounded">
                        <p className="fw-bold">Employment Procurement</p>
                        <p>We specialize in matching talented individuals with top companies across the UK, Poland, Canada, Bulgaria, Lithuania, and Australia. Our recruitment service is personalized to ensure that we find the right fit for both the candidate and the employer. We work with over 100 companies in various industries, offering opportunities in healthcare, IT, education, hospitality, construction, and more. Whatever your field, we have the connections and expertise to help you find your next role.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center pt-5 pb-5">
                <h1 className="fw-bold display-2">
                    In Demand Job Opportunities
                </h1>
                <p className="">Our recruitment services cover a broad spectrum of professions, including</p>
                <Marquee>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bandaid text-white" viewBox="0 0 16 16">
                                <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242M12.293 8 8.027 3.734 3.738 8.031 8 12.293zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492z" />
                                <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707M8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Healthcare</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-book text-white" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Education</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-laptop text-white" viewBox="0 0 16 16">
                                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Information Technology</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people text-white" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Human Resources</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bar-chart text-white" viewBox="0 0 16 16">
                                <path d="M4 11H2v3h2zm5-4H7v7h2zm5-5v12h-2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Sales & Marketing</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-truck text-white" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Transportation </span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-hearts text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Hospitality & Domestic Services</span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-2" style={{ minWidth: "250px" }}>
                        <div className="primary_background rounded-start p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cone-striped text-white" viewBox="0 0 16 16">
                                <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9s-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12m-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4s1.2-.036 1.725-.098m4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257z" />
                            </svg>
                        </div>
                        <div className="bg-light rounded-end p-2 w-100">
                            <span>Construction</span>
                        </div>
                    </div>
                </Marquee>
                <div className="row gap-4 m-4">
                    <div className="col-sm bg-white rounded d-flex  justify-content-center mb-2">
                            <div>
                            <br/>
                            <Star />
                            <br/>
                            <p className="fst-italic">Ristian Consultancy made my dream of working abroad a reality. Their team was incredibly supportive throughout the entire process, and I landed a fantastic job in the UK. Highly recommend their services!"</p>                    
                            <p className="fw-bold">Thandiwe Ndlovu</p>
                            </div>
                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                    <br/>

                            <Star/>
                            <br/>
                            <p className="fst-italic">"I was looking for a job in Australia, and Ristian Consultancy connected me with a great employer. The team was professional and responsive. They truly care about finding the right fit for you."</p>                    
                            <p className="fw-bold">Tonderai  Masawi</p>
                    </div>
                    <div className="col-sm bg-white rounded mb-2">
                            <br/>
                            <Star/>
                            <br/>
                            <p className="fst-italic">"I secured a nursing position in Canada. The process was smooth, and they guided me every step of the way. I couldn&apos;t be happier with my new role! Can't recommend enough"</p>                    
                            <p className="fw-bold">Sarah Manadaza</p>
                    </div>
                </div>

            </div>
            <div className="text-center container pt-2 pb-2">
                <h1 className="text-black">Join Us Today</h1>
                <p>
                    Whether you're looking to advance your career or explore new opportunities abroad, Ristian Consultancy is here to help you achieve your goals. Explore our job listings, submit your CV, and let us connect you with the right employers.
                    <br />
                    Send an email to <a href="mailto:info@ristian.co.zw">info@ristian.co.zw</a>
                    <br/>
                    Call on <a href="tel:+263776034923">+263 77 603 4923</a>
                </p>
            </div>
            <div className="text-center primary_background ">
                <span className="text-white">Made By <a className="text-white" href="https://aurorasystems.co.zw">Aurora</a></span>
            </div>
        <FloatingWhatsApp phoneNumber="+263776034923" accountName="Ristian Consultancy" avatar="https://ngratesc.sirv.com/ristian/logo.png"/>
        </div>
    )
}

export default Site