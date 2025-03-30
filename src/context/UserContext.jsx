import React, { createContext, useState, useContext, useEffect } from "react";

// Create the UserContext
const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        userId: null,
        loggedIn: false,
        subscribedPlanId: null,
    });

    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const updateUser = (newUser) => {
        setUser(newUser);
        sessionStorage.setItem("user", JSON.stringify(newUser)); // Save user data temporarily in sessionStorage
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
