import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                            <img src="/assets/imgs/template/ava_1.png" alt="Agon" />
                            <div className="content">
                                <h6 className="user-name">
                                    Hi <span className="text-brand">Steven !</span>
                                </h6>
                                <p className="font-xs text-muted">
                                    You have 5 new messages
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>
                                            <Link href="/"><a className="active">Home</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="mobile-account">
                                <h6 className="mb-10">Your Account</h6>
                                <ul className="mobile-menu font-heading">
                                    <li>
                                        <Link href="/#"><a>Profile</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Work Preferences</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Boosted Shots</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>My Collections</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Account Settings</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a>Go Pro</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/page-login"><a>Sign Out</a></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Agon - Agency Template.<br />Designed
                                by
                                <Link href="http://alithemes.com"><a>&nbsp; AliThemes</a></Link>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;