import { Outlet, Link } from "react-router-dom";
import "../output.css";

export default function Layout() {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500">
      <header className="text-stone-50">
        <div id="header" className="flex">
          <h1 className="text-xl">Sophia's Portfolio</h1>
          <ul className="flex">
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
