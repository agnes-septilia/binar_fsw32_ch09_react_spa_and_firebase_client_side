import React, {useState} from "react";
import { Label, Input, Button } from "reactstrap";

// import css
import '../../Styles/index.css'

// import api
import { LoginApi } from '../../api/loginApi'

function LoginPage() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        try {
            event.preventDefault()
            LoginApi(inputs).then(async result => {
                if (!result) {
                    await alert("Internal Server Error!")
                } else {
                    if (result.status === "success") {
                        await localStorage.setItem('tokenId', result.data.id)
                        await localStorage.setItem('tokenUsername', result.data.username)
                        await localStorage.setItem('tokenAvatar', result.data.avatar)
                        await window.location.replace('/')
                    } else {
                        await alert(result.message)
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{    
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "black"
            }}>
        <div
            className="p-5"
            style={{ 
                width: "400px",
                border: "5px solid black",
                borderRadius: "10px", 
                padding: "20px",
                background:'aliceblue'
            }}>
        <h4 className="text-center mb-4">LOGIN YOUR ACCOUNT</h4><hr/>

        <div>
            <Label for="username">
                USERNAME
            </Label>
            <Input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="USERNAME" 
                style={{border: "1px solid black"}}
                value={inputs.username || ""}
                onChange={handleChange} required/><br/>
        </div>
        <div>
            <Label for="password">
                PASSWORD
            </Label>
            <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="PASSWORD" 
                style={{border: "1px solid black"}}
                value={inputs.password || ""}
                onChange={handleChange} required/><br/>
        </div>
        <div className="d-flex justify-content-center mt-4" style={{gap:"20px"}}>
            <a href='/'><Button
                type="submit"
                color="outline-dark"
                style={{ 
                    width: "100%", 
                    marginTop: "10px", 
                    backgroundColor: 'grey', 
                    color: 'white', 
                    fontWeight: 'bold'
                }}>
                HOME
            </Button></a>
            <Button
                type="submit"
                color="outline-dark"
                style={{ 
                    width: "100%", 
                    marginTop: "10px",
                    backgroundColor: '#4E67EB', 
                    color: 'white', 
                    fontWeight: 'bold' 
                }}
                onClick={handleSubmit}
                >
                LOGIN
            </Button>
        </div>
        <div style={{textAlign:"center", fontStyle:"italic", marginTop: "10px"}}>
            <p>
                New user? Click <a href="/register" class="text-link">Register</a>
            </p>
        </div>
        </div>
        </div>
    )
};

export default LoginPage;