import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TableOneComponent from './components/tableone.component';
import * as serviceWorker from './serviceWorker';
import NavBarComponent from './components/navbar.component' ;
import SearchComponent from './components/search.component';
import CreateTradeComponent from './components/createtrade.component'
import DisplayTradeComponent from './components/displaytrade.component'
import MarketDetails from './components/market.details.component'




var wrapper = <div>
     <NavBarComponent/>
     <MarketDetails/>
     <SearchComponent/>
     {/* <div className="something">
     <TableOneComponent />
    <CreateTradeComponent/>
     </div> */}
     
    
   
</div>


ReactDOM.render(wrapper, document.getElementById('root'));
serviceWorker.unregister();
