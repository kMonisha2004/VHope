
import { FormControl, TextField,Button} from '@mui/material'
import Landing from './landing';
import React from 'react'
import { Link } from "react-router-dom";
import './login.css'
 function Login() {

  return (
    <div className='abc'>
    <p text align="center"><b>WELCOME BACK</b></p>
     <FormControl>
     <TextField id="outlined-basic" label="Username" helperText="Please enter your name" type="text" variant="outlined" required/><br></br>
    <TextField id="outlined-basic" label="Email" type="email" helperText="Please enter your email" variant="outlined" required/><br></br>
    <TextField id="outlined-basic"type="password" label="Password" helperText="Please enter your password" variant="outlined" required/><br></br>
    <TextField id="outlined-basic"type="password" label="Confirm Password" helperText="Please enter your password" variant="outlined" required/><br></br>
    <Button onClick={()=>{alert("You created an account  successfully");}} variant="contained"><Link to="/">SIGNUP</Link></Button>
     </FormControl>
    </div>
  )
}
export default Login