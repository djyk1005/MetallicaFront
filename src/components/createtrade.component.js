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
        this.tradedate = React.createRef();
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
          fetch('http://localhost:8084/add', {
            method: 'POST',
            body: JSON.stringify({
                date:this.tradedate.current.value, 
                commodity:this.commodityName.current.value,
                counterParty:this.counterPartyName.current.value, 
                price:this.Price.current.value,
                quantity:this.quantityName.current.value,
                location:this.locationName.current.value,
                side:this.state.Side}),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res=> {
            if(res.status === 200){
                this.setState({message: 'Successfully created!!'})
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

    cleardata(e) {
        e.preventDefault();
        document.getElementById("createTrade").reset();
        
        } 

    render() {

        return (

            <form id="createTrade" className="postStyle">
                  
                <h3>Create New Trade</h3>
                Trade&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;: 
                <input ref = {this.tradedate} id="tradedate" type="date" className="form-control" placeholder="Start Date"/>
                {/* <input ref={this.tradedate}  /> <br /> */}
                Commodity&nbsp;&nbsp;&nbsp;: <select ref={this.commodityName} name="Commodity" id="wgtmsr"   >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select> <br />
                Side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <label><input  type="radio" name="Buy" value ="BUY" checked={this.state.Side === "BUY"} onChange={this.handleChange}  />Buy</label><label> <input  type="radio" name="Sell" value="SELL" checked={this.state.Side === "SELL"} onChange={this.handleChange} />Sell</label> <br />
                CounterParty : <select ref={this.counterPartyName} >
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select> <br />
                Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.Price} type="number" min="0" /> <br />
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.quantityName} type="number" min="0" /> <br />
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <select ref={this.locationName}  >
                            <option ></option>
                            {this.createLocationItems()}                                     
                            </select> <br /><br/>
                <button className="btn btn-default" value="Save"  onClick={this.saveTrade.bind(this)}>Save</button> 
                <button className="btn btn-default" value="Reset Form"  onClick={this.cleardata.bind(this)}>Clear</button> 
            </form>
            
 
 

            

        );

    }

}




