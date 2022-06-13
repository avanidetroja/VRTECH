import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link to="/" className="d-flex">
                                        {headerStyle ? <img alt="VantageFi" src="logo-white.svg" /> : <img alt="Agon" src="logo.svg" />}
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li>
                                            <Link to="/" className="active">Home</Link>
                                        </li>
                                       
                                        <li>
                                            <Link to="/Financial_education">Financial Education</Link>
                                        </li>
                                        <li>
                                            <Link to="/Opportunity">Opportunity</Link>
                                        </li>
                                        <li>
                                            <Link to="/membership">Membership</Link>
                                        </li>
                                        <li>
                                            <Link to="/Pricing">Pricing</Link>
                                        </li>
                                        <li>
                                            <Link to="/Contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                        <div className="header-right">
                            <div className="block-signin">
                                <Link to="/page-signup" className="btn btn-default hover-up icon-arrow-right">Get Started</Link>
                                <Link to="/page-signup" className="btn btn-default hover-up"><i className="fa-solid fa-circle-user"></i> Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;