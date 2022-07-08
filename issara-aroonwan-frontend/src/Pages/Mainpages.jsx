import React, { useEffect, useState } from "react";

//import from bootstrap
import { Row, Col, Card, Container, Form, Modal, Button } from 'react-bootstrap';

import '../App.css'

import { Link } from "react-router-dom";

//import mui 
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import HomeIcon from '@mui/icons-material/Home';




//import Redux
import { connect } from "react-redux";
import { getAllData } from '../Redux/Api'
import { getdeleteroom } from '../Redux/Api'
import { getupdateroom } from '../Redux/Api'
import { getcreateroom } from '../Redux/Api'



function Mainpages(props) {

    var roomlist = props.data.AllRoom.data

    const [roomid, setroomid] = useState("");

    const [dataupdate, setdataupdate] = useState("")

    //update room
    const [roomname, setroomname] = useState("");
    const [student, setstudent] = useState("");

    //Create Room
    const [croomname, setcroomname] = useState("");
    const [cstudent, setcstudent] = useState("");



    const [showaddroom, setshowaddroom] = useState(false);
    const showaddroomClose = () => setshowaddroom(false);
    const showaddroomShow = () => setshowaddroom(true);

    const [showupdateroom, setshowupdateroom] = useState(false);
    const showupdateroomClose = () => {
        setshowupdateroom(false);
        setroomname("")
        setstudent("")

    }

    const showupdateroomShow = () => setshowupdateroom(true);


    //Handle Click
    const Delete = (roomid) => {
        DeleteitemRoom(roomid)
    }

    const Update = (data) => {
        console.log(data)
        setdataupdate(data)
        showupdateroomShow();

    }


    //API
    const getroom = () => {
        props.dispatch(getAllData());
    }

    const DeleteitemRoom = (roomid) => {
        props.dispatch(getdeleteroom(roomid));
    }
    
    

    const UpdateitemRoom = (data) => {

        var rawdata = data

        var namesend = roomname
        var studentsend = student
        var roomidsend = data.roomId

        if(roomname === ""){
            namesend = data.roomname
        }
        if(studentsend === ""){
            studentsend = data.student
        }
        
        var mookdata = {
            "roomid": roomidsend,
            "roomname": namesend,
            "student": studentsend
        }
      
        props.dispatch(getupdateroom(mookdata));
        showupdateroomClose();
    }

    const Addroom = () => {
        props.dispatch(getcreateroom(croomname,cstudent))
        showaddroomClose();
    }




    useEffect(() => {

        if (props.data.isAllRoom === false) {
            getroom();
        }
        else {
            return;
        }

    }, [])

    //update
    useEffect(()=>{
        if(props.data.isUpdateRoom === true){
            Reload();
        }
        else{
            return;
        }
    })

     //delete
     useEffect(()=>{
        if(props.data.isDeleteRoom === true){
            Reload();
        }
        else{
            return;
        }
    })

    //CreateRoom
    useEffect(()=>{
        if(props.data.isCreateRoom === true){
            Reload();
        }
        else{
            return;
        }
    })


    const Reload = async() => {
        await window.location.reload(false)
    }


    return (
        <>
            {props.data.isAllRoom ?
                <>
                    <React.Fragment >
                    <div className="Blank-50" />
                        <div>
                            <h1> Rooms </h1>
                            <h4> List of examination rooms</h4>
                        </div>

                        <div className="Blank-50" />


                        <div>

                            <Container>


                                <Row xs={1} md={2} className="g-4">
                                    {Array.from(roomlist).map((_, idx) => (
                                        <Col>
                                            <Card>
                                                <div align="center">
                                                    <HomeIcon sx={{ fontSize: 90 }} />
                                                </div>

                                                <Card.Body>
                                                    <Card.Title> Room Name: {roomlist[idx].roomname}</Card.Title>
                                                    <Card.Text>
                                                        Student:  {roomlist[idx].student}
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button variant="danger" onClick={(e) => Delete(roomlist[idx].roomId)}> Delete</Button> &nbsp; &nbsp;
                                                    <Button variant="primary" onClick={(e) => Update(roomlist[idx])}> Edit</Button>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>

                        <div>
                            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>

                                <SpeedDial
                                    ariaLabel="SpeedDial basic example"
                                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                                    icon={<SpeedDialIcon />}
                                    onClick={showaddroomShow}
                                >
                                </SpeedDial>
                            </Box>
                        </div>



                        <div>
                            <Modal show={showaddroom} onHide={showaddroomClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Create</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                    <Form.Group className="mb-3">
                                            <Form.Label>NAME</Form.Label>
                                            <Form.Control type="text" onChange={(e) => setcroomname(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>NUMBER OF STUDENT</Form.Label>
                                            <Form.Control type="number" onChange={(e) => setcstudent(e.target.value)} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={showaddroomClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={Addroom}>
                                        Create
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>


                        <div>
                            <Modal show={showupdateroom} onHide={showupdateroomClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Update Room</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3">
                                            <Form.Label>NAME</Form.Label>
                                            <Form.Control defaultValue={dataupdate.roomname} type="text" onBlur = {(e) => setroomname(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>NUMBER OF STUDENT</Form.Label>
                                            <Form.Control defaultValue={dataupdate.student} type="number" onBlur = {(e) => setstudent(e.target.value)} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" type="reset" onClick={showupdateroomClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={(e) => UpdateitemRoom(dataupdate)}>
                                        Update
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>


                    </React.Fragment >
                </> : <>ไม่สามารถเชื่อมต่อข้อมูลได้</>

            }
        </>




    );
}

const mapStateToProps = action => {
    return {
        data: action
    }
}

export default connect(mapStateToProps)(Mainpages);