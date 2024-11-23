import { NavLink, replace, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate=useNavigate(); //it is used for navigate to that page while click or do some functions
    return <>
        <div className="navbar">
            <div className="logo">Kishore Anand</div>
            <ul>
                {/* NavLiknk is for displaying with active class*/}
                <NavLink to="/">
                    <li>Home</li>
                </NavLink>
                <NavLink to="/product">
                    <li>Products</li>
                </NavLink>

                <NavLink to="/about">
                    <li>About</li>
                </NavLink>

                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>

                <NavLink to='/users'>
                    <li>Users</li>
                </NavLink>
            </ul>
            <button onClick={()=>navigate('login',{replace:true} )}>Login</button> 
            {/* /login is used to route to that page     and  replace used for not navigate to previous page*/}
        </div>
    </>
}