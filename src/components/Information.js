import React from 'react';
import {useNavigate} from 'react-router-dom'

function Information(props) {
    const history=useNavigate()
    const handleSubmit=()=>{
        history('/')
    }

    return (
        <div>
            this is information page<br/>
            <button className='btn btn-primary' onClick={handleSubmit}>Home page</button>
        </div>
    );
}

export default Information;