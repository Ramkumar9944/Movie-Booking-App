import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import LoginModal from "./LoginModal/LoginModal";
import LocationModal from "./LocationModal/LocationModal";
import "./Root.css";
import Modal from "./UI/Modal/Modal";
import { useState } from "react";
const RootLayout = (props) => {
  const [openLoginModal, setopenLoginModal] = useState(false);
  const [loggedinStatus, setLoggedinStatus] = useState({});
  const [locationValue, setLocationValue] = useState("");
  const [openLocationModal, setopenLocationModal] = useState(true);
  const LocationValueHandler = (value) => {
    setLocationValue(value);
  };
  const LocationModalHandler = () => {
    setopenLocationModal(!openLocationModal);
  };
  const LoginModalHandler = () => {
    setopenLoginModal(true);
  };
  const UserNameHandler = (loginStatus) => {
    setLoggedinStatus(loginStatus);
  };
  const CloseSigninHandler = () => {
    window.stop();
    setopenLoginModal(false);
  };

  return (
    <>
      <Header
        location={locationValue}
        onSelected={LocationModalHandler}
        onSignin={LoginModalHandler}
        loggedinStatus={loggedinStatus}
        onSetLocation={props.onSetLocation}
      />
      {openLocationModal && (
        <Modal onSelected={LocationModalHandler}>
          <LocationModal
            onValue={LocationValueHandler}
            onSelected={LocationModalHandler}
          />
        </Modal>
      )}
      {openLoginModal && (
        <Modal onSignin={LoginModalHandler}>
          <LoginModal
            onClick={CloseSigninHandler}
            onLoginSuccess={UserNameHandler}
          />
        </Modal>
      )}
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
