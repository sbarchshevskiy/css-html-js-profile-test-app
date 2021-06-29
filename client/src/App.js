import React from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
      <Contact/>
      <Header/>
      <Introduction/>
      <Projects/>
      <Welcome/>
    </div>
  );
}

export default App;
