import LoginForm from "./Login/LoginForm";
import SigninForm from "./Signin/SigninForm";
import { useState } from "react";
const LoginModal = (props) => {
  const users = [
    { id: 1, name: "Ram", pass: "Dhoni@123" },
    { id: 2, name: "Karthi", pass: "Dhoni@123" },
  ];
  // let userlist = [];
  const [userlist, setUserlist] = useState(users);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signinSuccess, setSigninSuccess] = useState(false);
  const [unSuccess, setUnsuccess] = useState(false);
  const [newUserClicked, setNewUserClicked] = useState(false);
  const usernames = users.map((user) => {
    const unames = user.name;
    return unames.toLowerCase();
  });
  const NewUserHandler = () => {
    setNewUserClicked(true);
  };
  const UpdateUserHandler = (newone) => {
    const newname = newone.name;
    if (usernames.includes(newname.toLowerCase())) {
      setUnsuccess(true);
    } else {
      setUserlist((prevUser) => {
        return [...prevUser, newone];
      });
    }
    setSigninSuccess(true);
  };
  const SuccessCloseHandler = (event) => {
    window.stop();
    event.preventDefault();
    props.onClick(props.onClick);
  };
  const LoginSuccessHandler = (status) => {
    setLoginSuccess(true);
    const loginStatus = status;
    props.onLoginSuccess(loginStatus);
  };
  return (
    <div>
      {newUserClicked && !signinSuccess && !unSuccess && (
        <SigninForm newUser={UpdateUserHandler} onClick={props.onClick} />
      )}
      {!newUserClicked && !loginSuccess && (
        <LoginForm
          userlist={userlist}
          onClick={props.onClick}
          onNewUser={NewUserHandler}
          onSuccess={LoginSuccessHandler}
        />
      )}
      {signinSuccess && (
        <div style={{ textAlign: "center" }}>
          <p>User Creation Successfull</p>
          <button
            type="button"
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid white",
              fontWeight: "bolder",
              position: "absolute",
              top: 0,
              right: 0,
              height: "fit-content",
              cursor: "pointer",
            }}
            onClick={SuccessCloseHandler}
          >
            X
          </button>
        </div>
      )}
      {unSuccess && (
        <div style={{ textAlign: "center" }}>
          <p>Username already exists</p>
          <button
            type="button"
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid white",
              fontWeight: "bolder",
              position: "absolute",
              top: 0,
              right: 0,
              height: "fit-content",
              cursor: "pointer",
            }}
            onClick={SuccessCloseHandler}
          >
            X
          </button>
        </div>
      )}
      {loginSuccess && (
        <div style={{ textAlign: "center" }}>
          <p>Login Successfull</p>
          <button
            type="button"
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid white",
              fontWeight: "bolder",
              position: "absolute",
              top: 0,
              right: 0,
              height: "fit-content",
              cursor: "pointer",
            }}
            onClick={SuccessCloseHandler}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
export default LoginModal;
