import Link from "next/link";
import Layout from "../components/layout/Layout";

function Service1() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Building the Work Ecosystem</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Connect your conversations with the tools and services<br className="d-lg-block d-none" />that you use to get the job done. With over 1,500 apps<br className="d-lg-block d-none" />and a robust API</p>
                                    <div className="mt-40">
                                        <Link href="/page-about-1"><a className="btn btn-black shape-square icon-arrow-right-white">Get Started</a></Link>

                                        <Link href="/page-pricing-1"><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works</a></Link>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span>k</span></h4>
                                                    <p className="text-body-text color-gray-500">Projects done</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">18</span></span></h4>
                                                        <p className="text-body-text color-gray-500">Offices / Factories</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-2"><img src="/assets/imgs/page/services/1/banner-2.png" alt="Agon" /></div><img src="/assets/imgs/page/services/1/banner.png" alt="Agon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-1">Build Credit</h2>
                                <p className="text-body-text color-gray-600 mt-15">All the smart devices, electronics or software you need <br />are ready to be discoverd. Let's go!</p>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Credit Analysis</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Understand Your Credit Report.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Credit Repair</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Get You Credit Back on Track.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Credit Monitor</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Monthly Credit Monitoring.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-2 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Credit Attorney</h3>
                                    <p className="text-body-small color-gray-600 mt-5">We have Credit Attorney to help you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-1">Organize Finances</h2>
                                <p className="text-body-text color-gray-600 mt-15">All the smart devices, electronics or software you need <br />are ready to be discoverd. Let's go!</p>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Tax Reduction</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Understand Your Credit Report.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Tax Track</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Get You Credit Back on Track.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">TrueBill</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Monthly Credit Monitoring.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-2 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Debt Zero</h3>
                                    <p className="text-body-small color-gray-600 mt-5">We have Credit Attorney to help you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-1">Protect Future</h2>
                                <p className="text-body-text color-gray-600 mt-15">All the smart devices, electronics or software you need <br />are ready to be discoverd. Let's go!</p>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Identity Monitor</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Understand Your Credit Report.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Legal Assistance</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Get You Credit Back on Track.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">LockBox</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Monthly Credit Monitoring.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-2 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Extra</h3>
                                    <p className="text-body-small color-gray-600 mt-5">We have Credit Attorney to help you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-1">Manage Wealth</h2>
                                <p className="text-body-text color-gray-600 mt-15">All the smart devices, electronics or software you need <br />are ready to be discoverd. Let's go!</p>
                            </div>
                        </div>
                        <div className="row mt-10">
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Bank</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Understand Your Credit Report.</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-2 col-6">
                                <div className="card-grid-style-2 bg-1 px-3 py-3 text-center hover-up">
                                    <div><img src="assets/imgs/page/homepage1/cognity.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-6">Crypto</h3>
                                    <p className="text-body-small color-gray-600 mt-5">Get You Credit Back on Track.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default Service1;