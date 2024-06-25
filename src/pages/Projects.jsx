import "../output.css";
import { useState } from "react";

export default function Projects() {
  let index = 0;

  setTimeout(() => {
    initial();
  }, 50);

  function initial() {
    const projectTitle = document.getElementById("projectTitle");
    const projectImage = document.getElementById("projectimage");
    const github = document.getElementById("github");
    const projectDescription = document.getElementById("projectDescription");
    const projects = ["STEMConnect", "Learning Literacy", "FuturePath", "HealthLens"];
    const projectImages = ["public/stemconnect.png", "public/learningliteracy.png", "public/futurepath.png", "public/healthlens.png"];
    const projectDescriptions = ["STEMConnect is a website for working women to connect with mentors. It has a leaderboard, match, and profile creation features.", "Learning Literacy is a project that focuses on helping the gender digital divide. It helps women learn about digital literacy, social media, and privacy.", "FuturePath helps students find internships and learn more about careers to prepare them for the workforce.", "Healthlens is an app I orginally built for MIT's Global AI Hackathon. It uses AI for people to know their health risks and includes a chatbot if anyone needs immediate support."];
    const githubs = ["https://github.com/evanss2025/STEMConnectRepo", "https://github.com/evanss2025/Learning-Literacy", "https://github.com/evanss2025/FuturePath", ""];

    projectTitle.innerHTML = projects[index];
    projectImage.src = projectImages[index];
    projectDescription.innerHTML = projectDescriptions[index];
    github.href = githubs[index];
    
  }

  function changeprojectRight() {
    if (index === 3) {
      index = 0;
    } else {
      index = index + 1;
    }
    
    console.log(index);
    changeProject(index);
  }

  function changeprojectLeft() {
    if (index === 0) {
      index = 3;
    } else {
      index = index - 1;
    }

    console.log(index);
    changeProject(index);

  }

  function changeProject(index) {
    const projectTitle = document.getElementById("projectTitle");
    const projectImage = document.getElementById("projectimage");
    const github = document.getElementById("github");
    const projectDescription = document.getElementById("projectDescription");
    const projects = ["STEMConnect", "Learning Literacy", "FuturePath", "HealthLens"];
    const projectImages = ["public/stemconnect.png", "public/learningliteracy.png", "public/futurepath.png", "public/healthlens.png"];
    const projectDescriptions = ["STEMConnect is a website for working women to connect with mentors. It has a leaderboard, match, and profile creation features.", "Learning Literacy is a project that focuses on helping the gender digital divide. It helps women learn about digital literacy, social media, and privacy.", "FuturePath helps students find internships and learn more about careers to prepare them for the workforce.", "Healthlens is an app I orginally built for MIT's Global AI Hackathon. It uses AI for people to know their health risks and includes a chatbot if anyone needs immediate support."];
    const githubs = ["https://github.com/evanss2025/STEMConnectRepo", "https://github.com/evanss2025/Learning-Literacy", "https://github.com/evanss2025/FuturePath", ""];

    projectTitle.innerHTML = projects[index];
    projectImage.src = projectImages[index];
    projectDescription.innerHTML = projectDescriptions[index];
    github.href = githubs[index];
    
  }

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 text-black flex flex-col items-center justify-center p-8">
          <h1 className="font-bold text-3xl m-2">My Projects</h1>
          <div className="flex">
            
            <div id="project" className="m-2 flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl m-4 text-cyan-400" id="projectTitle"></h1>
              <div className="flex justify-center items-center">
                <div className="w-8 m-4" id="leftarrow">
                  <img src="public/arrowleft.png"  onClick={() => {changeprojectLeft();}}></img>
                </div>
                <img id="projectimage" src=""></img>
                <div className="w-8 m-4 rotate-180" id="rightarrow">
                  <img src="public/arrowleft.png" onClick={() => {changeprojectRight();}}></img>
                </div>

              </div>
              <p className="m-2" id="projectDescription"></p>
              <a className = "font-bold text-xl" id="github" href="">GitHub</a>
            </div>
           
          </div>
        </div>
      </div>

    </div>
  );
}