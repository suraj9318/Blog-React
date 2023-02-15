import { createContext, useState } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({})
    return <UserContext.Provider value={{userInfo,setUserInfo,userData, setUserData}}>
        {children}
    </UserContext.Provider>
}