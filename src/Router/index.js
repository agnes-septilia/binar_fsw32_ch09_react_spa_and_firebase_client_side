import React from "react";
import { Routes, Route } from "react-router-dom";

// IMPORT PAGES
import LandingPage from "../Pages/LandingPage";
import RegisterPage from "../Pages/RegisterPage";
import LoginPage from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
import AvatarPage from "../Pages/AvatarPage";
import GameListPage from "../Pages/GameListPage";
import RockPaperScissorsPage from "../Pages/RockPaperScissorsPage";
import NotFoundPage from "../Pages/NotFoundPage";

function Router() {
    return (
        <Routes>
            <Route path="/" Component={LandingPage}/>
            <Route path="/community" Component={LandingPage} />
            <Route path="/about-us" Component={LandingPage} />  
            <Route path="/share" Component={LandingPage} />  
            <Route path="/register" Component={RegisterPage}/>
            <Route path="/login" Component={LoginPage}/>
            <Route path="/profilePage" Component={ProfilePage} />
            <Route path="/avatar" Component={AvatarPage} />
            <Route path="/gamelist" Component={GameListPage} />
            <Route path="/rps" Component={RockPaperScissorsPage} />  
            <Route path="*" Component={NotFoundPage}/>
        </Routes>
    )
}

export default Router;