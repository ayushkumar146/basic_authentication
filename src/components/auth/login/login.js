import React, { useEffect, useState } from 'react';
import "./login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate=useNavigate();

    useEffect(() => {
        // Update formData whenever name, semail, or spassword changes
        setFormData({
            email: email,
            password: password
        });
    }, [email,password]);

    const hn = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            // Send form data to backend
            const response = await axios.post('http://localhost:5000/user/login', formData, config);

            // Handle response from backend
            console.log(response.data); // Assuming the backend sends back a response
            navigate("/Dashboard");
        } catch (error) {
            
            navigate("/loginerror");
            console.error('oops');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform any actions with the email and password here, such as sending them to the backend for authentication
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="loginpage">
            <div className="lemail ">
                <div className="laemail">
                    Email:
                </div>
                <div className="lemailinput">
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
            </div>
            <div className="lemail ">
                <div className="laemail">
                    Password:
                </div>
                <div className="lpasswordinput lemailinput">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
            </div>
            <div className="lsubmit">
                <button onClick={hn}> SUBMIT </button>
                </div>
        </div>
    );
}

export default Login;
