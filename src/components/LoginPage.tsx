import React, { useState } from "react";
import { autentication } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ButtonSign, LoginContainer } from "../ui/styles";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const autenticationgoggle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(autentication, provider)
      .then((res: any) => {
        setToken(res._tokenResponse?.idToken);
        if (token) {
          sessionStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch((eror) => {
        console.log("error");
      });
  };
  return (
    <LoginContainer className="">
      <h1>Sign in with Google User</h1>
      <ButtonSign onClick={autenticationgoggle}>
        <AiFillGoogleCircle />
        sign in google
      </ButtonSign>
    </LoginContainer>
  );
};
