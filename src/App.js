import './App.css';
import {Route, Switch, useHistory,} from "react-router-dom";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {useState} from "react";
import {Home} from "./Home";
import {Projects} from "./MyProjects";
import {About} from "./AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [tab, setTab] = useState("/")
    let history = useHistory();

    const handleNavbar = (e, value, h) => {
        h.push(value)
    }

    // TODO add plane and PA demos to router
    return (
        <div className="App">
            <div>
                <AppBar className={"AppBar"} color={'transparent'} position="static">
                    <Tabs value={tab} centered={true} onChange={(e, value) => handleNavbar(e, value, history)}>
                        <Tab label={"Home"} value={"/"}></Tab>
                        <Tab label={"About Me"} value={"/about"}></Tab>
                        <Tab label={"Projects"} value={"/projects"}></Tab>
                    </Tabs>
                </AppBar>
                <Switch>
                    <Route path="/about">
                        <About setTab={setTab}/>
                    </Route>
                    <Route path="/projects">
                        <Projects setTab={setTab}/>
                    </Route>
                    <Route path="/">
                        <Home setTab={setTab}/>
                    </Route>

                </Switch>
            </div>
            <footer className="FooterCopyright">Copyright © 2021, Aidan Frost</footer>
        </div>
    );
}


export default App;
