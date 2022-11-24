import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

import './footer.css';
function FooterComponent() {
  return (
    <div className='footer'>Contact Us<br></br><br></br>
    <ul>
    <li><span className='email'><EmailIcon/>Email: vhope@gmail.com</span></li>
    <li><span className='phone'><PhoneIcon/>Support: 9025998765</span></li>
    <li><span className='loca'><LocationOnIcon/>Location: Avadi,Chennai</span></li>
    <li><span className='face'><FacebookIcon/>Folllow us</span></li>
    <li><span className='twi'><TwitterIcon/>Folllow us</span></li></ul>
    
    
    </div>
  )
}

export default FooterComponent;
   

