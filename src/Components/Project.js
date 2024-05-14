import React from 'react'
import "../Styles/Project.scss";
import pic1 from"../Assets/Pic1.png";
import pic2 from"../Assets/Pic2.jpg";
import pic3 from"../Assets/Ecom.jpg";
// import { TbExternalLink } from "react-icons/tb";

function Project() {
  return (
    <div>
        <div className='pro' id='project'>
            <h2 >ProjectS</h2>
        </div>

        
        <div className='project'>
            <div className='pro_detail'>
                <img src={pic1} alt=''width={350}height={200} ></img>
                
                <h3> Emotion Detector</h3>
                <p><span>OVERVIEW:</span> A Machine Learning model is developed to recognize  facial expressions of various emotions using a dataset of facial images.The Model is built using CNN . The GUI is designed to allow user to input images for emotion detection or access live camera feeds for real time emotion detection.It utilizes HAAR cascade algorithm for facial detection.</p>
                

            </div>

            <div className='pro_detail'>
                <img src={pic2} alt='' width={350} height={200} ></img>
                <h3>User Authentication</h3>
                <p> <span>OVERVIEW:</span> Our project focuses on implementing user authentication using Django, a Python web framework. we ensure secure user registration, login, and session management. The project aims to provide a robust and user-friendly authentication system for web applications, promoting trust and reliability in user interactions. </p>

            </div>

            <div className='pro_detail'>
                <img src={pic3} alt='' width={350} height={200}></img>
                <h3>Ecommerce Website</h3>
                <p><span>OVERVIEW:</span> Our project involves building an eCommerce website using React.js, With React's component-based architecture and state management, we create a dynamic and responsive shopping experience.Through efficient design, seamless navigation, and engaging user interactions, our eCommerce website aims to deliver a modern and intuitive shopping platform for users.</p>

            </div>

        </div>

      
    </div>
  )
}

export default Project
