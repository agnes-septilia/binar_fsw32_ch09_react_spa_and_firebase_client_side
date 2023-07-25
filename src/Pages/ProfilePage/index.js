import React, {useState, useEffect} from "react";

// import reactstrap
import { 
    Card,CardBody,CardTitle,CardSubtitle,Container
} from "reactstrap";

// import css
import "../../Styles/ProfilePages/profilePage.css"

// import components
import Header from "../../Component/ProfilePage/Header";
import ModalProfile from "../../Component/ProfilePage/Modal";
import Footer from "../../Component/ProfilePage/Footer";


// api
import { userProfileApi } from "../../api/profilePageApi";


// use dummy data in case the server is error
const userDummy = [{ 
    id: 0,
    username: "",
    email: "",
    avatar: 'https://storage.googleapis.com/fsw32-platinum-team1.appspot.com/avatar/a58b131dc8e33b909ed5f5300?GoogleAccessId=firebase-adminsdk-sbc3l%40fsw32-platinum-team1.iam.gserviceaccount.com&Expires=1702339200&Signature=ee8zUytRhcTh4T%2BelaA6GyH8b88NSt3n2rqKnoEUv9Q5e%2BkbGbaYaZUAB9Y7Jav%2Fklbhk5qFcQDwh8%2B2etcPKgnto2JiseyKHbcZ2VNUjzSQqkDWRRri4F7fnl4P5WjwanhsgbBNoV3x%2FOThQ1fQ%2BEEhuLmcmYjo8OOQfcYbeLDZkvqyGc%2BC2M900tQSU1y3SNyqGncEIGY2qAqsvnaeD43ZhYPZJEDOLmbeEhXbz8Q0WDWGlscGMLZB9LZjygQRI0V2cikZV29l3DJ5Ali7UWUL68JE0ZJuk9awbw8b1uE%2F7%2BWCZJUeEMc1g4fiCmLUv42nWM5lNmY82aCYa0ew6Q%3D%3D',
    umur: 0,
    city: "",
    country: ""

}]

function ProfilePage() {
    // dari token, ambil id
    useEffect(() => {
        try{
            if (!localStorage.getItem('tokenId')) {
                window.location.replace('/login')
            }
        } catch(error) {
            console.error('Error occurred while verifying token:', error);
        }
    }, [])

    const id = localStorage.getItem('tokenId')

    // state
    const [profileUser, setProfileUser] = useState({ data: userDummy[0] });
    useEffect(() => {
        userProfileApi(id).then( async (result) => {
            if (result !== undefined) {
                await setProfileUser({ data: result.data })
            } 
        })
    },[] )

    
    return (
        <div className="bgProfile">
            <Container style={{ justifyContent: "center"}}>
                <div className="cardProfile">
                    <Card  body outline color='dark'
                        className="bgCard"
                    >
                        <Header />
                        <div className="d-flex justify-content-center">
                            <img alt="" src={profileUser.data.avatar} className="styleAvatar" />  
                        </div> 
                        <CardBody>
                            <CardTitle tag="h5" className="text-center">
                                {profileUser.data.username}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-4 text-dark text-center"
                                tag="h6"
                            >
                                {profileUser.data.email}
                            </CardSubtitle>
                            <div style={{ marginBottom: "70px" }}>
                            </div>
                            <ModalProfile 
                                profileUser={profileUser}/>
                            <Footer />
                        </CardBody>
                    </Card>
                </div>
            </Container>
        </div>
    )
}
    
export default ProfilePage;


    