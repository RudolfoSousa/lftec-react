import React, { Component } from 'react';

class Menu extends Component{
  render(){
    return(
      <div className="menu">
        <div className="container">
          <div className="logo">
            <div className="logo-branch">
              <a href="/">
                <h1>Lftec</h1>
              </a>
            </div>
          </div>
          <div className="navbar">
            <nav>
              <ul>
                <li><a href="">A Lftec</a></li>
                <li><a href="">Produtos</a></li>
                <li><a href="">Parceiros</a></li>
                <li><a href="">Clientes</a></li>
                <li><a href="">Contato</a></li>
              </ul>
              <div className="bottom-bar"></div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;
