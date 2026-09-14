import './App.css';
import {Route, Routes, useMatch, useNavigate, type NavigateFunction} from "react-router";
import {AppBar, Card, Tab, Tabs} from "@mui/material";
import {type SyntheticEvent} from "react";
import {Home} from "./Home";
import {Projects} from "./MyProjects";
// import {About} from "./AboutMe";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    // The selected tab follows the URL. Unmatched paths render Home, so they select Home.
    const onProjects = useMatch("/projects") !== null;
    // const onAbout = useMatch("/about") !== null;
    const tab = onProjects ? "/projects" : "/";
    let history = useNavigate();

    const handleNavbar = (e: SyntheticEvent, value: string, h: NavigateFunction) => {
        h(value)
    }
    return (
        <div className="App">
            <div>
                <AppBar className={"AppBar"} color={'transparent'} position="static">
                    <Tabs value={tab} centered={true} onChange={(e, value) => handleNavbar(e, value, history)}>
                        <Tab label={"Home"} value={"/"} style={{backgroundColor: "rgba(255,255,255,0.3)"}} />
                        {/* <Tab label={"About Me"} value={"/about"}
                             style={{backgroundColor: "rgba(255,255,255,0.3)"}} /> */}
                        <Tab label={"Projects"} value={"/projects"}
                             style={{backgroundColor: "rgba(255,255,255,0.3)"}} />
                    </Tabs>
                </AppBar>
                <Routes>
                    {/* <Route path="/about" element={<About/>}></Route> */}
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="*" element={<Home/>}></Route>
                </Routes>
            </div>
            <div style={{textAlign: "center"}}>
            <Card elevation={3} style={{
                display: "inline-block",
                backgroundColor: "rgba(255,255,255,0.5)",
                backgroundSize: "cover",
                margin: "1rem",
            }}>
                <footer>Copyright © 2021 - {new Date().getFullYear()}, Aidan Frost </footer>
            </Card>
            </div>
        </div>
    );
}

export default App;
