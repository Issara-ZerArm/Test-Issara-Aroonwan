import axios from "axios";
import store from "./Store";

//Login
export const Get_Login = () => {
    return {
        type: "Get_Login"
    }
}

export const Receive_Login = (Login) => {
    return {
        type: "Receive_Login",
        data: Login
    }
}

export const Error_Receive_Login = (error) => {
    return {
        type: "Error_Receive_Login",
        error: error
    }
}

export const getLogin = (username, password) => {
    store.dispatch(Get_Login());
    var ModelPaintext = {

        "user": username,
        "password": password

    }
    return async function (dispatch) {
        return await axios.post(`http://localhost:5000/Login`, ModelPaintext, {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                console.log(data)
                if (res.status === 200 ) {
                    if(data.length > 0){
                        dispatch(Receive_Login(data))
                    }
                    else{
                        throw new Error("Email หรือ Password ไม่ถูกต้อง");
                    }
                    
                }
                else {
                    throw new Error("Email หรือ Password ไม่ถูกต้อง");
                }
            })
            .catch(err => dispatch(Error_Receive_Login(err)))
    }

}

//Login
export const Get_Register = () => {
    return {
        type: "Get_Register"
    }
}

export const Receive_Register = (Register) => {
    return {
        type: "Receive_Register",
        data: Register
    }
}

export const Error_Receive_Register = (error) => {
    return {
        type: "Error_Receive_Register",
        error: error
    }
}

export const getRegister = (username, password) => {

    store.dispatch(Get_Register());

    var ModelPaintext = {
        "user": username,
        "password": password   
    }
    return async function (dispatch) {
        return await axios.post(`http://10.83.129.14:5000/Createuser`, ModelPaintext, {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                if (res.status === 200) {
                    dispatch(Receive_Register(data))
                }
                else {
                    throw new Error("ไม่สามารถสมัครสมาชิกได้");
                }
            })
            .catch(err => dispatch(Error_Receive_Register(err)))
    }

}

//Get All Data
export const Get_AllData = () => {
    return {
        type: "Get_AllData"
    }
}

export const Receive_AllData = (AllData) => {
    return {
        type: "Receive_AllData",
        data: AllData
    }
}

export const Error_Receive_AllData = (error) => {
    return {
        type: "Error_Receive_AllData",
        error: error
    }
}

export const getAllData = () => {
    store.dispatch(Get_AllData());
   
    return async function (dispatch) {
        return await axios.get(`http://10.83.129.14:5000/getallroom`, {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                if (res.status === 200) {
                    dispatch(Receive_AllData(data))
                }
                else {
                    throw new Error("ไม่สามารถเชื่อมต่อข้อมูลได้");
                }
            })
            .catch(err => dispatch(Error_Receive_AllData(err)))
    }

}

//Update Room
export const Get_updateroom = () => {
    return {
        type: "Get_updateroom"
    }
}

export const Receive_updateroom = (updateroom) => {
    return {
        type: "Receive_updateroom",
        data: updateroom
    }
}

export const Error_Receive_updateroom = (error) => {
    return {
        type: "Error_Receive_updateroom",
        error: error
    }
}

export const getupdateroom = (roomdata) => {
    store.dispatch( Get_updateroom());

    
   
    return async function (dispatch) {
        return await axios.post(`http://10.83.129.14:5000/updateroom`,roomdata, {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                if (res.status === 200) {
                    dispatch(Receive_updateroom(data))
                }
                else {
                    throw new Error("ไม่สามารถเชื่อมต่อข้อมูลได้");
                }
            })
            .catch(err => dispatch(Error_Receive_updateroom(err)))
    }

}

//Delete Room
export const Get_deleteroom = () => {
    return {
        type: "Get_deleteroom"
    }
}

export const Receive_deleteroom = (deleteroom) => {
    return {
        type: "Receive_deleteroom",
        data: deleteroom
    }
}

export const Error_Receive_deleteroom = (error) => {
    return {
        type: "Error_Receive_deleteroom",
        error: error
    }
}

export const getdeleteroom = (roomid) => {
    store.dispatch(Get_deleteroom());

    var ModelPaintext = {
        "roomid": roomid,
    }
   
    return async function (dispatch) {
        return await axios.post(`http://10.83.129.14:5000/Deleteroom`,ModelPaintext , {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                if (res.status === 200) {
                    dispatch(Receive_deleteroom(data))
                }
                else {
                    throw new Error("ไม่สามารถเชื่อมต่อข้อมูลได้");
                }
            })
            .catch(err => dispatch(Error_Receive_deleteroom(err)))
    }

}

//Create Room
export const Get_createroom = () => {
    return {
        type: "Get_createroom"
    }
}

export const Receive_createroom = (createroom) => {
    return {
        type: "Receive_createroom",
        data: createroom
    }
}

export const Error_Receive_createroom = (error) => {
    return {
        type: "Error_Receive_createroom",
        error: error
    }
}

export const getcreateroom = (croomname,cstudent) => {
    store.dispatch(Get_createroom());

    var ModelPaintext = {
        "roomname": croomname,
        "student": cstudent
    }
   
    return async function (dispatch) {
        return await axios.post(`http://10.83.129.14:5000/createroom`,ModelPaintext , {
            timeout: 300000,
            'Content-Type': 'application/json'
        })
            .then(res => {
                const data = res.data;
                if (res.status === 200) {
                    dispatch(Receive_createroom(data))
                }
                else {
                    throw new Error("ไม่สามารถเชื่อมต่อข้อมูลได้");
                }
            })
            .catch(err => dispatch(Error_Receive_createroom(err)))
    }

}