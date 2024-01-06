import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./about.module.css";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from "react";

const AboutUs = () => {

    const PrevArrow = (props) => (
        <div
            {...props}
            className="slick-arrow slick-prev"
            style={{ left: "-30px" }}
        >
            Previous
        </div>
    );

    const NextArrow = (props) => (
        <div
            {...props}
            className="slick-arrow slick-next"
            style={{ right: "-30px" }}
        >
            Next
        </div>
    );
    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const sliderRef = useRef(null);
    const sliderRef2 = useRef(null);


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
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
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className={styles.aboutUs}>
                <Header />
               
                <div className="row">
                    <div className="col-lg-12"> 
                        <h3 className={styles.webDevelopProduct}>Web Develop Product</h3>
                        <h3 className={styles.forBusinessAnd}>for Business and Individuals</h3>
                        <p className={styles.loremIpsumIs}>
                        From concept to execution, we are dedicated to
                                visualizing  your ideas and <br /> transforming them 
                                into reality
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <b className={styles.goingAboveAndContainer}>
                                <p className={styles.goingAbove}>GOING ABOVE AND BEYOND IS WHAT  WE DO</p>
                            </b>
                        </div>
                    </div>
                    <div className={styles.withTwoDecades}>
                        With two decades of experience and a presence across the globe, our
                        teams work as a cohesive unit to ensure we go above and beyond to
                        deliver to our diverse customer base worldwide.
                    </div>
                    <div className="row">
                        <div className=" col-lg-6">
                            <b className={styles.innovationIsOurContainer}>
                                <p className={styles.goingAboveAnd}>
                                    INNOVATION IS OUR KEY PRINCIPLE AND
                                </p>
                                <p className={styles.goingAboveAnd}>
                                    IS FUNDAMENTAL TO EVERYTHING WE DO
                                </p>
                            </b>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.whileProvidingA}>
                                While providing a range of IT solutions and digital technology services
                                to startups and large enterprises, alongside retailers and resellers, we
                                empower our customers not only to grow, but to achieve excellence in
                                everything they do.
                            </div>
                            <div className={styles.exploreTheAppnotricsContainer}>
                                <p className={styles.goingAboveAnd}>
                                    Explore the Appnotrics world and learn how we enable businesses
                                    worldwide in attaining their full potential.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


                <Desktop>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">

                                <img className={styles.rectangleIcon} alt="" src="/rectangle-90@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className={styles.aboutUsChild1} alt="" src="/rectangle-91@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className={styles.aboutUsChild2} alt="" src="/rectangle-92@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className={styles.aboutUsChild3} alt="" src="/rectangle-93@2x.png" />
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="row">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="col-lg-3">

                                <img className="w-50 my-5 mt-5 mx-auto" alt="" src="/rectangle-90@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className="w-50 my-5 mt-5 mx-auto" alt="" src="/rectangle-91@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className="w-50 my-5 mt-5 mx-auto" alt="" src="/rectangle-92@2x.png" />
                            </div>
                            <div className="col-lg-3">

                                <img className="w-50 my-5 mt-5 mx-auto" alt="" src="/rectangle-93@2x.png" />
                            </div>

                        </Slider>
                    </div>
                </Mobile>
                <div className="container">

                    <p className={styles.whatMatterTo}>WHAT MATTER TO US</p>


                    <div className={styles.qualityMattersThat}><br />
                        Quality matters. That is why the global Appnotrics team ensures the
                        highest standards of quality in everything we produce for our customers.
                        We take pride in being among the top ITes companies in Pakistan.
                    </div>
                </div>




                <div className={styles.appnotricsTechnologiesIs}>
                    Appnotrics Technologies is on a mission to build the best IT solutions
                    and systems for businesses at every scale while creating a future where
                    every technological advancement is for the benefit of the people.
                </div>

                <div className={styles.rectangleDiv} />
                <b className={styles.ourVision}>
                    <p className={styles.goingAboveAnd}>OUR</p>
                    <p className={styles.goingAboveAnd}>VISION</p>
                </b>
                <b className={styles.ourMission}>
                    <p className={styles.goingAboveAnd}>OUR</p>
                    <p className={styles.goingAboveAnd}>MISSION</p>
                </b>

                <div className={styles.aTechnologicallyConnected}>
                    A technologically connected world where no entity is left behind. We at
                    Appnotrics empower businesses with innovative IT enabled services
                    globally.
                </div>



                <img className={styles.aboutUsChild4} alt="" src="/rectangle-97@2x.png" />
                


            </div >
            <Footer />
        </>
    );
};

export default AboutUs;
