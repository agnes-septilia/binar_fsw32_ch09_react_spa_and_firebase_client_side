import React from "react";
import { CardFooter } from "reactstrap";

// import component
import LogoutModal from "../LandingPage/logoutModal";

function Footer() {
    return (
        <div>
            <CardFooter>
                <div style={{
                    textAlign: "center"
                }}>
                    <LogoutModal />
                </div>
            </CardFooter>
        </div>
    )
}

export default Footer;