import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./notify.css";


const Notification = () => {
    const [show, setShow] = useState(true);
const Navigate=useNavigate();
const nm=(()=>{
    Navigate("/");
})

    return (
     <>
     <div className="error">
        <div className="errorname">
        lagg gae bhai wapas ja lol
        </div>
        <div className="errbtn">
            <button onClick={()=>nm()}> CLOSE </button>
        </div>
     </div>
     </>
    );
};

export default Notification;
