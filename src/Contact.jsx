import { useLocation } from "react-router";
import Header from "./Header";
export default function Contact() {
    let location = useLocation();
    return (
        <>
        <Header name={location.state.name}/>
        <div className="container" style={{background:"rgb(167,153,185)"}}>
            <h1>Contact</h1>
        </div>
        </>
    )
}