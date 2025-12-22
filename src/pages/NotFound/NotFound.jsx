import './NotFound.scss';

import { Link } from "react-router-dom";

export default function NotFound(){
  return(
    <div className="container">
      <h1 className="sorry">SORRY</h1>
      <h2 className="not-found">PAGE NOT FOUND</h2>

      <div className="scene">
        <div className="ice-hole"></div>
            
        <div className="penguin">
            <div className="body">
              <div className="white-belly"></div>
              <div className="eyes">
                <div className="eye left"></div>
                <div className="eye right"></div>
              </div>
              <div className="beak"></div>
            </div>
            <div className="arm left-arm"></div>
            <div className="arm right-arm"></div>
            <div className="feet">
              <div className="foot left-foot"></div>
              <div className="foot right-foot"></div>
            </div>
        </div>

        <div className="fishing-rod">
          <div className="line"></div>
          <div className="error-sign">
            <p>ERROR</p>
            <span>404</span>
          </div>
        </div>
      </div>
      <Link to='/'><button className='btn-home'>Go home</button></Link>
    </div>
  )
}

