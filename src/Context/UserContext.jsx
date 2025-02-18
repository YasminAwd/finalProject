import { useEffect, useState } from "react";
import { createContext } from "react";


export let userContext =createContext();

export function UserContextProvider(props){

    const[userLOgin, setUserLogin]=useState(null);

    useEffect(()=>{
        if(localStorage.getItem('userToken') !==null){
            setUserLogin(localStorage.getItem('userToken'))
        }
    },[])

    return <userContext.Provider value={{userLOgin,setUserLogin}}>
        {props.children}
    </userContext.Provider>
}