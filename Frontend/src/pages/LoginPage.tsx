import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    //validation ll form validation tnsech y huba
    if (!email || !password) {
      //hhhhh tnsech tbdl message error 9bal deployment
      setError("chuf submitted data y ghali");
      return;
    }
    //make call to Api to create the user
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // make sure to include this header for json data
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      setError("unable to login user please try again");
      return;
    }

    const token = await response.json();

    if (!token) {
      setError("incorrect token");
      return;
    }

    login(email, token);
    navigate("/");
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 4,
        }}
      > 
        <Typography variant="h6">Login to your account</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 2,
            border: 1,
            borderColor: "#f5f5f5",
            p: 2,
          }}
        >
          <TextField inputRef={emailRef} label="Email" name="Email" />
          <TextField
            inputRef={passwordRef}
            label="Password"
            type="password"
            name="Password"
          />
          <Button onClick={onSubmit} variant="contained">
            Login
          </Button>
          {error && <Typography sx={{ color: "red" }}>{error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
