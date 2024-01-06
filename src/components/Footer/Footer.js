import React from 'react'
import "../../App.css"
import "./footer.css"
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Footer = () => {

    return (
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className="container">
                    <div className="row mx-auto ">

                        <div className="col-lg-5 col-md-6">
                            <div className="footer-info">
                                <h3>Appnotrics</h3>
                                <p className='w-75' style={{ fontFamily: "poppins" }}>
                                Let's craft your digital masterpiece. Let's chat
                                </p>

                            </div>
                            <form action="" method="post">
                                <input type="email" placeholder='Enter Email Address' name="email" className='email' />
                                {/* <input type="submit" value="Subscribe" className='subscribe' /> */}
                                <button type="submit" value="Subscribe" className='subscribe'><FaArrowRight /></button>
                            </form>
                        </div>


                        <div className="col-lg-2 col-md-6 footer-links">
                        <br />
                            <h4>Useful Links</h4> 
                         
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/">Home</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/service">Services</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                        <br />
                            <h4>Our Services</h4>
                           
                            <ul>
                                
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Web Design & Development</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Product Management</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Marketing</Link></li>
                                <li><i className="bi bi-chevron-right"></i> <Link to="/portfolio">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                        <br />
                            <h4>Contact Us</h4>
                       
                            <ul>
                                {/* <li><div class="gem-contacts-item gem-contacts-address"> <h4 >Office</h4>

                                    Plot no 324 Block 7/8 CP Berar<br />
                                    Society Dhoraji Karachi.
                                </div></li> */}
                                <li>
                                    {/* <div class="gem-contacts-item gem-contacts-phone"> <br /><h4 >Contact</h4> */}
                                    {/* 02134120126 <br /> */}
                                    support@appnotrics.com

                                    {/* </div> */}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                    <div className="d-flex  align-items-center mx-auto text-center">
                        <div className="copyright text-center " style={{ fontFamily: "poppins" }}>
                            © All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>


        </footer>

    )
}

export default Footer