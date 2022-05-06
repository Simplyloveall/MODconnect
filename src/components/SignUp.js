import React from "react";
import TextInput from "./TextInput";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const navigate = useNavigate();

  function checkFields(e) {
    e.preventDefault();
    navigate("/profile");
  
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Signup</h2>
      <form onSubmit={checkFields} style={{ textAlign: "center" }}>
        <TextInput
          action={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
        <TextInput
          action={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
        />
        <TextInput
          action={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          name="confirmPassword"
        />
        <button>Create</button>
        <p>{errorMessage}</p>
      </form>
    </>
  );
};

export default Signup;