import { Outlet } from "react-router-dom"
import { Contact } from "../pages/Contact"

export const ContactLayout=()=>{
    return <>
        <Contact/>
        <Outlet/>
    </>
}