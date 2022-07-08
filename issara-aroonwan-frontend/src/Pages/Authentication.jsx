import React, { useState } from "react";
import '../App.css'

import Login from "../Components/Authentication/Login";
import Register from "../Components/Authentication/Register";

import { Button, Row, Col } from "react-bootstrap"



function Authentication() {

    const [state, setState] = useState(0)

    const ClickChangeComponenttoregister = () => {
        setState(1)
    }
    const ClickChangeComponenttoLogin = () => {
        setState(0)
    }

    return (
        <>
            <div className="App-header">
                {state === 0 ?

                    <>
                        <div>
                            <h1>Login</h1>
                            <Button variant="link" onClick={ClickChangeComponenttoregister} >Sign in to continue</Button>
                        </div>
                        <div className="Blank-10"/>
                        <Login />
                  
                    </>
                    :
                    <>
                        <div>
                            <h1>Register</h1>
                            <Button variant="link" onClick={ClickChangeComponenttoLogin} >Log in here</Button>
                           
                        </div>
                        <div className="Blank-10"/>
                        <Register />
          
                    </>

                }

            </div>

        </>
    );
}

export default Authentication;