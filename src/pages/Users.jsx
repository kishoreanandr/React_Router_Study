import { Link,  useLoaderData} from "react-router-dom";


export const Users=()=>{
    const users=useLoaderData();
    console.log(users);
    return <>
        <div className="container">
            {users.map((user)=>{
                return (<Link to={user.id.toString()} key={user.id}>
                <div className="userDetails">
                    <h4>Name:{user.name}</h4>
                    <p>Email:{user.email}</p>
                </div>
                </Link>
                );
            })}
        </div>
    </>
}