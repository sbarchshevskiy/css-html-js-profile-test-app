import './Introduction.scss';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Introduction() {

  const typedText = useRef();

  useEffect(() => {
    init(typedText.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["a developer", "a problem solver", "a programmer", "a tech enthusiast", "a content creator"]
    })
  }, [])
  return (
    <div className="curve">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,160C672,203,768,245,864,266.7C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    <div className="intro" id="intro">


      <div className="left-part">

        <div className="air-balloon">
        </div>
      </div>

      <div className="right-part">
        <div className="content-wrapper">
          <h2>Hey there!</h2>
          <h1>I'm Sergey</h1>
          <h3><span ref={typedText}></span></h3>
        </div>
        <div className="arrow">
          <a href="#projects">
            <img src="media/down-arrow.png" alt="see-projects"/>
          </a>
        </div>

      </div>


    </div>
    </div>


  )
}