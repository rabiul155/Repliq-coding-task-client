import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const logOut = () => {
        setCurrentUser(null)
    }


    const authInfo = { currentUser, setCurrentUser, logOut }


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;