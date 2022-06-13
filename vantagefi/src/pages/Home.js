import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import Layout from "../components/layout/Layout";

let fontawesome = {
    "font-size": "28px",
    "background-color": "#E4E7EC",
    "border-radius": "50%",
    "padding": "15px"
}

let itemIcom = {
    "min-height": "249px"
}

function Index4() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <p className="text-body-lead-large color-white mt-30 pr-40">START YOUR PATH TO</p>
                                    <h1 className="text-display-4 color-white">FINANCIAL FREEDOM</h1>
                                    <p className="text-body-lead-large color-white mt-30 pr-40">Watch the video to get started!</p>
                                    <div className="mt-40">
                                        <Link href="/page-about-1"><a className="btn btn-pink icon-arrow-right-white text-heading-6">Get Start
                                        </a></Link>
                                        <Link href="/page-contact"><a className="btn btn-link color-white text-heading-6 btn-link-inter">Learn More
                                        </a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/homepage4/banner.png" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Our Solutions</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">We target the key factors that control financial transformation and growth. Our services specifically partner and help you to:</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon" style={itemIcom}><span className="icon-left"><i className="fa-solid fa-piggy-bank" style={fontawesome}></i></span>
                                        <h4 className="text-heading-5">Save Money</h4>
                                        <p className="text-body-text color-gray-600 mt-15">With our exclusive services suite, you’ll be started on the path to saving money instantly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon" style={itemIcom}><span className="icon-left"><i className="fa-solid fa-sack-dollar" style={fontawesome}></i></span>
                                        <h4 className="text-heading-5">Protect Money</h4>
                                        <p className="text-body-text color-gray-600 mt-15">You’ve worked hard for what you have. Learn how to protect it with our suite of financial and legal services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon" style={itemIcom}><span className="icon-left"><i className="fa-solid fa-money-check-dollar-pen" style={fontawesome}></i></span>
                                        <h4 className="text-heading-5">Make Money</h4>
                                        <p className="text-body-text color-gray-600 mt-15">With VFi, you can leverage what you’ve learned to make an income, all backed by the powerful tools of the platform.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon" style={itemIcom}><span className="icon-left"><i className="fa-solid fa-hands-holding-dollar" style={fontawesome}></i></span>
                                        <h4 className="text-heading-5">Grow Money</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Let your money work for you with our platform.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-3 color-gray-900 mb-30">We believe in allowing everyone the opportunity to transform their finances.</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                        <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/homepage3/img-banner-video.png" alt="Agon" /></div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
            </Layout>

        </>
    )
}

export default Index4;

