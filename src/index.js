import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import NavBarComponent from './components/navbar.component' ;
import SearchComponent from './components/search.component';
import MarketDetails from './components/market.details.component'
import NotificationComponent from './components/notification.component'






var wrapper = <div>

     <NavBarComponent/>
     <MarketDetails/>
     <SearchComponent/>
     <NotificationComponent/>
    
    
   
</div>


ReactDOM.render(wrapper, document.getElementById('root'));
serviceWorker.unregister();
