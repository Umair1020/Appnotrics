import React, { useState } from 'react'
import Header from '../components/Header/Header'
import ".././App.css"
import Footer from '../components/Footer/Footer'
import Web from './Portfolio-web'

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const portfolioData = [
    {
      category: 'social-media',
      title: 'Social Media Project',
      images: ["/post2.jpg", "/post1.jpg","/post3.jpg","/post5.jpg","/post6.jpg","/post4.png", "/social.jpg", "/social2.png"],
    
    },
    // {
    //   category: 'cloud-hosting',
    //   title: 'Cloud Hosting Project ',
    //   images: ["/new2.webp", "/new4.webp"],
    
    // },
    {
      category: 'web-design',
      title: 'Web Design Project ',
      images: ["/new2.webp", "/new3.webp","/new1.webp","/new4.webp","/web1.png","/web2.jpg","/web3.jpg","/web5.jpg","/web6.jpg","/web7.jpg","/web8.jpg","/web9.png","/web10.jpg","/web11.jpg","/web12.jpg"],
    },
    {
      category: 'app-development',
      title: 'App Development Project ',
      images: ['/app1.jpg', "/app2.png","/app3.png","/app4.png","/app5.png","/app7.png","/app8.png",,"/app21.png","/app22.png","/app76.png"],
    },
    // Add more portfolio items as needed
  ];

  const buttonStyle = {
    borderRadius: '27.208px',
    background: 'linear-gradient(142deg, #ED4AF0 4.98%, #1F85CF 61.1%, #46DBE4 98.41%)',
    color: '#fff',
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
    cursor: 'pointer',
    margin: '5px',
    padding: "9.9px 41.8px"
  };

  const filteredPortfolio = filter === 'all'
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);
  return (
    <div className='portfolio'>
      <Header /> <br /><br />
      <section>
        <h2>
          Some of our favourite
        </h2>
        <h3 className='text-center'>
          Projects
        </h3>
        <div className="portfolio-buttons" style={{fontFamily: "poppins"}}>
          <button style={filter === 'all' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('all')}>All</button>
          <button style={filter === 'social-media' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('social-media')}>Social Media</button>
          {/* <button style={filter === 'cloud-hosting' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('cloud-hosting')}>Cloud Hosting</button> */}
          <button style={filter === 'web-design' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('web-design')}>Web Design and Development</button>
          <button style={filter === 'app-development' ? buttonStyle : inactiveButtonStyle} onClick={() => setFilter('app-development')}>App Development</button>
        </div> <br />
        <div className="portfolio-list">
          {filteredPortfolio.map((item, index) => (
            <div key={index} className="portfolio-item">
              <h2>{item.title}</h2> <br />
              <div className="container image-gallery">
                {Array.isArray(item.images) ? (
                  <div class="row" bis_skin_checked="1">
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
                                            style={{ backgroundImage: `url(${image})` }}></li>

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

                      // <section class="portfoliowrp">
                      //   <div class="container-fluid" bis_skin_checked="1">
                      //     <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                      /* <div class="row" bis_skin_checked="1"> */
                      /* <div class="col-md-4" bis_skin_checked="1"> */
                      // <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                      /* <div class="col-lg-4" bis_skin_checked="1">
                              <div class="port-box" bis_skin_checked="1">
                                <ul>
                                  <a data-fancybox="port" href="/new1.webp"
                                    alt="t-1">
                                    <li class="hk_web_height lazy tabs-web-dsgn"
                                      data-src="/new1.webp" alt="t-1"
                                      data-was-processed="true"
                                      style={{ backgroundImage: `url(${image})` }}></li>
                                  </a>
                                </ul>
                              </div>
                            </div> */
                      // <div key={i} className="col-md-3">
                      //   <div class="port-box" bis_skin_checked="1">
                      //     <a data-fancybox="port" href={image} alt={`t-${i}`}>
                      //       <div className="port-box lazy tabs-web-dsgn" style={{ backgroundImage: `url(${image})` }}></div>
                      //     </a>
                      //   </div>
                      // </div>
                      /* </div> */
                      /* </div> */
                      //       </div>
                      //     </div>
                      //   </div>
                      // </section>
                      /* <br /> */

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

          {/* {filteredPortfolio.map((item, index) => (
            <div key={index} className="portfolio-item">
              <h2>{item.title}</h2> <br />
              <div className="image-gallery"> */}
          {/* {Array.isArray(item.images) ? (
                  item.images.map((image, i) => (
                    <> */}
          {/* <section class="portfoliowrp">
                        <div class="container-fluid" bis_skin_checked="1">
                          <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                            <div class="row" bis_skin_checked="1">
                              <div class="col-md-12" bis_skin_checked="1">
                                <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                                  <div class="row" bis_skin_checked="1">
                                    <div class="col-md-12" bis_skin_checked="1">
                                      <div class="port-box" bis_skin_checked="1">
                                        <ul>
                                          <a data-fancybox="port" href="/new1.webp"
                                            alt="t-1">
                                            <li class="hk_web_height lazy tabs-web-dsgn"
                                              data-src="/new1.webp" alt="t-1"
                                              data-was-processed="true"
                                              style={{ backgroundImage:`url(${item.images})` }}></li>
                                          </a>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                       <br />
                    </>
                  ))
                ) : (
                  <>
                    <div className='box1'>
                      <img className="port-box" src={item.images} alt={item.title} />
                    </div> <br />
                  </>
                )}
              </div> <br />
              <p className='description'>{item.description}</p>
            </div>
          ))} */}

        </div>
      </section >
      <Footer />
    </div >
  )
}

export default Portfolio