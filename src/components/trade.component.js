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

<td scope="col"> {this.props.postData.date}</td>
<td>{this.props.postData.commodity}</td>
<td>{this.props.postData.side}</td>
<td>{this.props.postData.quantity}</td>
<td>{this.props.postData.price}</td>
<td>{this.props.postData.counterParty}</td>
<td>{this.props.postData.location}</td>
<td>{this.props.postData.status}</td>
<Popup
trigger={<button className="button"> View Trade </button>}
modal>
{/* // closeOnDocumentClick */}
<form >
<span>
<h1> TRADE ID:{this.props.postData.id} </h1>
Trade Date : {this.props.postData.date} <br />
Commodity : {this.props.postData.commodity} <br />
Side : {this.props.postData.side} <br />
CounterParty: {this.props.postData.counterParty} <br />
Price : {this.props.postData.price} <br />
Quantity : {this.props.postData.quantity} <br />
Location : {this.props.postData.location} <br /> 

</span>
</form> 
<Popup
trigger={<button type="button" className="btn" onClick={this._onButtonClick} > Edit </button>}
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