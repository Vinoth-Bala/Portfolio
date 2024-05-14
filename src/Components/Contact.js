import React from 'react'
import "../Styles/Contact.scss";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";


function Contact() {
  return (
    <div>

        <div className='con' id='contact'>
            <h2>ContacT</h2>
        </div>


        <div className='con_details'>
          <div className='contact'>

            <div><FiPhoneCall />  +91 82482 53297</div>
            <div><IoIosMail />   vinothbala1820@gmail.com</div>
            <div><MdLocationPin /> No.17b, 2nd St, Mahavishnu Nagar,Thiruttani.</div>

          </div>

         
          


        </div>
        <div className='footer'>
              <p>@2024 | All Rights Reserved</p>
          </div>

      
    </div>
  )
}

export default Contact
