import "../output.css";
import { useState } from "react";

export default function Contact() {

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 text-black flex flex-col items-center justify-center p-8">
          <div id="contactme">
             <h1 className="text-xl font-bold">Contact Me!</h1>
            <a href="https://www.linkedin.com/in/sophia-evans-094656270/">
              <img src="public/linkedin.png"></img>
            </a>
          </div>
         
        </div>
      </div>

    </div>
  );
}