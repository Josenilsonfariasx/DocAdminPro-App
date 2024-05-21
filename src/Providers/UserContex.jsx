import { createContext, useContext, useState } from "react";
import { Api } from "../Services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navi = useNavigate();

  const login = async (form) => {
    try {
      const { data } = await Api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user-doc", JSON.stringify(data.user));
      // navi("/home");
      toast.success("Login efetuado com sucesso ✅");
    } catch (error) {
      toast.warning("Email ou senha incorretos ❌");
    }
  }

  const registerUser = async (form) => {
    try {
      const { data } = await Api.post("/users/create", form);
      toast.success('Cadastro concluido ✅')
    } catch (error) {
      console.log(error.response.data.errors)
      if(error.response.data.errors.email){
        toast.warning('Este email ja esta em uso ❌')
        navi("/register");
      }
    }
  };

  return (
    <UserContext.Provider value={{ registerUser, login }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);