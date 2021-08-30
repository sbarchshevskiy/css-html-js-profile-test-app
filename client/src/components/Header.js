import './Header.scss';
import {MenuOpen} from "@material-ui/icons";
// import CurveHeader from "./CurveHeader";
import React from "react";

export default function Header({menuOpen, setMenuOpen}) {
  return (
    <div className={"curve " + (!menuOpen && "active")}>
      {/*<CurveHeader*/}
      {/*  menuOpen={menuOpen}*/}
      {/*  setMenuOpen={setMenuOpen}*/}
      {/*/>*/}
      <div className={"header " + (menuOpen && "active")}>


        <div className="wrapper">

          <div className="left-side">

            <a href="#intro" className="logo">@sergey.barchshevskiy</a>
            <div className="item-container">

              <span>tel:</span>
            </div>
            <div className="item-container">
              <span>email:</span>
            </div>
          </div>

          <div className="right-side">
            <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              <span className="top-line"></span>
              <span className="center-line"></span>
              <span className="bottom-line"></span>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

