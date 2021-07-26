import React from "react";
import Layout from "./core/Layout";
import NavBar from "./core/NavBar";

const App = () => {
  return (
    <NavBar>
      <div className="col-md-6 offset-md-3 text-center">
        <h1 className="p-5">MyFamily Home Page</h1>
        <h2>MERN STACK</h2>
        <hr />
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          quibusdam numquam impedit eveniet inventore explicabo? Quam quo
          dolorem pariatur! Temporibus obcaecati et adipisci quis! Enim
          perspiciatis est iste! In, ea!
        </p>
      </div>
    </NavBar>
  );
};

export default App;
