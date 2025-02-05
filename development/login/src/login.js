import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to right, #7b2ff7, #f107a3);
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border 0.3s ease-in-out;

  &:focus {
    border-color: #7b2ff7;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(to right, #7b2ff7, #f107a3);
  color: white;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, #f107a3, #7b2ff7);
    transform: scale(1.05);
  }
`;

const SignupButton = styled(Button)`
  background: linear-gradient(to right,rgb(198, 44, 170),rgb(190, 10, 109));
  margin-top: 10px;
  
  &:hover {
    background: linear-gradient(to right,rgb(190, 10, 154),rgb(199, 52, 189));
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: #555;
  display: block;
  text-align: left;
  margin-top: 12px;
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Container>
      <Card>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <Label>Email</Label>
          <InputField
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          <Label>Password</Label>
          <InputField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <Button type="submit">Login</Button>
        </form>
        <SignupButton onClick={() => alert("Redirecting to signup...")}>Sign Up</SignupButton>
      </Card>
    </Container>
  ); 
}
