import { createContext, useContext, useState } from "react";
import { Api } from "../Services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navi = useNavigate();

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
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);