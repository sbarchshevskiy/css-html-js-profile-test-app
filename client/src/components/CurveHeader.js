import './CurveHeader.scss'

export default function CurveHeader({menuOpen, setMenuOpen}){

  return(
    <div className={"curve " + (menuOpen && "active")}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,112C1120,107,1280,117,1360,122.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  )
}