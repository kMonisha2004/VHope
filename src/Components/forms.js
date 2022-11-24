
import { TextField } from '@mui/material';
import React, { useState } from 'react';

function LoginForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setEror]=useState(false)

  
const formHandler=(event)=>{
    event.preventDefault();
    const obj={
        firstName:firstName,
        lastName:lastName,
        password:password,
        email:email
        }
console.log(obj);
if(firstName.length===0|| lastName.length==0)
   {  setEror(true) }
   if(firstName && lastName)
   {
    console.log("FirstName:", firstName , "\nLastName: ",lastName)
   } 
    //axios.post(ur1/obj);
}
  return (
    <form onSubmit={formHandler}>
    <div>
      <TextField type="text" name="firstName"
        value={firstName} 
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        required   
      />
      </div>
      {error && firstName.length===0 ?
        <label>First Name cannot be empty</label>:""}
      <br></br>
      <div>
      <TextField
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name"
        type="text"
        name="lastName"
        required
      /><br></br>
      </div>
      <div>
<TextField
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      /><br></br>
      </div>
      <div>
      <TextField id='outlined-basic' variant='outlined'
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /><br></br>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;