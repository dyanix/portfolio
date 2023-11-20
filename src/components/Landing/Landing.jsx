import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Landing.css"
import TypewriterComponent from "typewriter-effect";

function Landing() {
  return (
    <>
     <div className="landing-container">
      <TypewriterComponent
        options={{
          strings: [
            "Hi",
            "Welcome",
            "to my terminal",
            "Portfolio"
          ],
          autoStart: true,
          loop: true,
        }}
        className="typewriter-text"
      />
    </div>
      {/* <Navbar />
      <div>

      <img class="image" src="https://i.ibb.co/1rrFwKM/portfolio.png" alt="" width="320" height="320" ></img>
      <div class="container">
        <div class="typewriter"><img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" height="30px" />I'm Frontend Developer </div>
      </div>
      </div> */}

    </>
  )
}

export default Landing;



