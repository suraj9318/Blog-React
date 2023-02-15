import { createContext, useState } from "react";

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({})
    const [profile, setProfile] = useState({})
    return <UserContext.Provider value={{userInfo,setUserInfo,userData, setUserData, profile, setProfile}}>
        {children}
    </UserContext.Provider>
}