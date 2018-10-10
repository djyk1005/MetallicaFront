import React, { Component } from 'react';

export default class NavBarComponent extends Component {
  render() {
    return  (
      <div>
        <div><h2>Metallica App</h2></div>

        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">TRADES</a></li>
              {/* <li><a href="#">TRADES</a></li> */}
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