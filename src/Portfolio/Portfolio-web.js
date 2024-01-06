import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
import "../App.css"

const Web = () => {
  return (
    <>
      <section className="page-section portfolio ">
        <Header />
        
        <div className="mains text-center">
          <Link className="btn-warning float-start mx-5 " to="/portfolio" role="button" > <i class="fas fa-arrow-left"></i></Link>
          <h2 className="webh2  fw-bold text-light" >

            Website Design Portfolio</h2>

        </div><br /><br />

        <section class="portfoliowrp">
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
                                style={{ backgroundImage: "url(new1.webp)" }}></li>
                            </a>
                            <a data-fancybox="port" href="/new1.webp"
                              alt="t-1">
                              <li class="hk_web_height lazy tabs-web-dsgn"
                                data-src="assets/images/portfolios/e-commerce/new1.webp" alt="t-1"
                                data-was-processed="true"
                                style={{ backgroundImage: "url(new1.webp)" }}></li>
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
        {/* </div> */}
        <br /><br /><br /><br /> <br /><br /><br /><br />
        <section >
          <Footer />
        </section>
      </section>


    </>
  )
}

export default Web