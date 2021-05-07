import {
  BrowserRouter as Router,
  useHistory
} from "react-router-dom";

export default function Header({name}) {
    let history = useHistory();
    function goToPage(path, name) {
        history.push(`/${path}`, {name:name})
    }
    return (
        <div className="header">
            <div className="left" onClick = {() => goToPage("", name)}>Hi, {name || "User"}</div>
            <div className="right">
            <Router>
            <div className="link home" onClick = {() => goToPage("Home", name)}>Home</div>
            <div className="link about" onClick = {() => goToPage("About", name)}>About</div>
            <div className="link contact" onClick = {() => goToPage("Contact", name)}>Contact</div>
            </Router>
            </div>
        </div>
    )
}