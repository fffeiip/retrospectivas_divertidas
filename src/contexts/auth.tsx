import React, { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom'

interface AuthContextData {
    signed: boolean;
    apiKey: string;
    handleLogin(json: LoginForm): void;
}

interface LoginForm {
    email: string;
    password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [apiKey, setApiKey] = useState<string>("");
    let history = useHistory()
    async function handleLogin(json: LoginForm) {
        const response = await window.fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'api_token': process.env.API_KEY!
            },
            body: JSON.stringify({
                email: json?.email,
                password: json?.password
            }),
        })
        const { api_key } = await response.json()
        setApiKey(api_key)
        localStorage.setItem("api_key", api_key)
        let redirect_route = !!api_key ? "/dashboard" : "/login"
        history.push(redirect_route)
       
    }
    return (
        <AuthContext.Provider value={{ signed: !!apiKey, handleLogin, apiKey }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;