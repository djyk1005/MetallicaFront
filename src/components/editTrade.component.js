import React, { Component }
    from 'react';



export default class EditTradeComponent extends Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            date: date,
            Side:'',
            location: [],
            commodity:[],
            counterParty:[]
           

        };
        this.handleChange = this.handleChange.bind(this);     

        this.commodityName = React.createRef();
        this.counterPartyName = React.createRef();
        this.Price = React.createRef();
        this.quantityName = React.createRef();
        this.locationName = React.createRef();          

    }

    componentDidMount() {
        fetch('http://localhost:8082/locations')
        .then(res => res.json())
        .then(data=> {
            this.setState({location: data});
        });
        fetch('http://localhost:8082/commodities')
        .then(res => res.json())
        .then(data=> {
            this.setState({commodity: data});
        });
        fetch('http://localhost:8082/counterparties')
        .then(res => res.json())
        .then(data=> {
            this.setState({counterParty: data});
        });
    } 

    handleChange(event) {
        this.setState({
          Side: event.target.value
        });
      }
      saveTrade(){
        let side = this.state.Side
          fetch('http://localhost:8084/edit', {
            method: 'PUT',
            body: JSON.stringify({
                id:this.props.trade.id,
                date:this.state.date, 
                commodity:this.commodityName.current.value,
                counterParty:this.counterPartyName.current.value, 
                price:this.Price.current.value,
                quantity:this.quantityName.current.value,
                location:this.locationName.current.value,
                side:(side === "")?this.props.trade.side:side
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }).then(res=> {
            if(res.status === 200){
                fetch('http://localhost:8084/findAll')
                .then(res => res.json())
                .then(data=> {
                    this.props.handleCallback(data); 
                });
            }
           
        })
          
      }
      cancelTrade(){
          console.log("inside cancel trade");
      }
      createCommodityItems() {
        let items = [];     
        for (let i = 0; i < this.state.commodity.length; i++) {    
            if(this.props.trade.commodity === this.state.commodity[i].name){
                items.push(<option selected ={true} key={i} value={this.state.commodity[i].name}>{this.state.commodity[i].name}</option>);   
             } else{
                items.push(<option key={i} value={this.state.commodity[i].name}>{this.state.commodity[i].name}</option>);      
             }            
             
            
        }
        return items;
    }  
   
   onDropdownSelected(e) {
       console.log("THE VAL", e.target.value);
      
   }
   createLocationItems() {
    let items = [];         
    for (let i = 0; i < this.state.location.length; i++) { 
        if(this.props.trade.location === this.state.location[i].name){
            items.push(<option selected = {true} key={i} value={this.state.location[i].name}>{this.state.location[i].name}</option>); 
         } else{
            items.push(<option key={i} value={this.state.location[i].name}>{this.state.location[i].name}</option>);    
         }     
           
        
    }
    return items;
}  
createCounterPartyItems() {
    let items = [];         
    for (let i = 0; i <this.state.counterParty.length; i++) { 
         if(this.props.trade.counterParty === this.state.counterParty[i].id){
            items.push(<option selected={true} key={i} value={this.state.counterParty[i].id}>{this.state.counterParty[i].id}</option>);
         } else{
            items.push(<option key={i} value={this.state.counterParty[i].id}>{this.state.counterParty[i].id}</option>);   
         }
    }
    return items;
}  

    

    render() {

        return (

            <form className="postStyle">
                  
                <h2>Edit Trade TID: {this.props.trade.id}</h2>
                Trade&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.tradedate} value={this.props.trade.date} /> <br />
                Commodity&nbsp;&nbsp;&nbsp;: <select ref={this.commodityName} name="Commodity" id="wgtmsr"  onChange={this.onDropdownSelected}  >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select> <br />
                Side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 
                <label><input  type="radio" name="Buy" value ="BUY" checked={this.state.Side === "BUY"} onChange={this.handleChange}  />Buy</label>
                <label> <input  type="radio" name="Sell" value="SELL" checked={this.state.Side === "SELL"} onChange={this.handleChange} />Sell</label> <br />
                CounterParty : <select ref={this.counterPartyName} onChange={this.onDropdownSelected}>
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select> <br />
                Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.Price}  defaultValue={this.props.trade.price}  type="text" /> <br />
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.quantityName}  defaultValue={this.props.trade.quantity} type="text"/> <br />
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <select ref={this.locationName}  onChange={this.onDropdownSelected} >
                            <option ></option>
                            {this.createLocationItems()}                                     
                            </select> <br /><br/>
                <input type="button" value="Save" onClick={this.saveTrade.bind(this)}/>
                 <input type="button" value="Cancel" onClick={this.cancelTrade.bind(this)} />
            </form>
            
 
 

            

        );

    }

}




