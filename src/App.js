import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Footer from "./components/Footer/Footer";
import "./styles/App.scss"

const App = () => {
  return (
    <div className="background">
      <Nav />
      <Footer/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
