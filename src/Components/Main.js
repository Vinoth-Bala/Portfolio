import React from "react";
import "../Styles/Main.scss";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <div>
      <div className="main">
        <h2>Portfolio</h2>
        <ul>
          <li>
            <a className="menu">About</a>
          </li>
          <li>
            <a className="menu">Skills</a>
          </li>
          <li>
            <a className="menu">Education</a>
          </li>
          <li>
            <a className="menu">Projects</a>
          </li>

          <button>Hire Me</button>
        </ul>
      </div>
      <div className="about">
        <div className="abt">
          <h3>Hi, I'm</h3>
          <h1>Vinoth B</h1>
          <h4>
            And I'm a <span>Software Developer</span>
          </h4>
        </div>
        <p>
          Aspiring to excel as a Software Developer within a vibrant team
          environment, I am eager to collaborate with diverse teams to tackle
          complex challenges and contribute to the development of impactful
          software products.
        </p>

        <div className="socialmedia">
         
          <a className="hii" href="https://www.linkedin.com/in/vinoth-bala-321925236/">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/Vinoth-Bala">
            <BsGithub size={20}/>
          </a>
        </div>
        <button>Download CV</button>
      </div>
    </div>
  );
}

export default Main;
