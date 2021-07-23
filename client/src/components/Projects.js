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