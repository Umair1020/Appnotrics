import React, { useRef } from 'react'
import styles from "./service.module.css"
import Header from '../components/Header/Header'
import { useMediaQuery } from 'react-responsive'
import Footer from '../components/Footer/Footer'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Service = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }



  const sliderRef = useRef(null);

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
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  return (
    <>
      <div className={styles.service}>
        <Header />
        <div className={styles.serviceChild6} />

        <div className='row'>
          <div className='col-lg-12'>
            <div className={styles.empoweringBusinessesTo}>
              Empowering Businesses to Transform Ideas Into Reality
            </div>
          </div>
        </div>

        <Mobile>
          <div className='container'>
            {/* <div className='row'> */}
            <Slider ref={sliderRef} {...settings}>
              <div className={styles.parentdiv}>
                {/* <div className='col-lg-3'> */}
                <p className="text-center text-dark">Web Development</p>
                <img className="mx-auto " alt="" src="/undefined6.png" />
                <div className={`text-center text-dark ${styles.lorem}`} >
                  Web development crafts online experiences through design and coding
                </div>
                {/* </div> */}
              </div>

              <div className={styles.parentdiv}>
                {/* <div className='col-lg-3'> */}
                <p className="text-center text-dark">App Development</p>
                <img className="mx-auto " alt="" src="/undefined7.png" />
                <div className={`text-center text-dark ${styles.lorem}`} >
                  App development brings digital ideas to life through coding and design.
                </div>
                {/* </div> */}
              </div>

              <div className={styles.parentdiv}>
                {/* <div className='col-lg-3'> */}
                <p className="text-center d-flex justify-content-center align-items-center text-dark">
                  Cloud Hosting
                </p>
                <img className="mx-auto  " alt="" src="/undefined8.png" />
                <div className={`text-center text-dark ${styles.lorem}`} >
                  Cloud hosting provides scalable and reliable web infrastructure over the internet.
                </div>
              </div>
              {/* </div> */}
              <div className={styles.parentdiv}>
                {/* <div className='col-lg-3'> */}
                <p className="text-center text-dark">UI/UX Designing</p>

                <img className="mx-auto " alt="" src="/undefined9.png" />
                <div className={`text-center text-dark ${styles.lorem}`} >
                  UI/UX design focuses on creating intuitive and delightful digital experiences.
                </div>
              </div>
              {/* </div> */}

            </Slider>
          </div>
          {/* </div> */}
        </Mobile>
        <Desktop>
          <div className='container'>
            <div className='row'>
              <div className={styles.groupParent}>
                <div className={styles.groupContainer}>
                  <div className='col-lg-3 '>
                    <div className={styles.rectangleParent1}>
                      <div className={` ${styles.groupChild2}`} />
                      <p className={styles.webDevelopment}>Web Development</p>
                      <img className={styles.image32Icon} alt="" src="/undefined6.png" />
                      <div className={styles.loremIpsumIs5}>
                        Web development crafts online experiences through design and coding
                      </div>

                    </div>

                    <div className='col-lg-3 '>
                      <div className={styles.rectangleParent2}>
                        <div className={` ${styles.groupChild2}`} />
                        <b className={styles.webDevelopment}>App Development</b>
                        <img className={styles.image33Icon} alt="" src="/undefined7.png" />
                        <div className={styles.loremIpsumIs6}>
                          App development brings digital ideas to life through coding and design.
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 '>
                      <div className={`${styles.rectangleParent3}`}>
                        <div className={` ${styles.groupChild2}`} />
                        <b className={styles.webDevelopment}>
                          <p className={styles.about}>{`Cloud `}</p>
                          <p className={styles.about}>Hosting</p>
                        </b>
                        <img className={styles.image36Icon} alt="" src="/undefined8.png" />
                        <div className={styles.loremIpsumIs7}>
                          Cloud hosting provides scalable and reliable web infrastructure over the internet.
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 '>
                      <div className={styles.rectangleParent4}>
                        <div className={` ${styles.groupChild2}`} />
                        <b className={styles.webDevelopment}>
                          <p className={styles.about}>{`UI/UX `}</p>
                          <p className={styles.about}>Designing</p>
                        </b>
                        <img className={styles.image37Icon} alt="" src="/undefined9.png" />
                        <div className={styles.loremIpsumIs8}>
                          UI/UX design focuses on creating intuitive and delightful digital experiences.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Desktop>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 '>
                <img className={styles.img} src='/Group1.png' />
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>Web Development</h3>
                <p className={`text-start w-75${styles.p}`}> Web development combines design and coding to create websites and web apps. It's all about user-friendly digital experiences. Developers use programming languages to make it happen.</p>
                <button className={styles.btn}>Learn More</button>
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>Mobile Development</h3>
                <p className={`text-start w-75${styles.p}`}> App development is the process of creating mobile or desktop applications, encompassing design, coding, and testing to deliver functional and user-friendly software for various platforms.</p>
                <button className={styles.btn}>Learn More</button>
              </div>
              <div className='col-lg-6 '>
                <img className={styles.img} src='/Group2.png' />
              </div>
              <div className='col-lg-6 '>
                <img className={styles.img} src='/Group3.png' />
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>Cloud Hosting</h3>
                <p className={`text-start w-75${styles.p}`}> Cloud hosting is a scalable and flexible web hosting solution that leverages the power of remote servers. It allows businesses to store and access their data and applications securely over the internet, ensuring high availability and cost-efficiency.</p>
                <button className={styles.btn}>Learn More</button>
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>UX/UI Designing</h3>
                <p className={`text-start w-75${styles.p}`}> UI/UX design is the craft of creating intuitive and visually appealing digital interfaces. It focuses on enhancing user satisfaction by optimizing usability and accessibility, resulting in a seamless and enjoyable interaction with websites and applications .</p>
                <button className={styles.btn}>Learn More</button>
              </div>
              <div className='col-lg-6'>
                <img className={` ${styles.img}`} src='/Group4.png' />
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <br />  <br /> <br /> <br /> <br /> <br />
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img className={styles.img} src='/Group1.png' />
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>Web Development</h3>
                <p className={`text-start w-75${styles.p}`}> Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
                <button className={styles.btn}>Learn More</button>
                <br /><br /><br /><br />
              </div>
              <hr />
              <div className='col-lg-6'>
                <img className={styles.img} src='/Group2.png' />
              </div>
              <div className='col-lg-5'>
                <h3 className={styles.h3}>Mobile Development</h3>
                <p className={`text-start w-75${styles.p}`}> Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
                <button className={styles.btn}>Learn More</button>
                <br /><br /><br /><br />
              </div> <hr />
              <div className='col-lg-5'>
                <img className={styles.img} src='/Group3.png' />
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>Cloud Hosting</h3>
                <p className={`text-start w-75${styles.p}`}> Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
                <button className={styles.btn}>Learn More</button>
                <br /><br /><br /><br />
              </div> <hr />
              <div className='col-lg-6'>
                <img className={styles.img} src='/Group4.png' />
              </div>
              <div className='col-lg-6'>
                <h3 className={styles.h3}>UX/UI Designing</h3>
                <p className={`text-start w-75 ${styles.p}`}> Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.</p>
                <button className={styles.btn}>Learn More</button>
                <br />  <br />  <br />
              </div>
            </div>
          </div>
        </Mobile>
      </div>
      <Footer />
    </>
  )
}

export default Service