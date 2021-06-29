import React from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import './App.scss';


function App() {
  return (
    <div className="app">
      <Header/>
        <div className="sections">
          <Welcome/>
          <Introduction/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
