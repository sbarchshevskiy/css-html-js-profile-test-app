import React, {useState} from 'react';
import Contact from "./components/Contact";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Welcome from "./components/Welcome";
import './App.scss';
import Menu from "./components/Menu";
import Examples from "./components/Examples";
import CurveHeader from "./components/CurveHeader";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">


      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

        <div className="sections">

          <Introduction/>
          <Examples/>
          {/*<Projects/>*/}
          {/*<Welcome/>*/}
          <Contact/>
        </div>
    </div>
  );
}

export default App;
