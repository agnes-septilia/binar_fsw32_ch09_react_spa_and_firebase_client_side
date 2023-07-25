import React , {useState, useEffect} from "react";
import { Button, UncontrolledTooltip } from 'reactstrap';
import { FaUserCircle, FaRegFileAlt } from "react-icons/fa";

// import component
import LogoutModal from "./logoutModal";

// use dummy data in case the server is error
const emptyToken = [{
    id: null, username:null, avatar:null
}]

function WelcomeCard() {
    // check if user is login
    const [activeToken, setActiveToken] = useState({data: [...emptyToken]})
    useEffect(() => {
        try {
            const id = localStorage.getItem('tokenId')
            const username = localStorage.getItem('tokenUsername')
            const avatar = localStorage.getItem('tokenAvatar')
            
            if (username) {
                const newToken = {id, username, avatar}
                setActiveToken({data: newToken})
            } else {
                setActiveToken({data: [...emptyToken]})
            }
        } catch (error) {
            console.log(error)
        }
    }, []); 


    console.log("activeToken", activeToken)
    // show welcome card if user hasn't been authorized
    if (!activeToken.data.username) {
        return (
            <div>
                <div className="p-3 d-flex justify-content-between">
                    <div className="mx-3">
                        <h2 className="text-light">Welcome, Guest !</h2>
                        <span className="text-light">Sign in to play the game!</span>
                    </div>

                    <div className="mt-1 d-flex">
                        <div>
                            <a href="/register">
                            <Button color="transparent" className="mx-3" id="register-button" >
                                <FaRegFileAlt size={30} color="white"/>
                                <h6 className="text-light pt-2">REGISTER</h6>
                            </Button>
                            </a>
                        </div>

                        <div>
                            <a href="/login">
                            <Button color="transparent" className="mx-3" id="login-button">
                                <FaUserCircle size={30} color="white"/>
                                <h6 className="text-light pt-2">LOGIN</h6>
                            </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )

    // show welcome card if user hasn't been authorized
    } else {
        return (
            <div>
                <div className="p-3 d-flex justify-content-between">
                    <div className="mx-3">
                        <h2 className="text-light">Welcome, {activeToken.data.username} !</h2>
                        <span className="text-light">Choose your game and become our top player!</span>
                    </div>

                    <div className="mt-1 d-flex">
                        <div>
                            <a href="/profilePage">
                            <Button color="transparent" id="avatar-button" >
                                <img src={activeToken.data.avatar} alt="" width={70} height={70} />
                            </Button>
                            <UncontrolledTooltip 
                                placement="left"
                                target="avatar-button">
                                Update Profile
                            </UncontrolledTooltip>
                            </a>
                        </div>

                        <div>
                            <LogoutModal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};

export default WelcomeCard;