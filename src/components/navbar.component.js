import React, { Component } from 'react';


export default class NavBarComponent extends Component {


  render() {
    return  (
      <div>
        <div><h2>Metallica App</h2></div>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">TRADES</a></li>
              <li><a href="#">TRANSFERS</a></li>
              <li><a href="#">TRANSPORTS</a></li>
              <li><a href="#">Username</a></li>
            </ul>
          </div>
        </nav>
      </div>









    )









  }
}