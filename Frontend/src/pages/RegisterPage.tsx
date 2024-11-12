import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const [error, setError] = useState("")
    const firstNameref = useRef<HTMLInputElement>(null);
const lastNameRef = useRef<HTMLInputElement>(null);
const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null); 

    const navigate = useNavigate()  //useNavigate hook to navigate to different routes
const { login } = useAuth()


const onSubmit = async () => { 
const firstName = firstNameref.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;  

    //validation ll form validation tnsech y huba 
if (!firstName || !lastName || !email || !password){
  //hhhhh tnsech tbdl message error 9bal deployment 
  setError("chuf submitted data y ghali");
  return; 
}
    //make call to Api to create the user 
const response = await fetch(`${BASE_URL}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },  // make sure to include this header for json data 
    body: JSON.stringify({ firstName, lastName, email, password })
});
if (!response.ok){
    setError("unable to register user please try again");
    return;
}


const token = await response.json();

if (!token){
  setError("incorrect token");
  return;
};

login(email, token);
navigate("/");  //navigate to login page after registration successful
};
  return (
    <Container>
      <Box 
       sx={
        {
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            mt:4, 
        }
       }
       >
        <Typography variant="h6">Register new account</Typography>
        <Box sx={{ display : "flex", flexDirection: "column", gap: 2, mt: 2, border: 1, borderColor: "#f5f5f5" , p: 2}}>
            <TextField inputRef={firstNameref} label="First Name" name="firstName" />
            <TextField inputRef={lastNameRef} label="Last Name" name="lastName" />
            <TextField inputRef={emailRef} label="Email" name="Email" />
            <TextField inputRef={passwordRef} label="Password" type="password" name="Password" />
            <Button onClick={onSubmit} variant="contained">Register</Button>
            {error && <Typography sx={{color: "red"}} >{error}</Typography>}
                   </Box>
      </Box> 
    </Container>
  );
}; 

export default RegisterPage;        
