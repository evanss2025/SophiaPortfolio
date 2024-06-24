import "../output.css";
import { useState } from "react";

export default function Contact() {

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 rounded-xl text-black flex flex-col items-center justify-center p-8">
          <div id="contactme" className="flex flex-col items-center justify-center">
             <h1 className="text-3xl font-bold m-6">Connect With Me!</h1>
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <a className="flex flex-col justify-center items-center" href="https://www.linkedin.com/in/sophia-evans-094656270/">
                  <img className="w-1/6" src="public/linkedin.png"></img>
                </a>
                <h1>Linkedin</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <a className="flex flex-col justify-center items-center" 
 href="mailto:someone@example.com">
                  <img className="w-1/6" src="public/email.png"></img>
                </a>
                <h1>Email</h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <a className="flex flex-col justify-center items-center" 
              href="https://github.com/evanss2025">
                  <img className="w-1/6" src="public/github.png"></img>
                </a>
                <h1>GitHub</h1>
              </div>
            </div>
          </div>
         
        </div>
      </div>

    </div>
  );
}