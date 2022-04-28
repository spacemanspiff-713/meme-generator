import React from "react"
import img from "./images/aaf.png"

export default function App(){
  return (
      <nav className="header">
          <div className="left-nav">
            <img src={img} alt="smiling face" className="header--image"/>
            <h2>Meme Generator</h2>  
          </div>
          <p>Scrimba - React Course</p>
      </nav>
      
  )
  
}