import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage(props) {
    const history=useNavigate()
    const handleSubmit=()=>{
        history('/about') //this checks for '/about' route under <Routes><Routes/> in app.js
    }
    const handleSubmit1=()=>{
        history('/contact') 
    }
    const handleSubmit2=()=>{
        history('/support') 
    }
    const handleSubmit3=()=>{
        history('/information') 
    }

    return (
        <div>
            these are the various functionalities<br/>
            <ul>
            <button className="btn btn-primary" onClick={handleSubmit}>about button</button><br/>
            <button className="btn btn-success" onClick={handleSubmit1}>contact button</button><br/>
            <button className="btn btn-danger" onClick={handleSubmit2}>support button</button><br/>
            <button className="btn btn-info" onClick={handleSubmit3}>information about us</button>
            </ul>
        </div>
    );
}

export default HomePage;