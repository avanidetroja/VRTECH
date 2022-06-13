import React from 'react'
import Link from "next/link";
import Layout from "../components/layout/Layout";

const Opportunity = () => {
  return (
    <>
      <Layout>
        <section className="section-box">
          <div className="banner-hero bg-about-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 box-banner-left"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                  <h1 className="text-display-3 mt-30">Start Your Dream Business Today</h1>
                  <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Integrated workflow designed for<br className="d-lg-block d-none" />product teams. We create world-class<br className="d-lg-block d-none" />development and branding</p>
                  <div className="mt-40">
                    <Link href="/page-about-1"><a className="btn btn-black shape-square icon-arrow-right-white">Join Our Team</a></Link>

                    <Link href="/page-contact"><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us</a></Link>
                  </div>
                </div>
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2"><img src="/assets/imgs/page/about/2/banner.png" alt="Agon" /></div>
                    <div className="float-end col-lg-6 mt-90">
                      <div className="list-icons mt-50">
                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                          <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span>k</span></h4>
                          <p className="text-body-text color-gray-500">Projects done</p>
                        </div>
                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                          <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">28</span>k</span></h4>
                          <p className="text-body-text color-gray-500">Offices / Factories</p>
                        </div>
                        <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-constant.svg" alt="Agon" /></span>
                          <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">15</span>k</span></h4>
                          <p className="text-body-text color-gray-500">Constant clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-box mt-10">
          <div class="container">
            <div class="row">
              <div class="col-lg-1 col-sm-1 col-12"></div>
              <div class="col-lg-10 col-sm-10 col-12 text-center">

                <h2 class="text-display-3 color-gray-900 mb-20">Our Story</h2>
                <p class="text-body-lead-large color-gray-600 mt-10">
                  We supply enterprises,organizations and institutes of high-<br class="d-lg-block d-none" />tech industries with modern components.We build long-<br class="d-lg-block d-none" />term trusting relationships with our customers and partnes<br class="d-lg-block d-none" />for further fruitful cooperations. </p>
                <br />
              </div>
              <div class="col-lg-1 col-sm-1 col-12"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-10">
                <div class="box-image"><a class="popup-youtube btn-play-video btn-play-middle" href="https://www.youtube.com/watch?v=oRI37cOPBQQ"></a><img class="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.png" alt="Agon" /></div>
              </div>
              <div class="col-lg-1"></div>
            </div>
          </div>
        </section>


          <div className="section-box">
          <div className="container mt-100">
            <div className="row">
              <div className="col-lg-6 col-sm-12 block-img-we-do img-bottom">
                <div className="inner-image"><img className="img-responsive" src="assets/imgs/page/homepage8/img-2.png" alt="Agon" /></div>
              </div>
              <div className="col-lg-6 col-sm-12 block-we-do-2">
                <h3 className="text-heading-1 mt-30">How does it works</h3>
                <p className="text-body-lead-large color-gray-600 mt-20">We find the absolute best prices on hotels &amp; flights then we pass these savings directly to you.</p>
                <div className="list-icons-round mt-40">
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".1s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/user.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Account</h4>
                    <p className="text-body-text color-gray-600 mt-5">All the necessary information to create your account are below this.</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".3s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/destination.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Select Destination</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".5s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/trip.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Book a Trip</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                  <div className="item-icon none-bd wow animate__animated animate__fadeIn" data-wow-delay=".7s"><span className="icon-left"><img src="/assets/imgs/page/homepage8/flight.svg" /></span>
                    <h4 className="text-heading-5 color-green-900">Take your flight</h4>
                    <p className="text-body-text color-gray-600 mt-5">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-box pt-100 pb-100 mt-100 bg-orange-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-30"><span className="tag-1 bg-6 color-gray-900">Built Exclusively For You</span>
                <h3 className="text-heading-1 mt-30">Don’t take our word for it. See what our clients say.</h3>
                <p className="text-body-lead-large color-gray-600 mt-30">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                <div className="mt-40">
                  <Link href="/page-contact"><a className="btn btn-default btn-white icon-arrow-right">Learn More
                  </a></Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row" data-masonry="{&quot;percentPosition&quot;: true }">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">"No matter where you go, It's is the coolest, most happening thing around! Not able to tell you how happy I am with it. "</p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                        <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">"Wow what great service, I love it! It's is the most valuable business resource we have EVER purchased. We can't understand how we've been living without it. I couldn't have asked for more than this."</p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-2.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                        <p className="text-body-text-md">Krusty Krab</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">"Your company is truly upstanding and is behind its product 100%. It's the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. "</p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-3.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-900 mb-5">Leslie Alexander</h4>
                        <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="card-grid-style-2 card-square hover-up mb-20">
                      <p className="text-body-text color-gray-600 text-comment">"It's is both attractive and highly adaptable. It's exactly what I've been looking for. Definitely worth the investment."</p>
                      <div className="box-img-user">
                        <div className="img-user img-user-round"><img src="/assets/imgs/page/homepage2/user-4.png" alt="Agon" /></div>
                        <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                        <p className="text-body-text-md">Soylent Corp</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      









      </Layout>
    </>
  )
}

export default Opportunity