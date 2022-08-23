import { TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

   
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin={"auto"}
          marginTop={10}
          padding={5}
          borderRadius={5}
          boxShadow={"5px 5px 5px 5px  #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 10px 10px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            Login
          </Typography>
          <TextField
            value={inputs.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="E-mail"
          />
          <TextField
            value={inputs.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button type="submit" sx={{ marginTop: 3, borderRadius: 3 }} variant="contained">
            Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
