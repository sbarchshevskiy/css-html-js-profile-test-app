import './Introduction.scss';
import {init} from 'ityped';
import {useEffect, useRef} from "react";

export default function Introduction() {

  const typedText = useRef();

  useEffect(() => {
    init(typedText.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["developer", "problem solver", "programmer", "tech enthusiast", "content creator"]
    })
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left-part">
        <div className="profile-image">
          <img src="media/guy.png" alt="guy"/>
        </div>
      </div>

      <div className="right-part">
        <div className="content-wrapper">
          <h2>Hello,</h2>
          <h1>My name is Sergey</h1>
          <h3>I am a <span ref={typedText}></span></h3>
        </div>
        <a href="#projects">
          <img src="media/down-arrow.png" alt="see-projects"/>
        </a>
      </div>
    </div>
  )
}