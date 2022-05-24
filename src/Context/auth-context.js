import axios from "axios";
import { createContext, useState, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../Reducers/reducer";
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(authReducer, {
    tokenExists: false,
  });

  const SignUpHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        ...params,
      });
      console.log(response);
      localStorage.setItem("notesapp-token", response.data.encodedToken);
      dispatch({ type: "TOKEN_EXISTS" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const LoginHandler = async (params) => {
    try {
      const response = await axios.post("/api/auth/login", { ...params });
      localStorage.setItem("notesapp-token", response.data.encodedToken);
      console.log(response.data.encodedToken);
      dispatch({ type: "TOKEN_EXISTS" });
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  const LogOutHandler = () => {
    localStorage.removeItem("notesapp-token");
    dispatch({ type: "TOKEN_REMOVED" });
    navigate("/");
  };
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        LoginHandler,
        SignUpHandler,
        LogOutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
