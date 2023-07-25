import React from "react";

// import components
import CarouselComponent from "../../Component/LandingPage/carousel";
import WelcomeCard from "../../Component/LandingPage/welcome";
import PopularGames from "../../Component/LandingPage/popularGames";
import LeaderBoard from "../../Component/LandingPage/leaderboard";
import CommingSoon from "../../Component/ComingSoon";

// import css
import '../../Styles/LandingPages/landingPage.css'

const MainPage = () => {
    return (
        <div>
            <div className="landing-header">
                <CarouselComponent />
            </div>
            <div className="d-flex">
                <div className='d-flex flex-column'>
                    <div className="welcome-card">
                        <WelcomeCard />
                    </div>
                    <div>
                        <PopularGames />
                    </div>
                    <div>
                        <LeaderBoard />
                    </div>
                </div>
                <div>
                    <CommingSoon />
                </div>
            </div>
                
        </div>
    )
}


export default MainPage;