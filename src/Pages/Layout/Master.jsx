import React from 'react';
import { Link } from 'react-router-dom';

export default function Master(props){
    return(
        <div>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg bg-primary">
    {/* Container wrapper */}
    <div className="container-fluid pr-4 pl-4">
      {/* Toggle button */}
      <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        <div className="d-flex">
          <Link to="/" type="button" className="btn btn-warning me-3 text-white">
            <span className="fa fa-home me-2" />
            <span className="ml-1">Home</span>
          </Link>
          <Link to="/about" type="button" className="btn btn-warning me-3 text-white">
            <span className="fa fa-home me-2" />
            <span className="ml-1">About</span>
          </Link>
          <Link to="/card" type="button" className="btn btn-warning me-3 text-white">
            <i className="fas fa-shopping-cart me-3"  />
            <small className="badge badge-danger text-dark">{props.card.length}</small>
          </Link>
        </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
  {/* Content */}
 {props.children}
</div>
    )
}