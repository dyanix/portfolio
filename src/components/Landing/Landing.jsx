import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Landing.css"

function Landing() {
  return (
    <>
      <Navbar />
      <img class="image" src="https://i.ibb.co/1rrFwKM/portfolio.png" alt="" width="320" height="320" ></img>
      <div class="container">
        <div class="typewriter"><img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" height="30px" />I'm Frontend Developer </div>
      </div>

    </>
  )
}

export default Landing;



