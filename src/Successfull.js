import React from 'react'
import logo from './sucess.svg'
import './Successfull.css'
import { Link } from 'react-router-dom'

function Successfull() {
    return (
        <div className="successfull">
            <div className="succ__main">
                <div className="succ__info">
                    <h1>Your Order Is Successfull</h1>
                </div>
                <div className="succ__image">
                    <img src={logo} />
                </div>
                <div className="succ__continue">
                  <Link to="/"> Continue Shopping </Link>
                </div>
            </div>
        </div>
    )
}

export default Successfull
