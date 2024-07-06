import Home from "./Partials/Home";
import Nav from "./Partials/Nav";
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom'
import About from "./Partials/About";
import Skills from "./Partials/Skills";
import UnderConstruction from "./Partials/UnderConstruction";
import Footer from "./Partials/Footer";
// import Tests from "./Partials/Tests.tsx";


function App() {
  return (

    <Router>
      <div className="App border_neone2 flex  h-screen w-screen items-center flex-col">
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
          
          <UnderConstruction/>
        </Route>
        <Route path="/Contact">
          <UnderConstruction/>
        </Route>
        <Route path="/Blogs">
          <UnderConstruction/>
        </Route>
        



      </Switch>
      <Footer/>

    </div>
    </Router>
  );
}

export default App;
