import React from "react";
import {  Container } from "reactstrap"

function NotFound(){
    return(
        <div style={{
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
        <Container className="my-5">
        <h1 style={{
            color: "red",
            textAlign: "center",
        }}>
        404 NOT FOUND !
        </h1>
        </Container>
        </div>
    )
}

export default NotFound