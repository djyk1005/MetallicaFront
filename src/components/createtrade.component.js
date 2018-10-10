import React, { Component }
    from 'react';



export default class CreateTradeComponent extends Component {
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
       // this.SideName=React.createRef();             


    }
    
    handleChange(event) {
        this.setState({
          Side: event.target.value
        });
      }
      saveTrade(){
          fetch('http://localhost:8080/api/saveTrade', {
            method: 'POST',
            body: JSON.stringify({TradeDate:this.state.date, commodity:this.commodityName.current.value,
                 counterParty:this.counterPartyName.current.value, price:this.Price.current.value,
                 quantity:this.quantityName.current.value,location:this.locationName.current.value,side:this.state.Side}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        }).then(res=> {
            if(res.status == 200){
                this.setState({message: 'Successfully created!!'})
            }
           
        })
          
      }
      cancelTrade(){
          console.log("inside cancel trade");
      }
      createCommodityItems() {
        let items = [];         
        for (let i = 0; i < this.state.commodity.length; i++) { 
             items.push(<option key={i} value={this.state.commodity[i].name}>{this.state.commodity[i].name}</option>);   
            
        }
        return items;
    }  
   

   createLocationItems() {
    let items = [];         
    for (let i = 0; i < this.state.location.length; i++) { 
                  
         items.push(<option key={i} value={this.state.location[i].name}>{this.state.location[i].name}</option>);   
        
    }
    return items;
}  
createCounterPartyItems() {
    let items = [];         
    for (let i = 0; i <this.state.counterParty.length; i++) { 
             
         items.push(<option key={i} value={this.state.counterParty[i].id}>{this.state.counterParty[i].id}</option>);   
      
    }
    return items;
} 
  componentDidMount() {
        fetch('http://localhost:8083/locations')
        .then(res => res.json())
        .then(data=> {
            this.setState({location: data});
        });
        fetch('http://localhost:8083/commodities')
        .then(res => res.json())
        .then(data=> {
            this.setState({commodity: data});
        });
        fetch('http://localhost:8083/counterparties')
        .then(res => res.json())
        .then(data=> {
            this.setState({counterParty: data});
        });
    } 

    

    render() {

        return (

            <form className="postStyle">
                  
                <h3>Create New Trade</h3>
                Trade&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.tradedate} value={this.state.date} /> <br />
                Commodity&nbsp;&nbsp;&nbsp;: <select ref={this.commodityName} name="Commodity" id="wgtmsr"   >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select> <br />
                Side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <label><input  type="radio" name="Buy" value ="Buy" checked={this.state.Side === "Buy"} onChange={this.handleChange}  />Buy</label><label> <input  type="radio" name="Sell" value="Sell" checked={this.state.Side === "Sell"} onChange={this.handleChange} />Sell</label> <br />
                CounterParty : <select ref={this.counterPartyName} >
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select> <br />
                Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.Price} type="text" /> <br />
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.quantityName} type="text" /> <br />
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <select ref={this.locationName}  >
                            <option ></option>
                            {this.createLocationItems()}                                     
                            </select> <br /><br/>
                <input type="button" value="Save" onClick={this.saveTrade.bind(this)}/>
                 <input type="button" value="Cancel" onClick={this.cancelTrade.bind(this)} />
            </form>
            
 
 

            

        );

    }

}




