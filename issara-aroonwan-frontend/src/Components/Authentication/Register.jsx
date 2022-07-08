import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css'

//import Router
import { useNavigate } from "react-router-dom";

//import Redux
import { connect } from "react-redux";
import { getRegister } from "../../Redux/Api"
import { useState } from "react";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Register(props) {

    var [username, setusername] = useState("")
    var [password1, setpassword1] = useState("")
    var [password2, setpassword2] = useState("")

    const [checkbt, setcheckbt] = useState(false)
    const [statebt, setsatebt] = useState(true)

    let navigate = useNavigate();

    useEffect(() => {
        if (password1 !== password2 && password1 === null && password2 === null) {
            setsatebt(true)
        }
        else {
            setsatebt(false)
        }
    })

    const register = () => {

        props.dispatch(getRegister(username, password2));
    }

    useEffect(() => {
        if (props.data.isRegister === true) {
            Reload();
        }
        else {
            return;
        }
    })


    const Reload = async() => {
        await window.location.reload(false)
    }

    return (
        <>

            <div>
                <Container>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label align="left">EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onBlur={(e) => setusername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label align="left">PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={(e) => setpassword1(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label align="left">CONFIRM PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="Password" onBlur={(e) => setpassword2(e.target.value)} />
                        </Form.Group>


                        <Button variant="primary" type = "button" onClick={register} disabled={statebt}>
                            Register
                        </Button>
                    </Form>

                </Container>



                <div className="Blank-50" />

                {
                    props.data.isError_getRegister ?
                        <>
                            <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                Check You Username And Password
                            </Alert>
                        </>
                        : null
                }




            </div>


        </>
    );
}

const mapStateToProps = action => {
    return {
        data: action
    }
}

export default connect(mapStateToProps)(Register);