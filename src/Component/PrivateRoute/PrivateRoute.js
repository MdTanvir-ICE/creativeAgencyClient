import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { GlobalVlaue } from '../GlobalValue/GlobalValue';

const PrivateRoute = ({ children, ...rest }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(GlobalVlaue);
    const {logedUser}=useContext(GlobalVlaue);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            logedUser[0].email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },

                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;