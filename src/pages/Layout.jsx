import { Outlet, Link } from "react-router-dom";
import "../output.css";

export default function Layout() {

  function changeHome() {
    window.location.href = "home";
  }

  function changeProjects() {
    window.location.href = "projects";
  }

  function changeContact() {
    window.location.href = "contact";
  }
  
  return (
    <div className="overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
      <header className="text-stone-50">
        <div id="header" className="flex p-8 items-center justify-center">
          <h1 className="text-4xl font-bold">Sophia's Portfolio</h1>
          
          <ul className="flex items-center justify-center text-2xl m-3">
            <li>
            <a id="home" className="text-black font-bold bg-stone-50 rounded-full shadow-lg shadow-blue-500 p-2 px-6 m-3 transition duration-200 hover:shadow-blue-600" onClick={() => {changeHome();}}>Home</a>
            </li>
            <li>
              <a id="projects" className="text-black font-bold bg-stone-50 rounded-full shadow-lg shadow-blue-500 p-2 px-6 m-3 transition duration-200 hover:shadow-blue-600" onClick={() => {changeProjects();}}>Projects</a>
            </li>
            <li>
              <a id="contact" className="text-black font-bold bg-stone-50 rounded-full shadow-lg shadow-blue-500 p-2 px-6 m-3 transition duration-200 hover:shadow-blue-600" onClick={() => {changeContact();}}>Contact</a>
              </li>
          </ul>
        </div>
        
      </header>
    </div>
  );
}
