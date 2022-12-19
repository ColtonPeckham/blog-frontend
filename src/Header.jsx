import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup"
import { useState } from "react";

export function Header() {

const [isSignupVisable, setIsSignupVisable] = useState(false)

const handleSignupShow = () =>
  setIsSignupVisable(true);

const handleSignupClose = () =>
  setIsSignupVisable(false);


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Blogs R Us</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/signup">Signup</Link>
        </li>
        <li className="nav-item">
        <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/posts/new">New Blogs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#posts-index">Blogs</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Super Secrets This Way</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<Modal show={isSignupVisable} onClose={handleSignupClose}>
  < Signup />
</Modal>
</header>

  );
}