import { bg_img } from "./compoents/css_functions"
import Marquee from "react-fast-marquee"
import Star from "./compoents/StarRating"

const Site = () => {
    

    return (
        <div>
            
            <div className="d-flex  justify-content-center align-items-center" style={{ ...bg_img("https://ngratesc.sirv.com/ristian/home.jpg"), height: "90vh" }}>
                <div className="text-center bg-light bg-opacity-50 p-5 rounded">
                    <img src="https://ngratesc.sirv.com/grimaco/logo.png" className="img-fluid"  width={120}/>
                    <h4 className="primary_text">Grimaco <span className="secondary_text">Incorporated</span></h4>
                    <p className="f fst-italic">"Your Satisfaction, Our Pleasure"</p>
                    <a href="https://wa.me/+263776034923" target="_blank"><button className="btn primary_button">Find Out More</button></a>
                </div>
            </div>
            <div className="container-fluid">
                <div>
                    <h1 className="fw-bold display-2 text-center primary_text pt-5 pb-5">Our Services</h1>
                </div>
                <div className=" pb-4">

                <div className="row gap-3 m-4 text-center ">
                    <div className="col-sm card_hover p-3 rounded border">
                        <p className="fw-bold ">Business Consultancy</p>
                        <p>Our business consultancy services are designed to help you navigate the complexities of today's market. We provide strategic insights and actionable plans tailored to your unique business needs, helping you optimize operations, reduce costs, and unlock new growth opportunities. Partner with us to transform your business into a more efficient, competitive, and successful enterprise.</p>
                        <u><a href="/services/business_consultancy"><button className="btn primary_button">View</button></a></u>
                    </div>
                    <div className="col-sm card_hover p-3 rounded border">
                        <p className="fw-bold ">Sales Training</p>
                        <p>Empower your sales team with the skills and knowledge they need to excel. Our sales training programs focus on developing critical sales techniques, customer engagement strategies, and closing skills. Whether your team is new to sales or seasoned professionals, our training is tailored to enhance their performance, drive higher conversion rates, and ultimately boost your bottom line.</p>
                        <a href="/services/sales_training"><button className="btn primary_button">View</button></a>
                    </div>
                </div>
                <div className="row gap-3 m-4 text-center">
                    <div className="col-sm card_hover  p-3 rounded border">
                        <p className="fw-bold ">Executive Coaching</p>
                        <p>Designed for business professionals, our executive coaching services focus on enhancing execution and motivation. We work with leaders and executives to refine their skills, overcome challenges, and unlock their full potential. Whether you're looking to improve decision-making, leadership abilities, or overall effectiveness, our personalized coaching ensures you achieve your professional goals and lead your organization with confidence.</p>
                        <a href="/services/executive_coaching"><button className="btn primary_button">View</button></a>
                    </div>
                    <div className="col-sm p-3 card_hover rounded border">
                        <p className="fw-bold ">Network Marketing</p>
                        <p>Start Your Own Scalable Business Today!
Are you ready to take control of your financial future without the heavy costs of starting a traditional business? By joining our digital franchising team, you’ll have the opportunity to build a scalable, flexible business on your terms. With minimal upfront investment and low startup costs, you can unlock unlimited earning potential, leverage on a proven system and an established product line, and receive comprehensive training, daily mentorship, and support to grow your business. </p>
                        <a href="/services/network_marketing"><button className="btn primary_button">View</button></a>
                    </div>
                </div>
                <div className="row gap-3 m-4 text-center">
                    <div className="col-sm p-3 card_hover rounded border">
                        <p className="fw-bold"> Marketing & Brand Activation</p>
                        <p>Bring your brand to life with our dynamic Brand Activation services. We specialize in creating impactful experiences that engage your target audience and elevate your brand's visibility. Through innovative campaigns, events, and interactive strategies, we help you build meaningful connections with customers and drive brand loyalty. Whether launching a new product or rejuvenating an existing brand, our tailored approach ensures your brand makes a lasting impression in the marketplace.</p>
                        <a href="/services/marketing_and_brand_activation"><button className="btn primary_button">View</button></a>
                    </div>
                </div>
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
                        <p className="fw-bold primary_text">Intergrity</p>
                        <p>Integrity is the cornerstone of our business. We operate with transparency, honesty, and ethical principles in every interaction. Our commitment to integrity ensures that we build lasting, trust-based relationships with our clients, always putting their best interests at the forefront of our work.</p>
                       
                    </div>
                    <div className="col-sm text-center rounded p-3 border">
                        <p className="fw-bold primary_text">Excellence</p>
                        <p>Excellence is at the heart of everything we do. We strive for the highest standards in all aspects of our services, from business consultancy to sales training and coaching. Our pursuit of excellence ensures that every solution we provide is of the highest quality, designed to meet and exceed your expectations.</p>
                        
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
            <div className="container mb-4">
            <div className="text-center">
                <h1>Meet The Team Leaders</h1>
                <div className="row gap-2">
                    <div className="col-sm border p-2 rounded">
                        <img className="img-fluid  rounded-5" width={300} src="https://ngratesc.sirv.com/grimaco/gilbert.jpg" />
                        <p className="fw-bold mt-1">Gilbert Madziva -  Business Consultant</p>
                        <p><i>Business Administration, Marketing, MSc Services Marketing</i></p>
                        <p>

Gilbert Madziva is a seasoned Business Consultant with over 20 years of experience in marketing, sales, and enterprise consulting. Since 2018, Gilbert has been a key consultant at Grimaco Incorporated, where he specializes in soft skills training, enterprise consulting, and business development strategies. His career includes extensive leadership experience, having previously served as Marketing and Sales Manager at ZB Financial Holdings Limited for nearly 19 years. Gilbert’s freelance work further enhances his expertise in sales and marketing, making him an invaluable asset to businesses seeking growth and operational excellence.</p>
                    </div>
                    <div className="col-sm border p-2 rounded">
                        <img src="https://ngratesc.sirv.com/grimaco/zayne.jpg" width={300} className="img-fluid rounded-5"/>
                        <p className="fw-bold mt-1">Zayne Komichi - Digital Consultant</p>
                        <p ><i>Business Analysis & Process Management, Project Management, Software Engineering</i></p>
                        <p>Zayne Komichi is a dynamic product manager and digital innovator with a passion for accelerating digital adoption across Africa. As a co-founder of Aurora, Zayne leads efforts in web technologies and process improvement, helping businesses turn ideas into reality with StartUp,  a Zimbabwean based accelerator. With extensive experience as a Full Stack Developer & IT Consultant, Zayne has honed his skills in web technologies and IT consulting. Certified in Business Analysis & Process Management, he is also a proud member of Microsoft for Startups Founders Hub, where he assists startups in scaling and achieving success.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="text-center container mb-5">
                <h1 className="">Call To Action</h1>
              
           
            <div className="row gap-2">
                <div className="col-sm card">
<h1 className="display-1 fw-bold">1</h1>
<p className="fw-bold">Explore Our services</p>
                <p>Browse through our tailored solutions for sales training, executive coaching, and consultancy to find the best fit for your business needs.
                </p>
                </div>
                <div className="col-sm card">
                <h1 className="display-1 fw-bold">2</h1>
<p className="fw-bold">Book A free Consultations</p>
                <p>Schedule a free 30-minute consultation with our experts to discuss your challenges and goals, and discover how we can help you achieve success.
                </p>
                </div>
                <div className="col-sm card">
                <h1 className="display-1 fw-bold">3</h1>
<p className="fw-bold">Start Growing Your Business</p>
                <p>Partner with us to implement personalized strategies that drive sales, enhance leadership skills, and transform your business for long-term growth.
                </p>
                </div>
            </div>
            </div>
          
         
       
        </div>
    )
}

export default Site