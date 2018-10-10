import React, { Component } from 'react';

import TradeComponent from './trade.component';
import DisplayTradeComponent from './displaytrade.component'
import CreateTradeComponent from './createtrade.component'
export default class TradeTable extends Component { 

  constructor() {
    super();
    this.state = {
      showComponent: false,
      currenttrade:[ {"tradeid":1,
      "Tradedate": "15/6/2018 ",
      "Commodity": "gold",
      "Side": "sell",
      "Qty": "5000",
      "price": "600000",
      "Counterparty": "BALCO",
      "Location": "bangalore",
      "TradeStatus":"Open",}],
     
      tradedata: [

        {
          "tradeid":1,
          "Tradedate": "15/6/2018 ",
          "Commodity": "gold",
          "Side": "sell",
          "Qty": "5000",
          "price": "600000",
          "Counterparty": "BALCO",
          "Location": "bangalore",
          "TradeStatus":"Open",
        },
        {   "tradeid":2,
            "Tradedate": "15/6/2018 ",
            "Commodity": "gold",
            "Side": "sell",
            "Qty": "5001",
            "price": "600001",
            "Counterparty": "BALCO",
            "Location": "bangalore",
            "TradeStatus":"Open",
          },
          { "tradeid":3,
            "Tradedate": "15/6/2018 ",
            "Commodity": "gold",
            "Side": "buy",
            "Qty": "5000",
            "price": "600000",
            "Counterparty": "BALCO",
            "Location": "bangalore",
            "TradeStatus":"Open",
          },
          { "tradeid":4,
            "Tradedate": "15/6/2016",
            "Commodity": "gold",
            "Side": "sell",
            "Qty": "5000",
            "price": "600000",
            "Counterparty": "BALCO",
            "Location": "bangalore",
            "TradeStatus":"Open",
          },
          { "tradeid":5,
            "Tradedate": "15/6/2017 ",
            "Commodity": "copper",
            "Side": "sell",
            "Qty": "5000",
            "price": "600000",
            "Counterparty": "BALCO",
            "Location": "bangalore", 
            "TradeStatus":"Open",

        }
      ]

    };

  }
    componentDidMount() {
  
        // fetch('url for fetching trade table')
        // .then(res => res.json())
        // .then(data=> {
        //     this.setState({tradedata: data});
        // });
        


    }

 

  render() {



 

    return (
      

 
      
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
                  handleCallback = {this.handleClicked.bind(this)}
                />

              }.bind(this)

              )

            }
           

          </tbody>

        </table>

        {this.state.showComponent ?
      <DisplayTradeComponent
      trade={this.state.currenttrade}
      /> :
      null
   }


      </div>
     
      

    )





  }

 
  handleClicked(returnval,rettrade) {
    this.setState({
      showComponent: true,
      currenttrade:rettrade
    });
    

  }


}