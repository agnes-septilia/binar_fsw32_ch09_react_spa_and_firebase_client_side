import React, {useState} from "react";
import { 
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Input,
    Label
} from "reactstrap";

// import css
import "../../Styles/ProfilePages/profilePage.css"


// import api
import { upsertProfileApi } from "../../api/profilePageApi";

function ModalProfile(profileUser) {
    const oldData = profileUser.profileUser.data;
    
    // ===modal===
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // state
    const [payload, setPayload] = useState({ 
        username: "",
        email: "",
        umur: "",
        city: "",
        country: ""
     });


    function handleChange(value) {
        setPayload({ ...payload, ...value })
        console.log("daya yg akan dikirim", payload)
    }

    function upsertData() { 
        console.log("id", oldData.id)      
        upsertProfileApi(oldData.id, payload).then( async (result) => {
            if (result !== undefined) {
                if (result.status === "success") {
                    await localStorage.removeItem('tokenUsername');
                    await localStorage.setItem('tokenUsername', result.username)
                    await window.location.replace('/profilePage')
                } else {
                    alert(result.message)
                    await window.location.replace('/profilePage')
                }
            }
        })
    }

    return (
        <div>
            <Button block style={{backgroundColor:"aliceblue", color:"black"}} 
                className="btn-profile mb-3"
                onClick={toggle}
            >
                Edit Profile
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader 
                    toggle={toggle} 
                    className="styleModal"
                >
                    Edit Profile
                </ModalHeader>
                <ModalBody 
                    className="styleModal"
                >
                    <div className="d-flex justify-content-center">
                        <a href="/avatar">
                            <img alt="" src={oldData.avatar} className="styleAvatar"/>
                            <h6 className="text-light mb-4" >Change Avatar</h6>
                        </a>  
                    </div>  
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="mb-1">
                                <Label for='username'><b>Username</b></Label>
                                <Input 
                                    type='text' 
                                    name='username' 
                                    id='username' 
                                    placeholder={oldData.username}
                                    value={payload.username}
                                    onChange={ (event) => {
                                        handleChange({ username: event.target.value })
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Label for='email'><b>Email</b></Label>
                                <Input 
                                    type='email' 
                                    name='email' 
                                    id='email' 
                                    placeholder={oldData.email}
                                    value={payload.email}
                                    onChange={ (event) => {
                                        handleChange({ email: event.target.value })
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Label for='umur'><b>Umur</b></Label>
                                <Input 
                                    type='number' 
                                    name='umur' 
                                    id='umur' 
                                    placeholder={oldData.umur}
                                    value={payload.umur}
                                    onChange={ (event) => {
                                        handleChange({ umur: event.target.value })
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="mb-1">
                                <Label for='city'><b>City</b></Label>
                                <Input 
                                    type='text'
                                    name='city' 
                                    id='city' 
                                    placeholder={oldData.city}
                                    value={payload.city}
                                    onChange={ (event) => {
                                        handleChange({ city: event.target.value })
                                    }}
                                />
                            </div>
                            <div className="mb-1">
                                <Label for='country'><b>Country</b></Label>
                                <Input 
                                    type='text' 
                                    name='country' 
                                    id='country' 
                                    placeholder={oldData.country}
                                    value={payload.country}
                                    onChange={ (event) => {
                                        handleChange({ country: event.target.value })
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter className="styleModal">
                <Button 
                    style={{backgroundColor:"#400584"}}  
                    onClick={upsertData}
                >
                    Submit
                </Button>{' '}
                <Button color="dark" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalProfile;

