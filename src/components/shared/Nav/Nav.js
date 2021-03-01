import React, { Component } from "react";
import "./Nav.scss";
import logo from "../../../assets/icon.png";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
      return(
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <img src={logo} className="icon" alt="logo" />
                                </div>
                                <div className="col-9 icon-text">Helter</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        <nav className="menu-container">
                            <div className="menu-item">
                                <Link to="/">
                                    <i className="fa fa-home"></i>
                                    Início
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/library">
                                    <i className="fa fa-music"></i>
                                    Biblioteca
                                </Link>
                            </div>
                            <div className="menu-item">
                                <i className="fa fa-history"></i>
                                Histórico
                            </div>
                        </nav>
                    </div>
                    <div className="col-3">
                        <div className="user-container">
                            <i className="fa fa-user"></i>
                            <span className="user-name">CaioV</span>
                        </div>
                    </div>
                </div>
            </div>
      );
    /*return (
      <header className="header">
        <div className="logo">
          <div className="icon" style={{ marginLeft: "0px" }}>
            <i className="fa fa-plane"></i>
          </div>
        </div>
        <span className="title-system">Helter</span>
        <nav className="nav">
          <div className="menu">
            <div className="icon">
              <i className="fa fa-home"></i>
            </div>
            <div className="menu-item">
              <Link to="/">Inicio</Link>
            </div>

            <div className="icon">
              <i className="fa fa-book"></i>
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

          
        </nav>
      </header>
    );*/
  }
}

export default Nav;
