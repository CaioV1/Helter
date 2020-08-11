import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <header className="header">
        <div className="logo">
          <div className="icon" style={{ marginLeft: "0px" }}>
            <i className="fa fa-plane"></i>
          </div>
        </div>
        <span className="title-system">Visual Upload</span>
        <nav className="nav">
          <div className="menu">
            <div className="icon">
              <i className="fa fa-home"></i>
            </div>
            <div className="menu-item">
              <Link to="/">Inicio</Link>
            </div>

            <div className="icon">
              <i class="fa fa-book"></i>
            </div>
            <div className="menu-item">
              <Link to="/library">Biblioteca</Link>
            </div>

            <div className="icon">
              <i className="fa fa-heart"></i>
            </div>
            <div className="menu-item">
              <Link to="/favorites">Favoritos</Link>
            </div>
          </div>

          <div className="search-container">
            <div className="icon">
              <i className="fa fa-search" style={{ marginLeft: "0px" }}></i>
            </div>
            <div className="search-bar"> Pesquisar</div>
          </div>

          <div className="user-container">
            <div className="icon" style={{ marginLeft: "0px" }}>
              <i className="fa fa-user"></i>
            </div>
            <span className="user-name">CaioV</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;
