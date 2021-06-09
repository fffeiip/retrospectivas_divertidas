import React, { useState, createContext } from 'react';

interface AuthContextData {
    signed : boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState(null)

    // @TODO
    async function handleLogin() {
        return;
    }
    return (
        <AuthContext.Provider value={{ signed: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;