import React from "react";
import "../Styles/Skills.scss";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";

function Skills() {
  return (
    
    <div>
      <div className="skill" id="skill">
        <h2>CapabilitieS</h2>
      </div>
      
      <div className="details">
       
        <div className="front"> 
          <h3>Front End</h3>
          <div className="Ficon">
            <div className="icon1">
              
              <span><FaHtml5 Html size={100}   /> <p>HTML</p></span>
               
              <span><FaCss3 size={100} />
              <p>CSS</p>
              </span>
              
            </div>
            <div className="icon2">
              <span>
              <DiJavascript size={100} />
              <p>JavaScript</p>
               </span>
              <span>
              <RiReactjsFill size={100} /> 
              <p>React JS</p></span> 
            </div>
          </div>  
        </div>
        
        <div className="backend">
          <h3>Back End </h3>
          <div className="Bicon">
            <div className="icon1">
              <span>
              <FaPython size={100} /> 
              <p>Python</p></span> 
            </div>
            <div className="icon2"> 
            <span> <TbBrandDjango size={100} /><p>Django</p></span> 
            </div>
          </div>
          
        </div>
        <div className="db">
          <h3>DataBase </h3>
          <div className="Dicon"> 
            <span>
            <BiLogoPostgresql size={100} />
            <p>Postgresql</p>
            </span>
            
            <span>
            <TbBrandMysql size={100}/>
            <p>My SQL</p>
            </span>
          </div>
        </div>
         
        
      </div>
    </div>
    
  );
}

export default Skills;
