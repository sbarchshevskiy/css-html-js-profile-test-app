import './Introduction.scss';
import {init} from 'ityped';
import {useEffect, useRef} from "react";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

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

  )
}