import { useContext, useState, useEffect, createContext } from 'react';


const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({  });

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('fastburguer:userData', JSON.stringify(userInfo));
    }

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('fastburguer:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('fastburguer:userData');
        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    } , []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }

    return context;
}