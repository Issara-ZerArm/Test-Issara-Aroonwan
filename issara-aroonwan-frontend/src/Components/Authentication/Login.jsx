import React, { useEffect, useState } from "react";
import {Form, Button, Container} from "react-bootstrap"
import '../../App.css'

//import Redux
import { connect } from "react-redux";
import {getLogin} from "../../Redux/Api"

//import Router
import { useNavigate } from "react-router-dom";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



function Login (props) {

    var [username, setusername] = useState("")
    var [password, setpassword] = useState("")


    let navigate = useNavigate();

    const login = () => {
        props.dispatch(getLogin(username, password));
    }

    useEffect(()=>{
        if(props.data.isLogin === true){
            navigate("/Mainpages")
        }
        else{
            return;
        }
    })


    return (
        <>
            <div>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label  >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onBlur={(e) => setusername(e.target.value)} />
        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onBlur={(e) => setpassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Button variant="primary" type = "button" onClick={login}>
                        Log in
                    </Button>
                </Form>
            </div>

            {
                    props.data.isError_getLogin?
                        <>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                Check You Username And Password
                            </Alert>
                        </>
                        : null
                }
        

        </>
    )
}

const mapStateToProps = action => {
    return {
        data: action
    }
}

export default connect(mapStateToProps)(Login);