import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navb">
      <nav className="nav">
        <div className="rg">
          <Link to="/evolvex-documentation">Evolvex Docs</Link>
          <Link to="http://127.0.0.1:5000">Rag tool</Link>
        </div>
        <Link to="/">
          <h1 className="logo">Evolvex</h1>
        </Link>
        <div className="lg">
          <Link to="/evolvex-blockchain">Freelance</Link>
          <Link to="/evolvex-code-agentic-ai">Developer</Link>
          <Link to="/evolvex-business-agentic-ai">Business</Link>
        </div>
      </nav>
    </div>
  );
};
