import React, { useState, createContext } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

interface AuthContextData {
  signed: boolean;
  apiKey: string;
  handleLogin(json: LoginForm): void;
}

interface LoginForm {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [apiKey, setApiKey] = useState<string>("");
  let history = useHistory();
  useEffect(() => {
    console.log(apiKey);
    console.log("trocou");
    let redirect_route = !!apiKey ? "/dashboard" : "/login";
    localStorage.setItem("api_key", apiKey);
    history.push(redirect_route);
  }, [apiKey, history]);
  async function handleLogin(json: LoginForm) {
    const response = await window.fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: json?.email,
        password: json?.password,
      }),
    });
    const {api_token} = await response.json();
    setApiKey(api_token);
  }

  return (
    <AuthContext.Provider value={{ signed: !!apiKey, handleLogin, apiKey }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
