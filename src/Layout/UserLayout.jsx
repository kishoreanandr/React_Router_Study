import { Outlet } from "react-router-dom"

export const UserLayout=()=>{
    return <>
        <div className="container">
            <h2>List of Users</h2>
            <p>User Details....</p>
            <Outlet/>
        </div>
    </>
}