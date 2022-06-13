import React from 'react'
import Layout from "../components/layout/Layout";


const Pricing = () => {
    return (
        <>
            <Layout>
                <section>
                  
                    <div className="container">
                        <h3 className="text-heading-1 text-center mt-50 mb-50">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                        <div className="container mt-10">
                            <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-10">
                                    <div className="block-pricing-3 mb-90">
                                        <div className="row">
                                            <div className="col-lg-12 col-xl-6 col-sm-12">
                                                <div className="block-pricing-left">
                                                    <div className="box-switch"><label><input id="cb_billed_type" type="checkbox" name="billed_type" /><span className="text-billed text-billed-month active">Monthly</span><span className="text-billed text-billed-year">Yearly</span></label></div>
                                                    <ul className="list-package-feature">
                                                        <li className="active">Unlimited updates</li>
                                                        <li className="active">Custom designs &amp; features</li>
                                                        <li className="active">Custom permissions</li>
                                                        <li>Custom instructors</li>
                                                        <li>Many devices</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-sm-12">
                                                <div className="block-price-item active" data-package={3}><span className="checkbox" />
                                                    <div className="block-pricing-info">
                                                        <h3 className="text-heading-5 color-gray-900 mb-15">Standard</h3><span className="tag-round text-body-text">Save %20</span>
                                                    </div>
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$35</span><span className="text-heading-3 for-year">$420</span><span className="text-month for-month text-body-text color-gray-500">/month</span><span className="text-month for-year text-body-text color-gray-500">/year</span></div>
                                                </div>
                                                <div className="block-price-item" data-package={3}><span className="checkbox" />
                                                    <div className="block-pricing-info">
                                                        <h3 className="text-heading-5 color-gray-900 mb-15">Essentials</h3><span className="tag-round text-body-text">Save %20</span>
                                                    </div>
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$89</span><span className="text-heading-3 for-year">$1068</span><span className="text-month for-month text-body-text color-gray-500">/month</span><span className="text-month for-year text-body-text color-gray-500">/year</span></div>
                                                </div>
                                                <div className="block-price-item" data-package={4}><span className="checkbox" />
                                                    <div className="block-pricing-info">
                                                        <h3 className="text-heading-5 color-gray-900 mb-15">Premium</h3><span className="tag-round text-body-text">Save %20</span>
                                                    </div>
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$125</span><span className="text-heading-3 for-year">$1500</span><span className="text-month for-month text-body-text color-gray-500">/month</span><span className="text-month for-year text-body-text color-gray-500">/year</span></div>
                                                </div>
                                                <div className="block-price-item" data-package={5}><span className="checkbox" />
                                                    <div className="block-pricing-info">
                                                        <h3 className="text-heading-5 color-gray-900 mb-15">Unlimited</h3><span className="tag-round text-body-text">Save %20</span>
                                                    </div>
                                                    <div className="box-info-price"><span className="text-heading-3 for-month display-month">$199</span><span className="text-heading-3 for-year">$2388</span><span className="text-month for-month text-body-text color-gray-500">/month</span><span className="text-month for-year text-body-text color-gray-500">/year</span></div>
                                                </div>
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

export default Pricing