import { useState } from "react";
import { useLocation } from "react-router";
import Header from "./Header";
export default function Main(){ 
    let location = useLocation();
    let [name, setName] = useState(location.state ? location.state.name:"");
    return (
        <>
        <Header name = {name}/>
        <div className="container main" style={{background:"#542F70"}}>
            <div className="title">Please enter your name</div>
            <input type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
        </div>
        </>
    )
}