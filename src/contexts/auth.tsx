import React, { useState, createContext } from 'react';

interface AuthContextData {
    signed: boolean;
    apiKey: string;
    handleLogin(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [apiKey, setApiKey] = useState<string>("");

    async function handleLogin() {
        const response = await window.fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // 'api_token': process.env.API_KEY!
            },
            body: JSON.stringify({
                email: "2asds@email.com",
                password: "teste12"
            }),
        })
        const { api_key } = await response.json()
        setApiKey(api_key)
    }
    return (
        <AuthContext.Provider value={{ signed: !!apiKey, handleLogin, apiKey }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;