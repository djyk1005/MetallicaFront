import React, { Component } from 'react';

import TradeComponent from './trade.component';
import DisplayTradeComponent from './displaytrade.component'
import CreateTradeComponent from './createtrade.component'
export default class TradeTable extends Component { 

  constructor() {
    super();
    this.state = {
      showComponent: false,
      currenttrade:[],
     
      tradedata: []

    };

  }
    componentDidMount() {
 
    }

 

  render() {
    


 

    return (
      

      <div className="something">
      
      <div className="container">

        <table className="table table-striped">

          <thead>

            <tr>

              <th>Trade Date</th>

              <th>Commodity</th>

              <th>Side</th>

              <th>Qty</th>

              <th>Price</th>

              <th>Counterparty</th>

              <th>Location</th>
              <th>Trade Status</th>

            </tr>

          </thead>

          <tbody>

 

            {

              this.props.trades.map(function(p, i){

                return <TradeComponent
                  postData={p}
                  index={i}
                  key={p.tradeid}
                  {...this.props}
                  handleCallback = {this.props.handleCallback}
                />

              }.bind(this)

              )

            }
           

          </tbody>

        </table>



        


      </div>

      <CreateTradeComponent
      handleCallback = {this.props.handleCallback} />
      </div>
     
      

    )





  }




}