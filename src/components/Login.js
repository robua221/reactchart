import React, { useState } from "react";
// import { Form, Button, Tr, Td } from "react-bootstrap";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Tr,
  Td,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const admin = {
    email: "test@gmail.com",
    password: "test",
  };

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  if (details.email === admin.email && details.password === admin.password) {
    console.log("Login Successful");
  } else {
    console.log("Login Failed");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <>
      <div className="loginContainer">
        <FormControl onSubmit={submitHandler} align="center">
          <FormControl className="mb-3">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
            <FormHelperText className="text-muted"></FormHelperText>
          </FormControl>

          <FormControl className="mb-3">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </FormControl>
          <Link to="/csvform">
            <Button colorScheme="blue" type="submit">
              Sign
            </Button>
          </Link>

          <FormHelperText>Forget Password ?</FormHelperText>
        </FormControl>
      </div>
    </>
  );
};

export default Login;
