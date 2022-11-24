import React from 'react'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { FormControl, FormControlLabel, FormLabel,Button } from '@mui/material'
import { Link } from 'react-router-dom'
function Regis() {
  return (
    <div className="abc">
    <FormControl>
    <p><b>Registeration Form</b></p>
    
    <TextField id="filled-basic" helperText="Please enter your name" label="Username" type="text" variant="filled"/><br></br><br></br>
    
    <TextField id="filled-basic" helperText="Enter your password" label="Password" type="password" variant="filled"/><br></br><br></br>

    <TextField id="filled-basic" label="email" helperText="Enter your email" variant="filled"/><br></br><br></br>
    <FormLabel>Gender</FormLabel>
    <RadioGroup  aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female">
    <FormControlLabel value="female" control={<Radio/>} label="Female"/>
    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
    <FormControlLabel value="other" control={<Radio/>} label="Other"/>
    </RadioGroup><br></br><br></br>
    <label>Date of Birth</label>
    <TextField id="filled-basic" type="date" helperText="Enter your DOB"/><br></br>
    <Button onClick={()=>{alert("You registered successfully");}} variant="contained"><Link to="/landing">REGISTER</Link></Button>
    </FormControl>
    </div>
  )
}
export default Regis