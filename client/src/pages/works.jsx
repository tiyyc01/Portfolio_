import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/works.css"; // Updated CSS file

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "works");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Work Experience | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="works" />
                <div className="content-wrapper">
                    <div className="works-logo-container">
                        <div className="works-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="works-main-container">
                        <div className="title works-title">
                            {INFO.works.title}
                        </div>

                        <div className="subtitle works-subtitle">
                            {INFO.works.description}
                        </div>

                        <div className="works-container">
                            <div className="works-wrapper">
                                <div className="work">
                                    <div className="work-details">
									<div className="work-subtitle">
                                            Frontend Developer
                                        </div>
                                        <div className="work-duration">
                                            November 2020 - November 2022
                                        </div>
                                        <div className="work-title">
                                            Tata Consultancy Services - ORION (Telecommunication Web Application)
                                        </div>
                                      
                                    </div>
                                    <div className="work-description">
                                        Developed and maintained the frontend of a telecommunication web application using HTML, CSS, React.js, and TypeScript. Implemented key features enabling real-time monitoring of construction activities. Collaborated with backend teams to integrate APIs and conducted code reviews to ensure high-quality software delivery.
                                    </div>
                                </div>

                                <div className="work">
                                    <div className="work-details">
									<div className="work-subtitle">
                                            Developer
                                        </div>
                                        <div className="work-duration">
                                            December 2019 - April 2020
                                        </div>
                                        <div className="work-title">
                                            Triculin Technologies Pvt Ltd - Payment and Expenditure Management System
                                        </div>
                                        
                                    </div>
                                    <div className="work-description">
                                        Developed a web-based Expense and Payment Management System using HTML, CSS, and React.js. Implemented features for financial tracking, client and supplier management, and ensured timely project delivery within an Agile framework.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Work;
