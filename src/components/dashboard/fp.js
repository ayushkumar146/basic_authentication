import React, { useEffect, useState } from 'react'; // Make sure to import React
import Login from "../auth/login/login"; // Assuming Login and Signup are also React components
import Signup from "../auth/signup/signup";
import "./fp.css";
const Fp = () => { // Change component name to start with an uppercase letter

const [flag,setflag]=useState(0);

const fn=((e)=>{
  
        setflag(1);
    
})
const gn=((e)=>{
   
        setflag(0);
    
})

    useEffect(() => {
        // useEffect logic
    }, []); // Empty dependency array

    return (
        <div>
            <div className="navbar">
            Dear Diary
            </div>
            <div className="mid">
            <div className="box">
                <div className="choose">
                    <div className="login">
                        <button onClick={()=>{fn(flag)}}>Login</button>
                        </div>
                    <div className="signup">
                        <button onClick={()=>{gn(flag)}}>Signup</button>
                    </div>
                </div>
             <div className="content">
                {flag==0?<Signup/>:<Login/>}
    
             </div>
            </div>
            </div>
           <div className="footer">

           </div>
        </div>
    );
}

export default Fp;
