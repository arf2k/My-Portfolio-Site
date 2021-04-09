import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Footer/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
