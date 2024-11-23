import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const RootLayout=()=>{
    return <>
        <div>
            <Navbar/>
            {/*  outlet used for loading the paeg in these layout */}
            <Outlet/>
        </div>
    </>
}