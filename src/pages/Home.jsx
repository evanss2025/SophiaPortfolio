import "../output.css";
import { useState } from "react";

export default function Home() {

  function randomTitle() {
    const titles = ["Engineer", "Student", "Women in STEM", "Web Developer", "AI Enthusiast", "Coder", "Learner", "Gamer", "Advocate"];
    const randomIndex = Math.floor(Math.random() * titles.length);
    const titletext = document.getElementById('randomtitle');
    let a = "";
    let firstletter = titles[randomIndex].split('');

    if ((firstletter[0] === "A") || (firstletter[0] === "E")) {
      a = "an"
    } else {
      a = "a"
    }
    titletext.innerHTML = "I am " + a + " " + titles[randomIndex];
    console.log("randomtitle running");
  }

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 rounded-lg text-black flex items-center justify-center p-8 flex items-center justify-center">
          <div id="intro flex items-center justify-center">
            <h1 className="font-bold text-4xl m-4">Hi, I'm Sophia!</h1>
            <div className="flex text-xl items-center">
              <img onClick={() => {randomTitle();}} className="w-12 h-12 animate-bounce" src="dice.png"></img>
              <h2 id="randomtitle" className="m-4 text-2xl text-cyan-500 font-bold">I am a...</h2>
            </div>
            <div className="w-5/8 m-4" id="image">
              <img src="public/me.png" onClick={() => {randomTitle();}}></img>
            </div>
            <div className="flex justify-center items-center">
              <div id="statement" className="flex items-center justify-center text-stone-50 rounded-xl p-4 w-5/6 bg-gradient-to-r text-lg from-cyan-400 to-blue-400">
                <p>I love computer science because it can connect people across the world together! I hope to create applications to help and bring people together, while promoting women in STEM.</p>
              </div>
            </div>
          </div>
          <div>
            <div id="leadership" className="m-4">
              <h1 className="font-bold text-3xl underline underline-offset-4">Leadership</h1>
              <ul className="list-disc text-xl mt-4">
                <li>
                   <a className="font-bold" href="https://www.night-hacks.com/">NightHacks</a>
                  <p className="mx-2">An online hackathon where I helped raise $1,400, and have 150+ participants creat 40+ projects.</p>
                </li>
                <li>
                   <a className="font-bold" href="https://tlap.hackclub.com/">Think Like a Programmer</a>
                  <p className="mx-2">Led a team of 10 high schoolers, managed $8,000 event budget, and worked with Girl Scouts to host a coding learnathon where 30+ girl scouts learned about coding. Had a dinner with women professionals in the STEM industry afterwards.</p>
                </li>
                <li>
                   <a className="font-bold" href="https://evanss2025.github.io/Girls-Who-Code-KP/">Girls Who Code</a>
                  <p className="mx-2">Founder and President of the Girls Who Code club at my high school to get more women interested in STEM. We have won at 2 hackathons as a team.</p>
                </li>
                <li>
                   <a className="font-bold" href="https://www.techgirlz.org/">Techgirlz</a>
                  <p className="mx-2">Accepted into Techgirlz's teen advisory board. I attend montly meetings and have hosted 2 workshops with 40 participants. </p>
                </li>
               
              </ul>
            </div>
            <div id="awards" className="m-4">
              <h1 className="font-bold text-3xl underline underline-offset-4">Awards</h1>
              <ul className="list-disc text-xl mt-4">
                <li>NCWIT Massachusetts Affiliate Winner</li>
                <li>Best Female Team Hack - KTHacks</li>
                <li>Best Overall 2nd Place - MVHACKS</li>
              </ul>
            </div>
            <div id="code" className="m-4">
              <h1 className="font-bold text-3xl underline underline-offset-4">Coding Languages</h1>
              <ul className="list-disc text-xl mt-4">
                <li>HTML, CSS, JS, react JS, Tailwind CSS, Python</li>
              </ul>
            </div>
            
          </div>
          
        </div>
        <div className="flex items-center justify-center">
          <p className="font-bold text-stone-50 p-4 text-2xl rounded-xl">“Programming isn’t about what you know; it’s about what you can figure out.” – Chris Pine, Learn to Program</p>
        </div>
      </div>
      
    </div>
  );
}
