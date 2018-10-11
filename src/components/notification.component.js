import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import * as SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default class NotificationComponent extends Component {

constructor(){
    super();
    this.notificationSystem = null
    this.initializeWebSocketConnection();
}

initializeWebSocketConnection() {
    let self = this;  
    let socket = new SockJS('http://localhost:8085/notification');
		let stompClient = Stomp.over(socket);
		stompClient.connect({}, function(frame) {
        stompClient.subscribe('/metallica',(e) =>{
          self.addNotification(e);
      })
	});
  }
  

addNotification(msg){
    let tradeInfo = JSON.parse(msg.body);
    this.notificationSystem.addNotification({
      message: `Trade Order:
       ${tradeInfo.side} ${tradeInfo.quantity} shares of ${tradeInfo.commodity} placed`,
      level: 'info'
    });
}

componentDidMount(){
    this.notificationSystem = this.refs.notificationSystem;
}
    
  render() {
    return  (
        <div>
        <NotificationSystem ref="notificationSystem" />
        </div>
    )
  }
}