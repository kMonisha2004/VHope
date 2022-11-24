import { FormControl, TextField,Button} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
 function Signup() {

  return (
    <div className='abc'>
    <p text align="center"><b>LOGIN</b></p>
     <FormControl>
     <TextField id="outlined-basic" label="Username" helperText="Please enter your name" type="text" variant="outlined" required/><br></br>
    
    <TextField id="outlined-basic"type="password" label="Password" helperText="Please enter your password" variant="outlined" required/><br></br>
   
    <Button onClick={()=>{alert("You logged in successfully");}} variant="contained"><Link to="/landing">LOGIN</Link></Button>
     </FormControl>
    </div>
  )
}
export default Signup