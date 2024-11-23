import { useRouteError } from "react-router-dom"

export const ErrorHandle=()=>{
    const error=useRouteError();
    return <>
        <div className="container">
            <h3>Oops! An error occured...</h3>
            <p>{error.message}</p>
        </div>
    </>
}