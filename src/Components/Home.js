
import React from 'react';
import { Button } from '@mui/material';
import './home.css'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='home'>
    <div className='abb'>
    <h3>GLAD TO HAVE YOU HERE</h3>
    <h3>LETS EMBRACE THE JOY OF GIVING</h3>
    </div>
    <div className='Vision'>
    <h2>Vision</h2>
    <h2>To bring a positive impact in the society
    by providing financial or physical support or both to the
    co-citizens for the betterment of their lives</h2>
    <Button variant="contained"><Link to="/regis">REGISTER</Link></Button>
    </div>
    </div>
  )
}

