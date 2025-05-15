import React,{useEffect,useState} from "react";

const Sellers = ()=>{
    const [name,setName] = useState("");
    useEffect(()=> {
        const notification = 5;
        document.title = `Name :${name} `;
        console.log("Mount!");
        return () => {
            console.log("Unmount!!");
        }
    },[]);
    return(
        <>
            <h3>Admin Sellers Page</h3>
            <input type="text" onChange={e=>setName(e.target.value)}/>
        </>
    )
}

export default  Sellers;