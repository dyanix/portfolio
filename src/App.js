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
import Landing from "./components/Landing/Landing";
import TerminalHead from "./components/TerminalHead/TerminalHead";



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

  useEffect(() => {
    outputRef.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo(0, 0);
  }, []);







  
  return (<>
    <Landing/> 
    <div className="App">
      <TerminalHead/>
      <main>
        <div className="terminal">
          <div className="close">
            <CloseButton />
            <button className="close-button2">+</button>
            <button className="close-button3">-</button>
          </div>
          <form onSubmit={handleSubmit}>
            <p>Welcome to my portfolio! — Type <span className="colorhelp">help</span> for a list of supported commands.</p>
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
    </div>
    <div>
      {/* <ScrollButton /> */}
    </div>
  </>

  );
}


export default App;
