import React from 'react'
import "./Navbar.css"

import { AiFillLinkedin, AiOutlineHome ,AiOutlineUser ,AiOutlineGithub} from 'react-icons/ai';


const Navbar = () => {
  return (

    <div className="navbar-container" >
      <ul>
        {/* <li style={{ "--i": "#a955ff", "--j": "#ea51ff" }}>
          <span class="icon">
            <AiOutlineHome  style={{ color: '#a955ff' }} />
          </span>
          <span class="title">Terminal</span>
        </li> */}
        <li style={{ "--i": "#56ccf2", "--j": "#2f80ed" }}>
          <span class="icon">
            < AiOutlineUser style={{ color: '#56ccf2' }} />
          </span>
          <a class="titles" href="mailto:dyanixdhawale@gmail.com?subject=Enquiry"><span class="title">Message</span></a>
         
        </li>
        <li style={{ "--i": "#ff9966", "--j": "#ff5e62" }}>
          <span class="icon">
              <AiOutlineGithub style={{ color: 'black' }} />
            </span>
          <a class="titles" href="https://github.com/dyanix" target="_blank" rel="noopener noreferrer"><span class="title">Github</span>
          </a>



        </li>


        <li style={{ "--i": "#ffa9c6", "--j": "#f434e2" }}>
          <span class="icon">
            < AiFillLinkedin style={{ color: '#f434e2' }} />
          </span>
          <a class="titles" href="https://www.linkedin.com/in/dyanesh-dhawale-8742241b9/" target="_blank" rel="noopener noreferrer"> <span class="title">LinkDin</span>
          </a>
         
        </li>
      </ul>

    </div>
  )
}

export default Navbar;