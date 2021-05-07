import {  useLocation } from "react-router";
import Header from "./Header";
export default function About() {
    let location = useLocation();
    return (
        <>
        <Header name={location.state.name}/>
        <div className="container" style={{background:"rgb(252,201,64)"}}>
            <h1>About</h1>
        </div>
        </>
    )
}