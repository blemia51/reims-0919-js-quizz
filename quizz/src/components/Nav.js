import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'

    class Nav extends React.Component {
        render() {
        return (
        <div className='Nav'>
           
           <Link to="/"  style={{textDecoration: 'none'}}><h3 className="trainYourBrain"><i className="fas fa-cogs"></i>TrainYourBrain</h3></Link>
           
        </div>
        )}}


export default Nav
