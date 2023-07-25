import React, {useState} from "react";
import { Label, Input, Button } from "reactstrap";

// import css
import '../../Styles/index.css'

// import api
import { RegisterApi } from '../../api/registerApi'

function RegisterPage() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
        try {
            event.preventDefault()
            RegisterApi(inputs).then(async result => {
                if (!result) {
                    await alert("Internal Server Error!")
                } else {
                    if (result.status === "success") {
                        await window.location.replace('/login')    
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
        <h4 className="text-center mb-4">REGISTER YOUR ACCOUNT</h4><hr/>
        <div style={{marginBottom:"15px"}}>
            <Label for="email">
                EMAIL
            </Label><br/>
            <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="EMAIL" 
                style={{border: "1px solid black"}}
                value={inputs.email || ""}                 
                onChange={handleChange} required/>
        </div>
        <div style={{marginBottom:"15px"}}>
            <Label for="username">
                USERNAME
            </Label><br/>
            <Input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="USERNAME"
                style={{border: "1px solid black"}} 
                value={inputs.username || ""} 
                onChange={handleChange} required/>
        </div>
        <div style={{marginBottom:"15px"}}>
            <Label for="password">
                PASSWORD
            </Label><br/>
            <Input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="PASSWORD" 
                style={{border: "1px solid black"}} 
                value={inputs.password || ""}
                onChange={handleChange}required/>
        </div>
        <div style={{marginBottom:"15px"}}>
            <Label for="confirm_password">
                CONFIRM PASSWORD
            </Label><br/>
            <Input 
                type="password" 
                name="confirm_password" 
                id="confirm_password" 
                placeholder="CONFIRM PASSWORD" 
                style={{border: "1px solid black"}} 
                value={inputs.confirm_password || ""} 
                onChange={handleChange}required/>
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
                REGISTER
            </Button>
        </div>
        <div style={{textAlign:"center", fontStyle:"italic", marginTop: "10px"}}>
            <p>
                Already have an account? Click <a href="/login" class="text-link">Login</a>
            </p>
        </div>
        </div>
        </div>
    )
};

export default RegisterPage;