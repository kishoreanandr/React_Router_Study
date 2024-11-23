import { useNavigate } from "react-router-dom"

export const Contact=()=>{
    const navigate=useNavigate();
    return <>
        <div className="container">
            Contact
            <button onClick={()=>navigate('info')}>Info</button>
            <button onClick={()=>navigate('form')}>Form</button>
        </div>
    </>
}