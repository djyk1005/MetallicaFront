import React ,{Component} from 'react';
import DisplayTradeComponent from './displaytrade.component';
import Popup from 'reactjs-popup';
import EditTradeComponent from './editTrade.component'


export default class TradeComponent extends Component{
    // display(){
    //     <DisplayTradeComponent/>
    // }
    // constructor(props) {
    //     super(props);
        
    //     this._onButtonClick = this._onButtonClick.bind(this);
    //   }
    // _onButtonClick() {
    //     this.props.handleCallback(true,this.props.postData);
       
      
    //   }
   
constructor(props) {
super(props);
this.state = {
showComponent: false,
};
this._onButtonClick = this._onButtonClick.bind(this);
}
_onButtonClick() {
this.setState({
showComponent: true,
});
} 
 

    

render(){
return( 
   
    
<tr onClick={this._onButtonClick.bind(this)} >

<td scope="col"> {this.props.postData.Tradedate}</td>
<td>{this.props.postData.Commodity}</td>
<td>{this.props.postData.Side}</td>
<td>{this.props.postData.Qty}</td>
<td>{this.props.postData.price}</td>
<td>{this.props.postData.Counterparty}</td>
<td>{this.props.postData.Location}</td>
<td>{this.props.postData.TradeStatus}</td>
<Popup
trigger={<button className="button"> View Trade </button>}
modal>
{/* // closeOnDocumentClick */}
<form >
<span>
<h1> TRADE ID: </h1>
Trade Date : {this.props.postData.Tradedate} <br />
Commodity : {this.props.postData.Commodity} <br />
Side : {this.props.postData.Side} <br />
CounterParty: {this.props.postData.Counterparty} <br />
Price : {this.props.postData.price} <br />
Quantity : {this.props.postData.Qty} <br />
Location : {this.props.postData.Location} <br /> 

</span>
</form> 
<Popup
trigger={<button type="button" class="btn" onClick={this._onButtonClick} > Edit </button>}
modal>

<EditTradeComponent
trade={this.props.postData}
></EditTradeComponent>

</Popup> 
</Popup> 



</tr>

 
 
 
)

}
}  