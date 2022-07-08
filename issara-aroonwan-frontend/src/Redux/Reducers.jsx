const initialState = {

    Login: {},
    Register: {},
    AllRoom: {},
    UpdateRoom: {},
    DeleteRoom: {},
    CreateRoom: {},


    isAxoising_getLogin: false,
    isAxoising_getRegister: false,
    isAxoising_getAllRoom: false,
    isAxoising_getUpdateRoom: false,
    isAxoising_getDeleteRoom: false,
    isAxoising_getCreateRoom: false,


    isLogin: false,
    isRegister: false,
    isAllRoom: false,
    isUpdateRoom: false,
    isDeleteRoom: false,
    isCreateRoom: false,


    isError_getLogin: false,
    isError_getRegister: false,
    isError_getAllRoom: false,
    isError_UpdateRoom: false,
    isError_DeleteRoom: false,
    isError_CreateRoom: false,


    error_getLogin: [],
    error_getRegister: [],
    error_getAllRoom: [],
    error_getUpdateRoom: [],
    error_getDeleteRoom: [],
    error_getCreateRoom: [],

}

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {

        //Login
        case "Get_Login":
            return Object.assign({}, state, {
                Login: {},
                isAxoising_getLogin: true,
                isError_getLogin: false,
                error_getLogin: {},

            })

        case "Receive_Login":
            return Object.assign({}, state, {
                Login: action,
                isLogin: true,
                isAxoising_getLogin: false,
                isError_getLogin: false,
                error_getLogin: {},

            })

        case "Error_Receive_Login":
            return Object.assign({}, state, {
                Login: {},
                isAxoising_getLogin: false,
                isError_getLogin: true,
                error_getLogin: action,

            })

        //Register
        case "Get_Register":
            return Object.assign({}, state, {
                Register: {},
                isAxoising_getRegister: true,
                isError_getRegister: false,
                error_getRegister: {},

            })

        case "Receive_Register":
            return Object.assign({}, state, {
                Register: action,
                isRegister: true,
                isAxoising_getRegister: false,
                isError_getRegister: false,
                error_getRegister: {},

            })

        case "Error_Receive_Register":
            return Object.assign({}, state, {
                Register: {},
                isAxoising_getRegister: false,
                isError_getRegister: true,
                error_getRegister: action,

            })

        //AllRoom
        case "Get_AllData":
            return Object.assign({}, state, {
                AllRoom: {},
                isAxoising_getAllRoom: true,
                isError_getAllRoom: false,
                error_getAllRoom: {},

            })

        case "Receive_AllData":
            return Object.assign({}, state, {
                AllRoom: action,
                isAllRoom: true,
                isAxoising_getAllRoom: false,
                isError_getAllRoom: false,
                error_getAllRoom: {},

            })

        case "Error_Receive_AllData":
            return Object.assign({}, state, {
                AllRoom: {},
                isAxoising_getAllRoom: false,
                isError_getAllRoom: true,
                error_getAllRoom: action,

            })

        //Update Room
        case "Get_updateroom":
            return Object.assign({}, state, {
                UpdateRoom: {},
                isAxoising_getUpdateRoom: true,
                isError_getUpdateRoom: false,
                error_getUpdateRoom: {},

            })

        case "Receive_updateroom":
            return Object.assign({}, state, {
                UpdateRoom: action,
                isUpdateRoom: true,
                isAxoising_getUpdateRoom: false,
                isError_getUpdateRoom: false,
                error_getUpdateRoom: {},

            })

        case "Error_Receive_updateroom":
            return Object.assign({}, state, {
                UpdateRoom: {},
                isAxoising_getUpdateRoom: false,
                isError_getUpdateRoom: true,
                error_getUpdateRoom: action,

            })

        //Delete Room
        case "Get_deleteroom":
            return Object.assign({}, state, {
                DeleteRoom: {},
                isAxoising_getDeleteRoom: true,
                isError_getDeleteRoom: false,
                error_getDeleteRoom: {},

            })

        case "Receive_deleteroom":
            return Object.assign({}, state, {
                DeleteRoom: action,
                isDeleteRoom: true,
                isAxoising_getDeleteRoom: false,
                isError_getDeleteRoom: false,
                error_getDeleteRoom: {},
            })

        case "Error_Receive_deleteroom":
            return Object.assign({}, state, {
                DeleteRoom: {},
                isAxoising_getDeleteRoom: false,
                isError_getDeleteRoom: true,
                error_getDeleteRoom: action,

            })

         //Create Room
         case "Get_createroom":
            return Object.assign({}, state, {
                CreateRoom: {},
                isAxoising_getCreateRoom: true,
                isError_getCreateRoom: false,
                error_getCreateRoom: {},

            })

        case "Receive_createroom":
            return Object.assign({}, state, {
                CreateRoom: action,
                isCreateRoom: true,
                isAxoising_getCreateRoom: false,
                isError_getCreateRoom: false,
                error_getCreateRoom: {},
            })

        case "Error_Receive_createroom":
            return Object.assign({}, state, {
                CreateRoom: {},
                isAxoising_getCreateRoom: false,
                isError_getCreateRoom: true,
                error_getCreateRoom: action,

            })


        default:
            return state;

    }
}
export default asyncReducer;