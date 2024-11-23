import { NavLink } from "react-router-dom"

export const NotFound=()=>{
    return <>
        <div className="container">
            <p>Not Found | 
            <NavLink to='/'>Click below to home page</NavLink></p>

        </div>
    </>
}