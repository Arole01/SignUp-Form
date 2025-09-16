import { createContext, useState, useEffect } from "react";

export const AppContext = createContext()
export const AppProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [err, setErr]=useState(null)


    const signup = ( names,email,password)=>{
        setErr(null)
}