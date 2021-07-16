import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {Tab, Tabs, AppBar} from "@material-ui/core";
import {useState} from "react";

function App() {
  const [tab, setTab] = useState(0)
  // TODO react router routes: home,projects, about me, tech skills
  const handleNavbar = (e,value) => {

  }
  return (
    <div className="App">
      <Router>
        <div>
          <AppBar position="static">
          <Tabs value={tab} onChange={handleNavbar}>
            <Tab label={"Home"}></Tab>
            <Tab label={"About Me"}></Tab>
            <Tab label={"Projects"}></Tab>
          </Tabs>
        </AppBar>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About setTab={setTab}/>
            </Route>
            <Route path="/users">
              <Projects setTab={setTab}/>
            </Route>
            <Route path="/">
              <Home setTab={setTab}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home(props) {
  props.setTab(0)
  return <h2>Home</h2>;
}

function About(props) {
  props.setTab(1)
  return <h2>About</h2>;
}

function Projects(props) {
  props.setTab(2)
  return <h2>Projects</h2>;
}

export default App;
