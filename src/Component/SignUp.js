import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='container'>
      <div className='container1'>
        <input className='email-field' type = 'email' placeholder='Email Address'  />
        <br/>
        <input className='password-field' type ='password' placeholder= 'Password' />
        <br/>
        <Link className='link-btn link-btn1' to="/">Submit</Link>
        <br/>
        <Link className='link-btn link-btn2' to="/">Sign IN</Link>
      </div>
    </div>
  )
}

