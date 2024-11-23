import { useLoaderData } from "react-router-dom"

export const User=()=>{
    const userDetail=useLoaderData();
    return <>
        <div className="conatiner">
            <h4>Id: {userDetail.id}</h4>
            <p>Username:{userDetail.username}</p>
            <p>Email:{userDetail.email}</p>
            <p>Phone:{userDetail.phone}</p>
            <p>Website:{userDetail.website}</p>
        </div>
    </>
}