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
                        <div className="title works-title">Work Experience</div>
                        <div className="subtitle works-subtitle">
                            A look at my journey in software development.
                        </div>

                        <div className="works-container">
                            <div className="works-wrapper">
                                <div className="work">
                                    <div className="work-details">
                                        <div className="work-subtitle">
                                            Full Stack Developer
                                        </div>
                                        <div className="work-duration">
                                            Nov 2020 - Nov 2022
                                        </div>
                                        <div className="work-title">
                                            Tata Consultancy Services - ORION (Telecommunication Web Application)
                                        </div>
                                    </div>
                                    <div className="work-description">
                                        <ul>
                                            <li>Developed and maintained a telecommunication web application using React.js, TypeScript, and MySQL.</li>
                                            <li>Integrated backend APIs with Spring Boot and Kotlin, improving performance by 30%.</li>
                                            <li>Enhanced UI by implementing Redux state management, reducing page load times by 25%.</li>
                                            <li>Optimized database queries and API calls, reducing response time by 40%.</li>
                                            <li>Automated CI/CD deployment using Jenkins, enhancing code deployment efficiency.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="work">
                                    <div className="work-details">
                                        <div className="work-subtitle">
                                            Software Developer
                                        </div>
                                        <div className="work-duration">
                                            Dec 2019 - Apr 2020
                                        </div>
                                        <div className="work-title">
                                            Triculin Technologies - Payment and Expenditure Management System
                                        </div>
                                    </div>
                                    <div className="work-description">
                                        <ul>
                                            <li>Designed and developed a financial tracking system using React, Redux, and Spring Boot.</li>
                                            <li>Implemented real-time payment workflows, improving transaction speed and accuracy.</li>
                                            <li>Reduced API response time by 30% through query optimizations.</li>
                                            <li>Led UI refactoring, reducing redundant code by 20% for improved maintainability.</li>
                                        </ul>
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
