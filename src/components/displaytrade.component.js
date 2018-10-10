import React, { Component } from 'react';
import Popup from 'reactjs-popup'
import EditTradeComponent from './editTrade.component'


export default class DisplayTradeComponent extends Component {
 
    constructor(){
 
        super();
       
        this.state = { editComponent:false}
         
    }
    deleteTrade(){
        console.log("inside Delete")
    }
    editTrade(){
        console.log("inside edit")
        //this.props.handleCallbackedid(true);
        this.setState({
            editComponent: true,
          });

    }
    
 
    render() {
        
 
        return (
            <div>
            
           
           
        <form className="postStyle">
                {/* Trade Date  : <p>{this.state.trade.TradeDate}</p> <br />
                Commodity   : <p>{this.state.trade.Commodity}</p> <br />
                Side        : <p>{this.state.trade.Side}</p> <br />
                CounterParty: <p>{this.state.trade.CounterParty}</p> <br />
                Price       : <p>{this.state.trade.Price}</p> <br />
                Quantity    : <p>{this.state.trade.Quantity}</p> <br />
                Location    : <p>{this.state.trade.Location}</p> <br />  */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-trash" onClick={this.deleteTrade.bind(this)}></span> 
                </button> &nbsp;          
                <button type="button" className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-pencil" onClick={this.editTrade.bind(this)}></span> 
                </button>
                <h2>Trade ID : {this.props.trade.tradeid}</h2>
                Trade&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;:{this.props.trade.Tradedate} <br />
                Commodity&nbsp;&nbsp;&nbsp;: {this.props.trade.Commodity}<br />
                Side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{this.props.trade.Side} <br />
                CounterParty : <p>{this.props.trade.Counterparty}</p> <br />
                Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{this.props.trade.price} <br />
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.props.trade.Qty}<br />
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {this.props.trade.Location} <br /><br/>
                            
               
                
            </form>
            {this.state.editComponent ?
      <EditTradeComponent
      trade={this.props.trade}/> :
      null
   }
            </div>
    


            
 
            
           
        
 
        );
 
    }
 
}