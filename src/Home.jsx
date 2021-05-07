import { useLocation } from "react-router";
import Header from "./Header";

export default function Home() {
    let location = useLocation();
    return (
        <>
        <Header name ={location.state.name}/>
        <div className="container" style={{background:"rgb(251,55,65)"}}>
        <h1>Home</h1>
        </div>
        </>
    )
}