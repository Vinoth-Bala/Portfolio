import React from 'react'
import "../Styles/Edu.scss";
import { LuGraduationCap } from "react-icons/lu";

function Education() {
  return (
    <div>
        <div className='edu' id='edu'> 
            <h2>EducatioN</h2>
        </div>

        <div className='edu_details'>

            <div className='clg'> 
                <i>  <LuGraduationCap size={45} /> </i>
                <span>2023</span>
                <h3> Bachelor Of Engineering - <i>Computer Science    </i> </h3>
                {/* <p>CGPA:8.1</p>  */}
                <p>Prathyusha  Engineering College</p>
                <p>Thiruvallur</p>

            </div>

            <div className='clg'>
                <i>  <LuGraduationCap size={45} /> </i>  
                <span>2019</span> 
                <h3>Higher Secondary Certificate</h3>
                {/* <p>66%</p> */}
                <p>Thalapathy K Vinayagam Mat Hr Sec School</p>
                <p>Thiruttani</p>
  
            </div>
            <div className='clg'> 
                <i>  <LuGraduationCap size={45}  /> </i>
                <span>2017</span> 
                <h3>Secondary School Leaving Certificate</h3>
                {/* <p>85%</p> */}
                <p>Sudandira Mat Hr Sec School</p>
                <p>Thiruttani</p>

            </div>

 
        </div>
      
    </div>
  )
}

export default Education
