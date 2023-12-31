import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({ children }) => {
    const [user, _setUser] = useState(localStorage.getItem("USER"));
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setUser = (user) => {
        _setUser(user);
        if (user) {
            localStorage.setItem("USER", user);
        } else {
            localStorage.removeItem("USER");
        }
    };

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };

    return (
        <StateContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
