import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [err, setErr]=useState(null)

    const [usersDB, setUsersDB] = useState([])


    const signup = ( names,email,password,phoneNumber)=>{
        setErr(null)

        const existingUser = usersDB.find((u) => u.email === email)
        if (existingUser) {
            setErr('Email already registered')
            return false
        }

        const newUser = { names, email, password, phoneNumber }
        setUsersDB([...usersDB, newUser ])
        setUser(newUser)
        return true
}

        const login = (email, password) => {
            setErr(null)

            const existingUser = usersDB.find((u) => u.email === email)
            if (!existingUser) {
                setErr('User not found')
                return false
            }

            if (existingUser.password !== password) {
                setErr('Incorrect password')
                return false
            }

            setUser(existingUser)
            return true
        }

            const logout = () => {
                setUser (null)
                setErr(null)
            }
    
        return(
            <AppContext.Provider value={{ user, err, signup, login, logout}}>
                {children}
            </AppContext.Provider>
        )
}