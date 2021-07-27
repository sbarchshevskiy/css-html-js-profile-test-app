import './Examples.scss'
export default function Examples(){
  return(
    <div className="examples">
      <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-part">
                  <div className="image-container">
                      <img src="media/globe.png" alt=""/>
                    </div>
                    <h2>title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid aut consequatur culpa ea earum excepturi fuga, illum ipsam nostrum nulla odit officia omnis perspiciatis qui quis ratione suscipit veritatis.</p>
                    <span>Projects</span>
                </div>
              </div>
              <div className="right">
              </div>
            </div>
          </div>
      </div>
      <img src="media/arrow-next.png" className="arrow left" alt="" />
      <img src="media/arrow-next.png" className="arrow right" alt="" />

    </div>
  )

}