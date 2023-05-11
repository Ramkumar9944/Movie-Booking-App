import "./LoginForm.css";
import key from "../../../assets/key.png";
import { useState } from "react";
const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [valid, setValid] = useState(true);
  const names = props.userlist && props.userlist.map((user) => user.name);
  const pass = props.userlist && props.userlist.map((user) => user.pass);
  const NameHandler = (event) => {
    setUsername(event.target.value);
  };
  const PasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!names.includes(username)) {
      setMessage("Invalid Username or Password");
      setValid(false);
    } else {
      let nameIndex = names.indexOf(username);
      if (password === pass[nameIndex]) {
        const status = { success: true, name: username };
        props.onSuccess(status);
        setUsername("");
        setPassword("");
      } else {
        setValid(false);
        setMessage("Invalid Username or Password");
      }
    }
  };
  return (
    <div>
      <form className="LoginForm" onSubmit={SubmitHandler}>
        <h2>Login</h2>
        <input placeholder="Username" type="text" onChange={NameHandler} />
        <input
          placeholder="Password"
          type="password"
          onChange={PasswordHandler}
        />
        {!valid && <span style={{ color: "red" }}>{message}</span>}
        <button>Login</button>
      </form>
      <button className="new-user" onClick={props.onNewUser}>
        New User?
      </button>
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
export default LoginForm;
