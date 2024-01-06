import { FaBars, FaTimes } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import React, { useState, useEffect } from "react";
import styles from "../../index.module.css"
import { Link } from "react-router-dom";
import "../../App.css"


const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [open, setOpen] = useState(false);
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }

    return (
        <>
            <Desktop>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 ">
                            <div className="my-5">
                                <img className={styles.bitech1Icon} alt="" src="/logo.png" />
                            </div>
                        </div>
                        <div className="col-lg-10  my-4">
                            <ul className={`ul  ${styles.navLinksContainer}`}>
                                <li>
                                    <Link
                                        to="/"
                                        className={`home ${activeLink === 'home' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('home')}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/about"
                                        className={`about ${activeLink === 'about' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('about')}
                                    >
                                        About Us
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link
                                        to="/technology"
                                        className={`contact1 ${activeLink === 'contact1' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('contact1')}
                                    >
                                        Technologies
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/services"
                                        className={`contact1 ${activeLink === 'service' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('service')}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/portfolio"
                                        className={`app ${activeLink === 'app' ? styles.activeLink : ''}`}
                                        onClick={() => setActiveLink('app')}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                            </ul>

                        </div>

                    </div>
                </div>

            </Desktop>
            <Mobile>
                <div>
                    {/* <div className={style.frameChild7} /> */}
                    <Link to="/">
                        <img className={styles.bitech1Icon} alt="" src="/logo.png" />
                    </Link>
                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}><FaTimes /></a>
                        <div className="ul">

                            <Link to="/">Home</Link>
                            <Link to="/about" >About</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/technology">Technologies</Link>
                            <Link to="/portfolio">Portfolio</Link>

                        </div>
                    </div>
                    <span className={styles.span1} style={{ fontSize: '30px', cursor: 'pointer', marginLeft: "320px", color: "#fff" }} onClick={openNav}><FaBars /></span>
                </div>

            </Mobile >
        </>
    )
}

export default Header
