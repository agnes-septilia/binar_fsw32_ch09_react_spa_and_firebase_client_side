import React from "react";
import { useLocation } from "react-router-dom";

// import components
import Sidebar from "../../Component/Sidebar";
import MainPage from "../MainPage";
import Community from '../CommunityPage'
import AboutUs from "../AboutUsPage";
import Share from "../SharePage"

// import css
import '../../Styles/LandingPages/landingPage.css'


const LandingPage = () => {
    const location = useLocation();

    function renderContent() {
        try{
            switch (location.pathname) {
                case "/community" :
                    return(
                        <Community />
                    );
                case "/about-us" :
                    return(
                        <AboutUs />
                    );    
                case "/share" :
                    return(
                        <Share />
                    );      
                default :
                    return(
                        <MainPage />
                    );                  
            }    
        } catch (error) {
            console.log(error)
        }
    };


    return(
        <body className="landing-background">
            <div className="d-flex justify-content-between">
                <div>
                    <Sidebar />
                </div>
                <div className="d-flex flex-column">
                    <div style={{marginBottom:"120px", marginLeft: "200px"}}>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </body>
    )
};

export default LandingPage