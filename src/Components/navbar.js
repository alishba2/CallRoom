// Navbar.js
import { useState } from "react"
import "./navbar.css"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Call Room
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        {/* hamburger svg code... */}
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul className="dropdown">
          <li>
            <a href="/home">Home</a>
          </li>
        
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/about">Profile</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}