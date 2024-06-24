import "../output.css";
import { useState } from "react";

export default function Home() {

  return (
    <div className="w-full h-full">
      <div id="main">
        <div className="bg-stone-50 rounded-lg text-black flex flex-col items-center justify-center p-8 flex items-center justify-center">
          <div id="intro">
            <h1 className="font-bold text-3xl m-3">Hi! I'm Sophia</h1>
            {/* <div className="w-1/2" id="image">
              <img src="public/linkedin.jpg"></img>
            </div> */}
          </div>
        </div>
      </div>
      
    </div>
  );
}
