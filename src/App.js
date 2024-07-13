import Home from "./Partials/Home";
import Nav from "./Partials/Nav";
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import About from "./Partials/About";
import Skills from "./Partials/Skills";
import Contacts from './Partials/Contact';
import UnderConstruction from "./Partials/UnderConstruction";
import Footer from "./Partials/Footer";
import Blogs from "./Partials/Blogs";
import Projects from "./Partials/Projects";


function App() {
  return (

    <Router>
      <div className="App border-solid border-[.25rem] md:border-[.3rem] border-p4 flex  h-screen w-screen items-center flex-col">
      <Nav/>
      <Switch>
        <Route exact path="/"> 
          <Home/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Skills">
          <UnderConstruction/>
        </Route>
        <Route path="/Projects">
          <Projects/>
        </Route>
        <Route path="/Contact">
          <Contacts/>
        </Route>
        <Route path="/Blogs">
          <Blogs/>
        </Route>
        



      </Switch>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
