import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Main from "./Main";

export default function App(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path = "/">
                    <Main/>
                    </Route>
                    <Route  path = "/Home">
                    <Home/>
                    </Route>
                    <Route path = "/About">
                    <About/>
                    </Route>
                    <Route path = "/Contact">
                   <Contact/>
                    </Route>
                    
                </Switch>
            </Router>
        </div>
    )
}