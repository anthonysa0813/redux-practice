import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PropsType {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PropsType> = ({ children }) => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      console.log("no existe! !!");
      navigate("/login");
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
