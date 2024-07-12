import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand mx-4 my-2" href="/home">
          {props.Title}
        </a>
        <form action="/login" className="mx-4">
        <a href="/login" className="btn btn-success btn-lg px-4">Login</a>
        </form>
      </div>
    </nav>
  );
}
