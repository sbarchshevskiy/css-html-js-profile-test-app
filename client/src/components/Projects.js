import './Projects.scss';

export default function Projects() {
  return(
    <div className="projects" id="projects">
      <h1>Projects</h1>

        <ul>
          <li className="active">Restaurant App</li>
          <li>Music Creation App</li>
          <li>URL Shortener</li>
          <li>Agenda App</li>
          <li>Ruby On Rails Store</li>
          <li>Social Media App</li>

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
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>

          <div className="item">
            <img
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>

          <div className="item">
            <img
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>

          <div className="item">
            <img
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>

          <div className="item">
            <img
              src="media/scheduler.png"
              alt="scheduler-app"
            />
            <h3>Scheduler App</h3>
          </div>


        </div>

    </div>
  )

}