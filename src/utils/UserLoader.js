export const UserLoader=async()=>{ 
    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok){
        throw Error("User detail is not Loading!..");
    }
    const data=await res.json();
    return data;
}

export const UserSingleLoader=async({params})=>{
    const {id}=params;
    const res=await fetch("https://jsonplaceholder.typicode.com/users/"+id);
    if(!res.ok){
        throw Error("User detail not found!...");
    }
    const data=await res.json();
    return data;
}