import './Projects.scss';
import ProjectList from "./ProjectList";
import {useState} from "react";

export default function Projects() {

  const [selected, setSelected] = useState('restaurant');

  const list = [
    {
      id: "restaurant",
      title: "Restaurant App"
    },
    {
      id: "Orca",
      title: "Orca Music Creation App"
    },
    {
      id: "Url",
      title: "URL Shortening App"
    },
    {
      id: "Agenda",
      title: "Agenda App"
    },
    {
      id: "Ruby",
      title: "Ruby on Rails Store App"
    },
    {
      id: "Tweeter",
      title: "Tweeter Social Media App"
    }
  ]



  return(
    <div className="projects" id="projects">

      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
      {/*  <path fill="#FAE4C8" fill-opacity="1"*/}
      {/*        d="M0,192L48,165.3C96,139,192,85,288,80C384,75,480,117,576,160C672,203,768,245,864,266.7C960,288,1056,288,1152,245.3C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>*/}
      {/*</svg>*/}
      <h1>Projects</h1>
        <ul>
          {list.map((item)=>{
            return <ProjectList
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          })}
        </ul>
        <div className="container">
          <div className="item">
            <img
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>

          <div className="item">
            <img
              src="media/tweeter.png"
              alt="tweeter"
            />
            <h3>Tweeter</h3>
          </div>

          <div className="item">
            <img
              src="media/ruby.png"
              alt="ruby-store"
            />
            <h3>Ruby Store</h3>
          </div>

          <div className="item">
            <img
              src="media/Orca.png"
              alt="orca"
            />
            <h3>Orca</h3>
          </div>


        </div>

    </div>
  )

}