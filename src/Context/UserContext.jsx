// import { createContext, useEffect, useState } from "react";

// export const UserConext = createContext({
//     user: null,
//     setUser: () => { },
//     loggoIn: false,
//     logout: () => { }
// });


// export default function UserProvider({ children }) {
//     const [user, setUser] = useState(null);
//     const [loggotIn, setLoggoutIn] = useState(false);


//     useEffect(() => {
//         const token = localStorage.setItem("token");
//         if (token) {
//             setLoggoutIn(true);
//         }

//         const logout = () => {
//             localStorage.removeItem("token");
//             setUser(null);
//             setLoggoutIn(false)
//         }
//     }, []);

//     return (
//         <>
//             <UserConext.Provider value={{
//                 user,
//                 setUser,
//                 loggotIn,
//                 logout

//             }}>
//                 {children}
//             </UserConext.Provider>

//         </>
//     )

// }


import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => { },
    loggedIn: false,
    setLoggedIn: () => { },
    logout: () => { }
});

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedUser && storedUser !== "undefined") {
            try {
                setCurrent(JSON.parse(storedUser));

            } catch (err) {
                console.log("Invalid user data in localStorage, clearing it");
                localStorage.removeItem("user");
            }
        }

        if (token) {
            setLoggedIn(true);
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        setLoggedIn(false);
    };

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            loggedIn,
            setLoggedIn,
            logout,
            setCurrent,
            current
        }}>
            {children}
        </UserContext.Provider>
    );
}