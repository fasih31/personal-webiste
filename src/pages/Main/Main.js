import React from 'react';
import { Helmet } from 'react-helmet';

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components';
import { headerData } from '../../data/headerData';
import './main.css';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Fasih Ur Rehman - Product Management Innovator</title>
            </Helmet>

            <div className="sticky-container">
                <Navbar />
                <Landing />
                <About />
                <Education />
                <Skills />
                <Experience />
                <Projects />
                <Achievement />
                <Services />
                <Testimonials />
                <Blog />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default Main;
