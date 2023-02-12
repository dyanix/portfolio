import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import CloseButton from "./components/closebutton";
import Help from "./components/Help/help";

import ScrollButton from './components/Scroll/ScrollButton'





import SnakeGame from "./components/Snake/SnakeGame";
import Command from "./components/Command";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);


  const handleSubmit = (event) => {
    event.preventDefault();
    let newOutput = [...output];
    // let newOutput = [];

    switch (input) {
      case "about":
        newOutput.push(<About />);
        break;
      case "projects":
        newOutput.push(<Projects />);
        break;
      case "contact":
        newOutput.push(<Contacts />);
        break;
      case "clear":
        window.location.reload();
        break;
      case "help":
        newOutput.push(<Help />);
        break;
      case "snake":
        newOutput.push(<SnakeGame />);
        break;
      case "email":
        window.location.href = "mailto:dyanixdhawale@gmail.com?subject=Enquiry";
        break;
      default:
        newOutput.push(<Command/>);
    }

    setOutput(newOutput);

    setInput("");
  };


  const outputRef = useRef();

  useEffect(() => {
    outputRef.current.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  return (
    <div className="App">
       
      <header>
        <nav>
          <ul>
            {/* <li>
              <a
                href="#"
                onClick={() => {
                  setOutput([...output, <About />]);
                  
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setOutput([...output, <Projects />]);
                  
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setOutput([...output, <Contacts />]);
                 
                }}
              >
                Contact
              </a>
            </li> */}
            
              <a href="https://github.com/dyanix" >Github</a>
              <a href="https://www.linkedin.com/in/dyanesh-dhawale-8742241b9/" >LinkDin</a>

          </ul>
        </nav>
      </header>
      <main>
        <div className="terminal">
          <div className="close">
            <CloseButton />
            {/* <button className="close-button"  onClick={handleClose} >×</button> */}
            <button className="close-button2">+</button>
            <button className="close-button3">-</button>

          </div>


          <form onSubmit={handleSubmit}>
            <p >Welcome to my portfolio! — Type <span className="colorhelp">help</span> for a list of supported commands.</p>
            {output.map((out, i) => (
              <div key={i}>
                <pre className="terminal-output">{out}</pre>
              </div>
            ))}
            <div className="terminal-input">
              <span>♛dyanix@dhawale-2002:~$&nbsp;</span><span className="cursor">█</span>
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </div>
            <div ref={outputRef} />
          </form>

        </div>
      </main>
      <footer>
        <p className="footer-text">&copy; {new Date().getFullYear()} Terminal Portfolio 🇮🇳</p>

      </footer>
      <ScrollButton />
    </div>

  );
}


export default App;
