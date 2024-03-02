import React, { useState, useEffect} from 'react';
import "./signup.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [semail, setSemail] = useState('');
    const [spassword, setSpassword] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

const navigate=useNavigate();

    useEffect(() => {
        // Update formData whenever name, semail, or spassword changes
        setFormData({
            username: name,
            email: semail,
            password: spassword
        });
    }, [name, semail, spassword]);

    const hn = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            // Send form data to backend
            const response = await axios.post('http://localhost:5000/user/register', formData, config);

            // Handle response from backend
            console.log(response.data); // Assuming the backend sends back a response
            navigate("/Dashboard");
        } catch (error) {
            navigate("/loginerror");
            console.error('Error:', error);
        }
    };

    return (
        <div className="ssignup">
            <div className="sname">
                <div className="saname">Name: </div>
                <div className="sinput"><input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></div>
            </div>
            <div className="sname">
                <div className="saname">Email: </div>
                <div className="sinput"><input type="text" value={semail} onChange={(e) => { setSemail(e.target.value) }} /></div>
            </div>
            <div className="sname">
                <div className="saname">Password: </div>
                <div className="sinput"><input type="password" value={spassword} onChange={(e) => { setSpassword(e.target.value) }} /></div>
            </div>
            <div className="ssubmit">
                <button onClick={hn}> SUBMIT </button>
            </div>
        </div>
    );
}

export default Signup;
