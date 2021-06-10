import React, { useState, createContext } from 'react';

interface AuthContextData {
    signed : boolean;
    handleLogin(a:boolean) : void;
}

interface User {
    name : string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser]  = useState<User | null>(null);

    // @TODO
    async function handleLogin(a : boolean) {
        let b = a ? {name: "Felipe"} : null
        setUser(b);
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;