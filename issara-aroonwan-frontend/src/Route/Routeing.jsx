import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Authentication = lazy(() => import('../Pages/Authentication'));
const Mainpages = lazy(() => import('../Pages/Mainpages'));



const Routingpages = () => {
    return (
        <>
     <Routes>

        <Route path='/' element={<><Authentication/></>}/>
        <Route path='/Mainpages' element={<><Mainpages /></>}/>

    </Routes>
    </>

    );

    
   

}

export default Routingpages;