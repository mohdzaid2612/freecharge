import React, { useState } from 'react'
import './Otp.css'
import { Link, useHistory } from "react-router-dom";

function Otp() {
    const history = useHistory();

    const [otp , setOtp] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(otp==='12345'){
            history.push('/successfull')
        }
        else{
            alert("Otp is Wrong..!!")
        }
    }

    return (
        <div className="otp">
            <div className="otp__main">
                <form onSubmit={handleSubmit}>
                    <div className="otp__form">
                        <h3>Enter Your Otp</h3>
                        <input  maxLength="5" required value={otp} onChange={e=> setOtp(e.target.value)} />
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Otp
