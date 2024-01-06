import styles from "../index.module.css"
import { useState, useEffect, useRef } from "react";
import "../App.css"
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header/Header";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Footer from "../components/Footer/Footer";
import Servicecomp from "../components/ServiceComp/Servicecomp";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "animate.css"
import { Base_Url } from "../"


// CustomPrevArrow Component
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'red' }}
            onClick={onClick}
        >
            Previous
        </div>
    );
};

// CustomNextArrow Component
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'green' }}
            onClick={onClick}
        >
            Next
        </div>
    );
};


const Landingpage = () => {
    const [filter, setFilter] = useState('web-design');

    const handleContactClick = () => {
        setShowPopup(true);
    };
    const portfolioData = [
        {
            category: 'social-media',
            title: 'Social Media Project',
            images: ["/social.jpg", "/social2.png",],

        },
        {
            category: 'graphics-desining',
            title: 'Graphic Designing Project ',
            images: ["/2.webp", "/1.webp"],

        },
        {
            category: 'web-design',
            title: 'Web Design Project ',
            images: ['/new3.webp', "/new4.webp"],


        },
        {
            category: 'app-development',
            title: 'App Development Project ',
            images: ['/app1.jpg', "/app2.png"],

        },
        // Add more portfolio items as needed
    ];

    const buttonStyle = {
        borderRadius: '27.208px',
        background: "linear-gradient(142deg, #ED4AF0 4.98%, #1F85CF 61.1%, #46DBE4 98.41%)",
        color: '#fff',
        fontFamily: "poppins",

        border: 'none',
        cursor: 'pointer',
        margin: '5px',
        padding: "9.9px 41.8px"
    };

    const inactiveButtonStyle = {
        borderRadius: '27.208px',
        background: 'linear-gradient(0deg, rgba(92, 92, 92, 0.50) 0%, rgba(92, 92, 92, 0.50) 100%)',
        color: '#fff',
        border: 'none',
        fontFamily: "poppins",
        cursor: 'pointer',
        margin: '5px',
        padding: "9.9px 41.8px"
    };

    const filteredPortfolio = portfolioData.filter(item => item.category === filter);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [formErrors, setFormErrors] = useState({
        name: false,
        email: false,
        phone: false,
        message: false
    });

    const [submissionMessage, setSubmissionMessage] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = {};

        // Check for empty fields
        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === "") {
                errors[key] = true;
            }
        });

        if (Object.keys(errors).length > 0) {
            setFormErrors({ ...errors });
            setSubmissionMessage("Please fill out all fields");
            return;
        }

        try {
            const response = await fetch('http://server.appnotrics.com/send-email', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmissionMessage("Thanks for contacting us!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
                setFormErrors({
                    name: false,
                    email: false,
                    phone: false,
                    message: false
                });
            } else {
                setSubmissionMessage("Failed to send email");
            }
        } catch (error) {
            console.error("Error:", error);
            setSubmissionMessage("Failed to send email");
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        // Clear error message on input change
        if (formErrors[e.target.name]) {
            setFormErrors({
                ...formErrors,
                [e.target.name]: false
            });
        }
    };
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // });
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const response = await fetch('http://server.appnotrics.com/send-email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         if (response.ok) {
    //             alert('Email sent successfully');
    //             setFormData({
    //                 name: '',
    //                 email: '',
    //                 phone: '',
    //                 message: ''
    //             });
    //         } else {
    //             alert('Failed to send email');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Failed to send email');
    //     }
    // };
    // const handleInputChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    //     });
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setFormData({
    //         firstName: '',
    //         email: '',
    //         phoneNumber: '',
    //         projectDescription: '',
    //     });
    //     try {
    //         const response = await fetch('http://serverfile.appnotrics.com/send-email', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formData),
    //         });
    //         if (response.ok) {
    //             toast.success('Email sent successfully');
    //             alert('Email sent successfully');
    //         } else {
    //             console.error('Error sending email:', response.status);
    //             alert('Failed to send email');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     email: '',
    //     phoneNumber: '',
    //     projectDescription: '',
    // });

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const handlePreviousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const sliderRef = useRef(null);

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
                }
            }
        ]
    }
    return (
        <>
            <div className='parent1' id="app">
                <ToastContainer />
                <Header />
                <div className='container main'>
                    <div className='row '>
                        <div className='col-lg-5 animate-fade-in '> <br /><br /><br /><br /><br /><br />
                            <span className="text-light" style={{ fontFamily: "comfortaa" }}> Welcome to <h2 className="text-light">Appnotrics</h2> </span>
                            <p style={{ fontFamily: "poppins" }}>From concept to execution, we are dedicated to
                                visualizing  your ideas and transforming them
                                into reality.</p>
                            <button className='btn'>Join Us</button> <br /><br /><br />
                        </div>

                        <div className='col-lg-7 '>
                            <br /> <br /> <br /> <br />
                            <img className="mainimg" src="/main.png" />
                        </div>
                    </div>
                </div>
                {/* <br /> <br /> <br /> <br /> <br /> */}

                <Servicecomp />

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h2 className='text-light' style={{ fontFamily: "Comfortaa" }}><br /><br /><br /> What we do</h2>
                            <p className='text-light' style={{ fontFamily: "poppins" }}>  Appnotrics Solutions is an expert in developing tailored software solutions that provide organizations more control. Our area of specialization is developing websites and mobile applications, and we provide cutting-edge, custom technology solutions.</p><br />
                            <button className='btn'>Learn More </button> <br /><br /><br />
                            <p className="text-light" style={{ fontFamily: "poppins" }}>Product Design</p><br />
                            <p className="text-light" style={{ fontFamily: "poppins" }}>Software Development</p><br />
                            <p className="text-light" style={{ fontFamily: "poppins" }}>Innovation Consulting</p>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                            <div class='aboutbox' style={{width: "60%", alignItems: "center"}}>
                                <div > <br /> <br /><br />
                                    <img src='/ceo.jpg' alt='Person 1' style={{ width: '100%', borderRadius: "10px",  height: '100%', alignItems: "center" }} />
                                </div>
                                <h4 className='abth4 text-light text-center my-2' style={{fontFamily: "poppins"}}>Muhammad  Bilal</h4>
                                        <p className='text-light text-center' style={{fontFamily: "poppins"}}>Founder / Ceo</p>
                                {/* <h4 className='text-dark text-center my-2'>Muhammad <br /> Bilal</h4>
                                <p className='text-dark text-center'>Founder & Ceo</p> */}
                            </div><br />
                        </div>
                    </div>
                </div> <br />
                <div className='container'>
                    <div className='row d-flex align-items-center justify-content-center'>
                        <div className='col-lg-12 text-center'> <br />
                            <h2 className='ourservice d-flex text-center justify-content-center'> Our <p>&nbsp;</p> <h2 className='ourservice2'>Services </h2> </h2>
                            <p className="text-light text-center" style={{ fontFamily: "poppins" }}>From pixels to profit, we launch your digital dreams.</p>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'><br /><br />
                                <img src='/1.png' />
                                <h4 className='text-light mx-3 ' style={{
                                    fontFamily: "Comfortaa", fontSize: "20px", display: " flex",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}> <br />Mobile App Development</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'><br /><br />
                                <img src='/2.png' />
                                <h4 className='text-light mx-3' style={{
                                    fontFamily: "Comfortaa", fontSize: "20px", display: " flex",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}><br /> Web Development</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'><br /><br />
                                <img src='/4.png' />
                                <h4 className='text-light mx-3' style={{
                                    fontFamily: "Comfortaa", fontSize: "20px", display: " flex",
                                    textAlign: "center",
                                    justifyContent: "center",
                                }}><br /> Cloud Hosting</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'><br /><br />
                                <img src='/5.png' />
                                <h4 className='text-light mx-3' style={{
                                    fontFamily: "Comfortaa", fontSize: "20px", display: " flex",
                                    textAlign: "center",
                                    justifyContent: "center", alignItems: "center"
                                }}> <br /> UI / UX Design</h4>
                            </div>
                            <br />
                        </div>

                        {/* <div className='row d-flex align-items-center justify-content-center'>
                            <div className='col-lg-3'>
                            <div className='parentbox'><br /><br />
                                <img src='/5.png' />
                                <h4 className='text-light mx-3' style={{
                                    fontFamily: "Comfortaa", fontSize: "20px", display: " flex",
                                    textAlign: "center",
                                    justifyContent: "center", alignItems: "center"
                                }}> <br /> UI / UX Design</h4>
                            </div>
                            <br />
                        </div>
                        </div> */}
                    </div>
                </div>
                <br /> <br /> <br />

                <div className='container'>
                    <div className='row'>

                        <Desktop>
                            <div className='portfolio'>
                                <section>
                                    <h2 className='ourservice d-flex text-center justify-content-center' style={{ color: "#01FFD1" }}> Our  <p style={{ height: "0px" }}>&nbsp;</p> <h2 className='ourservice2'>Design </h2> </h2>
                                    <p className="text-light text-center" style={{ fontFamily: "poppins" }}>Craft experiences that sing. We don't just design, we orchestrate user journeys.</p>
                                    <div className="col-lg-12 d-flex col-md-7 col-sm-7 " >
                                        <div className="portfolio-buttons mx-auto" >
                                            <button className="mx-2 " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
                                            <button className="mx-2 " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
                                            <button className="mx-2 " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
                                            <button className="mx-2 " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
                                        </div>
                                    </div><br />
                                    <div className="portfolio-list">
                                        {filteredPortfolio.map((item, index) => (
                                            <div key={index} className="portfolio-item">

                                                <div className="image-gallery mx-auto">
                                                    {Array.isArray(item.images) ? (
                                                        <div class="row" style={{
                                                            margin: "auto",
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        }} bis_skin_checked="1">
                                                            {item.images.map((image, i) => (
                                                                <div key={i} className="col-lg-4">

                                                                    <section class="portfoliowrp">
                                                                        {/* <div class="container-fluid" bis_skin_checked="1"> */}
                                                                        <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                                                                            <div class="row" bis_skin_checked="1">
                                                                                <div class="col-md-12" bis_skin_checked="1">
                                                                                    <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                                                                                        <div class="row" bis_skin_checked="1">
                                                                                            <div class="col-md-12" bis_skin_checked="1">
                                                                                                <div class="port-box" bis_skin_checked="1">

                                                                                                    <ul className='d-flex'>

                                                                                                        <li class="hk_web_height lazy tabs-web-dsgn"
                                                                                                            data-src="/new1.webp" alt="t-1"
                                                                                                            data-was-processed="true"
                                                                                                            style={{ backgroundImage: `url(${image})`, }}></li>

                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* </div> */}
                                                                        </div>
                                                                    </section>
                                                                </div>


                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="box1">
                                                            <img className="port-box" src={item.images} alt={item.title} />
                                                        </div>
                                                    )}
                                                </div>
                                                <br />
                                                <p className='description'>{item.description}</p>
                                            </div>
                                        ))}

                                    </div>
                                </section >

                            </div >
                        </Desktop>
                        <Mobile>
                            <div className='portfolio'>
                                <section>
                                    <h2 className="text-center fw-bold " > <br />
                                        Our Latest Projects
                                    </h2>
                                    <div className="col-lg-12 d-flex col-md-7 col-sm-7 my-2" >
                                        <div className="portfolio-buttons mx-auto" style={{
                                            display: " flex",
                                            flexWrap: "wrap"
                                        }}>
                                            <button className="mx-auto " style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
                                            <button className="mx-auto " style={filter === 'graphics-desining' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('graphics-desining')}>Graphic Designing</button>
                                            <button className="mx-auto " style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
                                            <button className="mx-auto " style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
                                        </div>
                                    </div><br />
                                    <div className="portfolio-list">
                                        {filteredPortfolio.map((item, index) => (
                                            <div key={index} className="portfolio-item">

                                                <div className="image-gallery mx-auto">
                                                    {Array.isArray(item.images) ? (
                                                        <div class="row" style={{
                                                            margin: "auto",
                                                            display: "flex",
                                                            justifyContent: "center"
                                                        }} bis_skin_checked="1">
                                                            {item.images.map((image, i) => (
                                                                <div key={i} className="col-lg-4">

                                                                    <section class="portfoliowrp">
                                                                        {/* <div class="container-fluid" bis_skin_checked="1"> */}
                                                                        <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                                                                            <div class="row" bis_skin_checked="1">
                                                                                <div class="col-md-12" bis_skin_checked="1">
                                                                                    <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                                                                                        <div class="row" bis_skin_checked="1">
                                                                                            <div class="col-md-12" bis_skin_checked="1">
                                                                                                <div class="port-box" bis_skin_checked="1">

                                                                                                    <ul className='d-flex'>

                                                                                                        <li class="hk_web_height lazy tabs-web-dsgn"
                                                                                                            data-src="/new1.webp" alt="t-1"
                                                                                                            data-was-processed="true"
                                                                                                            style={{ backgroundImage: `url(${image})`, }}></li>

                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {/* </div> */}
                                                                        </div>
                                                                    </section>
                                                                </div>


                                                            ))}
                                                        </div>
                                                    ) : (
                                                        <div className="box1">
                                                            <img className="port-box" src={item.images} alt={item.title} />
                                                        </div>
                                                    )}
                                                </div>
                                                <br />
                                                <p className='description'>{item.description}</p>
                                            </div>
                                        ))}

                                    </div>
                                </section >

                            </div >
                        </Mobile>
                    </div>
                </div >
                <br /> <br />
                <Desktop>
                <div>
                    <h2 className='ourservice d-flex text-center justify-content-center' > Our <p>&nbsp;</p> <h3 className='ourservice2'>Client Speaks </h3> <br /> </h2>
                    <p className='text-center text-light' style={{ fontFamily: "poppins" }}>We don't just build software, we build relationships</p>
                    <div className='container'>
                        <div className='row '>

                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br /><br />
                                <img src='/ellipse-93@2x.png' className='mx-auto d-flex justify-content-center align-items-center' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>"Appnotrics turned my app dream into reality! Their design is stunning, the user experience is seamless, and my conversion rates are soaring. 5/5 stars!" - Sarah M., Entrepreneur</p>
                                <br />
                            </div>
                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br /><br />
                                <img src='/Ellipse 94.svg' className='mx-auto d-flex justify-content-center ' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>From the initial consultation to the final launch, Appnotrics was professional, patient, and incredibly creative. Our app is a masterpiece, and we owe it all to them." - David C., App Developer</p>
                            </div>
                            <br />
                            <div className='col-lg-3 mx-auto textmonial  mx-2'> <br /><br />
                                <img src='/Ellipse 95.svg' className='mx-auto d-flex justify-content-center w-0' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>Appnotrics doesn't just build software, they build relationships. Working with them was a joy, and the results speak for themselves." - Thomas B., Business Owner</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div> <br /> <br /> <br />
                </Desktop>
                <Mobile>

                <div>
                    <h2 className='ourservice d-flex text-center justify-content-center' > Our <p>&nbsp;</p> <h3 className='ourservice2'>Client Speaks </h3> <br /> </h2>
                    <p className='text-center text-light' style={{ fontFamily: "poppins" }}>We don't just build software, we build relationships</p>
                    <div className='container'>
                        <div className='row '>

            <Slider {...settings} ref={sliderRef}>
                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br />
                                <img src='/ellipse-93@2x.png' className='mx-auto d-flex justify-content-center align-items-center' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>"Appnotrics turned my app dream into reality! Their design is stunning, the user experience is seamless, and my conversion rates are soaring. 5/5 stars!" - Sarah M., Entrepreneur</p>
                                <br />
                            </div>
                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br />
                                <img src='/Ellipse 94.svg' className='mx-auto d-flex justify-content-center ' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>From the initial consultation to the final launch, Appnotrics was professional, patient, and incredibly creative. Our app is a masterpiece, and we owe it all to them." - David C., App Developer</p>
                            <br />
                            </div>
                            <div className='col-lg-3 mx-auto textmonial  mx-2'> <br />
                                <img src='/Ellipse 95.svg' className='mx-auto d-flex justify-content-center w-0' /> <br />
                                <p className='text-center text-light w-75 mx-auto' style={{ fontFamily: "poppins", fontSize: "15px" }}>Appnotrics doesn't just build software, they build relationships. Working with them was a joy, and the results speak for themselves." - Thomas B., Business Owner</p>
                                <br />
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div> <br /><br />
                </Mobile>
                <div className='container'>
                    <h2 className='ourservice d-flex text-center justify-content-center'> Lets Talk    <br /></h2>
                    <div className='row align-items-center '>
                        <div className='col-lg-4 contact  mx-auto'>
                            <h3 className='text-light'>Contact Us</h3>
                            <p className='mt-3 w-100 text-light' style={{ fontWeight: 100 }}>It is a long established fact that a by the readable content is that it has a more-or-less normal distribution</p>
                            <p>
                                <img className="animation text-light" src="/phone.gif" style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(100) hue-rotate(180deg)' }} alt="Phone Icon" /> &nbsp;
                                02134120126
                            </p>
                            <p>
                                <img className="animation text-light" src="/message.gif" style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(100) hue-rotate(180deg)' }} alt="Message Icon" /> &nbsp;
                                support@appnotrics.com
                            </p>
                        </div>

                        <div className='col-lg-6'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div className='col-lg-12'>
                                    <TextField
                                        id="standard-basic"
                                        label="First Name"
                                        variant="standard"
                                        className='box'
                                        name="name"
                                        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.name && (
                                        <p className="error-message">Please enter your name</p>
                                    )}
                                </div>
                                <div className='col-lg-12'>
                                    <TextField
                                        id="standard-basic"
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        variant="standard"
                                        className='box'

                                        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    {formErrors.email && (
                                        <p className="error-message">Please enter your name</p>
                                    )}
                                </div>
                                <div className='col-lg-12'>
                                    <TextField
                                        id="standard-basic"
                                        label="Phone Number"
                                        type="number"
                                        required
                                        variant="standard"
                                        name="phone"
                                        className='box'
                                        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.phone && (
                                        <p className="error-message">Please enter your name</p>
                                    )}
                                </div>
                                <div className='col-lg-12'>
                                    <TextField
                                        id="standard-basic"
                                        label="Tell us About Your Project"
                                        variant="standard"
                                        className='box'
                                        name="message"
                                        style={{ color: "#fff", borderBottom: "2px solid #fff" }}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    />
                                    {formErrors.message && (
                                        <p className="error-message">Please enter your name</p>
                                    )}
                                </div>

                            </Box>
                            <div >
                                <br /><br />
                                <button className="btn" onClick={handleSubmit} >Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <Footer />
                <a href="https://wa.me/+447340238749" target="_blank" class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div >
        </>
    );
};

export default Landingpage;
