import './Header.scss';

export default function Header() {
  return(
    <div className="header">
        <div className="wrapper">
          <div className="left-side">
            <a href="#intro" className="logo">.sergey</a>
            <div className="item-container">
              <span>514 123 1234</span>
            </div>
            <div className="item-container">
              <span>sergey@sergey.com</span>
            </div>
          </div>

          <div className="right-side">
            <div className="hamburger-menu">
              <span className="top-line"></span>
              <span className="center-line"></span>
              <span className="bottom-line"></span>
            </div>
          </div>
        </div>
    </div>
  )
}

