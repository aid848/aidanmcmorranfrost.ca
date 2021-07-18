import './App.css';
import {Route, Switch, useHistory,} from "react-router-dom";
import {AppBar, Card, Tab, Tabs} from "@material-ui/core";
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
    return (
        <div className="App">
            <div>
                <AppBar className={"AppBar"} color={'transparent'} position="static">
                    <Tabs value={tab} centered={true} onChange={(e, value) => handleNavbar(e, value, history)}>
                        <Tab label={"Home"} value={"/"} style={{backgroundColor: "rgba(255,255,255,0.3)"}} />
                        <Tab label={"About Me"} value={"/about"}
                             style={{backgroundColor: "rgba(255,255,255,0.3)"}} />
                        <Tab label={"Projects"} value={"/projects"}
                             style={{backgroundColor: "rgba(255,255,255,0.3)"}} />
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
            <Card elevation={3} style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.5)",
                backgroundSize: "cover",
                margin: "1rem"
            }}>
                <footer>Copyright © 2021, Aidan Frost | <a style={{color: "black" }} href="https://github.com/aid848/aidanmcmorranfrost.ca">Source Code</a> </footer>
            </Card>
        </div>
    );
}


export default App;
