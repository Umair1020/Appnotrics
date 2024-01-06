import React, { useRef } from 'react'
import "../../App.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Arr = [
    {
        id: 1,
        content: {
            title: 'Web Development',
            description: 'Web development is the use of coding to create websites and apps. It brings ideas online and combines design and usefulness.',
        },
        images: ['./rectangle54.png', './rectangle62.png'],
        skills: ["HTML", "CSS", "JavaScript", "React", "Node Js", "Bootstrap"]
    },
    {
        id: 2,
        content: {
            title: 'App Development',
            description: ' Appnotrics transforms your ideas into mobile magic, from sleek interfaces to captivating user journeys. Lets build something extraordinary together.',
        },
        images: ['./rectangle55.png', './rectangle63.png'],
        skills: ["iOS", "Android", "React Native", "Flutter", "Java", "Python"]
    },
    {
        id: 3,
        content: {
            title: 'Cloud Hosting',
            description: 'Leave the Hardware Blues Behind: Ditch the maintenance stress. Appnotrics managed cloud hosting keeps your systems up and running, 24/7.',
        },
        images: ['./rectangle56.png', './rectangle64.png'],
        skills: ["AWS", "Azure", "Google Cloud", "IBM Cloud", "Oracle Cloud", "DigitalOcean"]
    },
    {
        id: 4,
        content: {
            title: 'UI/UX Designing',
            description: 'Transform clicks into connections. Appnotrics crafts interfaces that are as beautiful as they are intuitive, weaving experiences that users sing about.',
        },
        images: ['./rectangle57.png', './rectangle65.png'],
        skills: ["UI Design", "UX Design", "Adobe XD"]
    },
];

const Servicecomp = () => {
    const sliderRef = useRef(null);
    const handlePreviousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false, // Remove default arrows
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <div className="container sec2">
            <button className='slider-button-left' onClick={handlePreviousSlide} >
                <img className='arrow-icon' src='./group-22.png' alt='Right Arrow' />
            </button>

            <Slider {...settings} ref={sliderRef}>
                {Arr.map((data) => (
                    <div key={data.id} className="slider-item">
                        <div className='row align-items-center'>
                            <div className='col-lg-4'>
                                <div className="left-section">
                                    <p className="lorem  text-light" style={{ fontFamily: "poppins", fontWeight: "bold" }}>SERVICE</p>
                                    <h3 className="h3 text-light" style={{ fontFamily: "Comfortaa" }}>{data.content.title}</h3>
                                    <p className="lorem text-light" style={{ fontFamily: "poppins", fontWeight: "lighter", fontSize: "15px" }}>{data.content.description}</p>
                                    <ul className='serviceul  list-unstyled d-flex'>
                                        {/* Render first three skills */}
                                        <div className=" flex-wrap">
                                            {data.skills.slice(0, 3).map((skill, index) => (
                                                <li key={index} className='serviceli text-light my-4'>
                                                    {skill}
                                                </li>
                                            ))}
                                        </div>
                                        {/* Render next three skills */}
                                        <div className=" flex-wrap">
                                            {data.skills.slice(3, 6).map((skill, index) => (
                                                <li key={index} className='serviceli text-light my-4 mx-5'>
                                                    {skill}
                                                </li>
                                            ))}
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className="right-section">
                                    <div className="image-container">
                                        <div className="parentCard">
                                            <img className="img mx-4" src={data.images[0]} alt={data.content.title} />
                                            <img className="img1 mx-3" src={data.images[1]} alt={data.content.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <button className='slider-button-right' onClick={handleNextSlide} >
                <img className='arrow-icon' src='./group-21.png' alt='Right Arrow' />
            </button>
        </div>
    )
}

export default Servicecomp