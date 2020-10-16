import React, { createContext, useState } from 'react';

export const GlobalVlaue = createContext();

const GlobalValueProvider = (props) => {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [eventName, setEventName] = useState('');

    return (
        <GlobalVlaue.Provider value={{ logedUser: [loggedInUser, setLoggedInUser], adminControl: [admin, setAdmin], eventName: [eventName, setEventName] }}>
            {props.children}
        </GlobalVlaue.Provider>
    );
};

export default GlobalValueProvider;