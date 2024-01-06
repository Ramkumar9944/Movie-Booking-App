import "./SigninForm.css";
import key from "../../../assets/key.png";
import { useState } from "react";
const SigninForm = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterPass, setEnterPass] = useState("");
  const [nameError, setNameError] = useState("");
  const [passError, setPassError] = useState("");
  const [valid, setValid] = useState(true);
  const NameHandler = (event) => {
    const special = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (event.target.value.length < 3 || event.target.value.length >= 50) {
      setNameError("Username must be 3 to 50 characters");
      setValid(false);
    } else if (event.target.value.match(special)) {
      setNameError("Username must not have special characters");
    } else {
      setEnterName(event.target.value);
      setNameError("");
      setValid(true);
    }
  };
  const PasswordHandler = (event) => {
    const pass_reg =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,15}$/;
    if (!event.target.value.match(pass_reg)) {
      setPassError(
        "Password must contain 8 to 15 characters and must contain 1 Uppercase, 1 Lowercase, 1 special character and 1 number"
      );
      setValid(false);
    } else {
      setEnterPass(event.target.value);
      setPassError("");
      setValid(true);
    }
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (enterName.length === 0) {
      setNameError("Please provide Username");
      setValid(false);
    }
    if (enterPass.length === 0) {
      setPassError("Please provide Password");
      setValid(false);
    } else {
      const newuser = {
        id: Number(Math.round(Math.random() * 10) + 3),
        name: enterName,
        pass: enterPass,
      };
      props.newUser(newuser);
    }
  };
  return (
    <div>
      <form className="SigninForm" onSubmit={SubmitHandler}>
        <h2>SignUp</h2>
        <input placeholder="Username" type="text" onChange={NameHandler} />
        {!valid && (
          <span style={{ color: "red", width: "22rem" }}>{nameError}</span>
        )}
        <input
          placeholder="Password"
          type="password"
          onChange={PasswordHandler}
        />
        {!valid && (
          <span style={{ color: "red", width: "22rem" }}>{passError}</span>
        )}
        <button>SignUp</button>
      </form>
      <button className="close" type="button" onClick={props.onClick}>
        X
      </button>
      <img
        className="key"
        src={key}
        alt="key"
        style={{ height: "8rem", width: "8rem" }}
      />
    </div>
  );
};
export default SigninForm;
