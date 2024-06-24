import "../output.css";
import { useState } from "react";

export default function Home() {

  function randomTitle() {
    const titles = ["Engineer", "Student", "Women in STEM", "Web Developer", "AI Enthusiast"];
    const randomIndex = Math.floor(Math.random() * titles.length);
    const titletext = document.getElementById('randomtitle');
    let a = "";
    let firstletter = titles[randomIndex].split('');

    if firstletter[0] === "A"
    titletext.innerHTML = "I am " + titles[randomIndex];
    console.log("randomtitle running");
  }

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 rounded-lg text-black flex flex-col items-center justify-center p-8 flex items-center justify-center">
          <div id="intro">
            <h1 className="font-bold text-4xl m-4">Hi, I'm Sophia!</h1>
            <div className="flex text-xl items-center">
              <img onClick={() => {randomTitle();}} className="w-10 h-10" src="dice.png"></img>
              <h2 id="randomtitle" className="m-4 text-cyan-500 font-bold">I am a...</h2>
            </div>
            <div className="w-1/3 m-4" id="image">
              <img src="public/me.png" onClick={() => {randomTitle();}}></img>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
