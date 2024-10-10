import React from "react";
import "./project.css";
import desktopM from "../../assets/figma/deskM.jpg";
import desktop from "../../assets/figma/desktop1.avif";

import f1 from "../../assets/figma/figma1.PNG";
import f2 from "../../assets/figma/figma2.PNG";
import f3 from "../../assets/figma/figma3.PNG";
import f4 from "../../assets/figma/figma4.PNG";
import { Link } from "react-router-dom";

import rd1 from "../../assets/react/rd1.PNG"
import rd2 from "../../assets/react/rd2.PNG"
import rd3 from "../../assets/react/rd3.PNG"
import rd4 from "../../assets/react/rd4.PNG"
import rd5 from "../../assets/react/rd5.PNG"
import rd6 from "../../assets/react/rd6.PNG"



function Project() {
  return (
    <div className="container">
      <div className="figma_projects">
        <h3>This Project Figma Design Screen Shoot Photo</h3>
        <div className="figma_class">
          <div className="desktop_m">
            <img src={desktopM} alt="" />
            <h3>Desktop and Mobile Responsive Design with figma</h3>
          </div>
          <div className="figma">
            <div className="figma_imge">
              <img src={f1} alt="" />
              <p>home page</p>
            </div>
            <div className="figma_imge">
              <img src={f2} alt="" />
              <p>About Page</p>
            </div>
            <div className="figma_imge">
              <img src={f3} alt="" />
              <p>body page</p>
            </div>
            <div className="figma_imge">
              <img src={f4} alt="" />
              <p>body and footer page</p>
            </div>
          </div>
        </div>

        <div className="figma_link">
          <p>to Know more about this design hire click hire the figma Link</p>
          <p>
            <Link
              className="link"
              to="https://www.figma.com/design/w2g3zY5QgUFhoo2Ca85xnO/Explore-Eth1?node-id=0-1&node-type=canvas"
            >
              click hire the figma Link Get Figma Design
            </Link>
          </p>
        </div>
      </div>

      <div className="react_projects">
      <h3>React Js Project snapshot Photo</h3>
        <div className="react_class">
        
       
          <div className="react_desk">
            <img src={desktop} alt="" />
            <h4>Desktop and Mobile Responsive</h4>
          </div>

          <div className="react">
            <div className="react_image">
              <img src={rd1} alt="" />
              <p>home page</p>
            </div>
            <div className="react_image">
              <img src={rd2} alt="" />
              <p>about page</p>
            </div>
            <div className="react_image">
              <img src={rd3} alt="" />
              <p>body page</p>
            </div>
            <div className="react_image">
              <img src={rd4} alt="" />
              <p>body page</p>
            </div>
            <div className="react_image">
              <img src={rd5} alt="" />
              <p>about  page</p>
            </div>
            <div className="react_image">
              <img src={rd6} alt="" />
              <p>footer page</p>
            </div>

            </div>
            

        </div>

      </div>

      <div className="my_projects">
        <h2>About Me</h2>
        <div className="me">
            <h3>My Other Project Experience</h3>
            <h4><Link className="link" to="/https://getnetam.github.io/getnet/">To Get Detail Information click Hire <span>My Personal Portfolio website</span></Link></h4>
            <h4><Link className="link" to="/https://github.com/GetnetAm">To Get <span>My GitHub Page Click Hire</span></Link></h4>


        </div>

      </div>
    </div>
  );
}

export default Project;
