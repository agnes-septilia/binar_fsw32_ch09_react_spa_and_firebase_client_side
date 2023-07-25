import React from "react";
import { CardHeader } from "reactstrap";
import { IoArrowBack,IoSettingsSharp } from "react-icons/io5";

function Header() {
    return (
        <CardHeader className="mb-3">
            <div className="header">
                <a href="/" style={{color: "white"}}>
                    <IoArrowBack size="1.6rem"/>
                </a>
                <h5>P R O F I L E</h5>
                <a href="/settings" style={{color: "white"}}>
                    <IoSettingsSharp size="1.5rem"/>
                </a>
            </div>
        </CardHeader>
    )
}

export default Header;
