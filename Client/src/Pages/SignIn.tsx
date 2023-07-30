import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #009999;
  border-radius: 20px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  background-color: #fff;
  width: 40vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #009999;
    box-shadow: 0 0 4px #009999;
  }
`;

const SignInButton = styled.button`
  width: 43vh;
  padding: 12px;
  margin: 10px 0;
  background-color: #009999;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1d4e52;
  }
`;

const Heading = styled.h3`
  font-size: 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if(email === "Admin13@gmail.com"){
        if(password === "Admin1234"){
            navigate('/admin');
        }
        else{
            alert("incorrect password!")
        }
    }
    else{
        alert("incorrect email!")
    }
  };

  return (
    <SignInWrapper>
      <SignInForm onSubmit={handleSubmit}>
        <Heading>Sign In</Heading>
        <InputField
          type="email"
          placeholder="enter email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton type="submit">Sign In</SignInButton>
      </SignInForm>
    </SignInWrapper>
  );
};

export default SignInPage;
