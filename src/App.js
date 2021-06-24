import React, { useState } from "react";
import * as Icon from 'react-feather';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Portfolios from "./pages/Portfolios";
import Resumes from "./pages/Resumes";
import FlagIcon from './components/FlagIcon.js'

function App() {
  const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary
  const [langMode, setLangMode] = useState(true);

  //lightMode ? document.body.classList.add('light') : document.body.classList.remove('light');

  const handleMode = () => {
    if (langMode) {
      setLightMode(true);
      setLangMode(false);
      //document.body.classList.add('light')
    } else {
      setLightMode(false);
      setLangMode(true);
      //document.body.classList.remove('light')
    }
  }

  return (
    <BrowserRouter>
      <div className="light-mode">
        <span className="icon">
          <FlagIcon code={langMode ? "gb" : "cl"} />
        </span>
        <button className={lightMode ? 'light-mode-switch active' : 'light-mode-switch'} onClick={() => handleMode()}></button>
      </div>
      <Switch>
        <Route path="/" exact>
          <Home langENG={langMode}/>
        </Route>
        <Route path="/about">
          <About langENG={langMode}/>
        </Route>
        <Route path="/resume">
          <Resumes langENG={langMode}/>
        </Route>
        <Route path="/portfolios">
          <Portfolios langENG={langMode}/>
        </Route>
        <Route path="/blogs" exact>
          <Blogs langENG={langMode}/>
        </Route>
        <Route path="/blogs/blog-details/:id/:title">
          <BlogDetails langENG={langMode}/>
        </Route>
        <Route path="/contact">
          <Contact langENG={langMode}/>
        </Route>
        <Route path="*">
          <Notfound langENG={langMode}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
