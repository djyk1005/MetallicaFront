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
            location: ["location 1","location2","location3" ,"locatsjidu"],
          commodity:["com1","com2","com3"],
          counterParty:["counter1","counter2"]
           

        };
        this.handleChange = this.handleChange.bind(this);     

        this.commodityName = React.createRef();
       this.counterPartyName = React.createRef();
        this.Price = React.createRef();
        this.quantityName = React.createRef();
        this.locationName = React.createRef();
       // this.SideName=React.createRef();             

        console.log(this.state.Side);

    }
    
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
          Side: event.target.value
        });
      }
      saveTrade(){
          console.log(this.commodityName.current.value);
          console.log(this.counterPartyName.current.value);
          console.log(this.Price.current.value);
          console.log(this.quantityName.current.value);
          console.log(this.locationName.current.value);
          console.log(this.state.Side);
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
            console.log(res.status)
            if(res.status == 200){
                this.setState({message: 'Successfully created!!'})
                console.log('Successfully created!!')
            }
           
        })
          
      }
      cancelTrade(){
          console.log("inside cancel trade");
      }
      createCommodityItems() {
        console.log("inside create")
        let items = [];         
        for (let i = 0; i < this.state.commodity.length; i++) { 
            console.log(this.state.commodity[i]);            
             items.push(<option key={i} value={this.state.commodity[i]}>{this.state.commodity[i]}</option>);   
            
        }
        return items;
    }  
   
   onDropdownSelected(e) {
       console.log("THE VAL", e.target.value);
      
   }
   createLocationItems() {
    console.log("inside create")
    let items = [];         
    for (let i = 0; i < this.state.location.length; i++) { 
                  
         items.push(<option key={i} value={this.state.location[i]}>{this.state.location[i]}</option>);   
        
    }
    return items;
}  
createCounterPartyItems() {
    console.log("inside create")
    let items = [];         
    for (let i = 0; i <this.state.counterParty.length; i++) { 
             
         items.push(<option key={i} value={this.state.counterParty[i]}>{this.state.counterParty[i]}</option>);   
      
    }
    return items;
} 
//   componentDidMount() {
    //     fetch('url for location')
    //     .then(res => res.json())
    //     .then(data=> {
    //         this.setState({location: data});
    //     });
    //     fetch('url for commodity')
    //     .then(res => res.json())
    //     .then(data=> {
    //         this.setState({commodity: data});
    //     });
    //     fetch('url for counterparty')
    //     .then(res => res.json())
    //     .then(data=> {
    //         this.setState({counterParty: data});
    //     });


    // } 

    

    render() {

        return (

            <form className="postStyle">
                  
                <h2>Create New Trade</h2>
                Trade&nbsp;Date&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.tradedate} value={this.state.date} /> <br />
                Commodity&nbsp;&nbsp;&nbsp;: <select ref={this.commodityName} name="Commodity" id="wgtmsr"  onChange={this.onDropdownSelected} >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select> <br />
                Side&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <label><input  type="radio" name="Buy" value ="Buy" checked={this.state.Side === "Buy"} onChange={this.handleChange}  />Buy</label><label> <input  type="radio" name="Sell" value="Sell" checked={this.state.Side === "Sell"} onChange={this.handleChange} />Sell</label> <br />
                CounterParty : <select ref={this.counterPartyName} onChange={this.onDropdownSelected}>
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select> <br />
                Price&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.Price} type="text" /> <br />
                Quantity&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <input ref={this.quantityName} type="text" /> <br />
                Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <select ref={this.locationName} onChange={this.onDropdownSelected} >
                            <option ></option>
                            {this.createLocationItems()}                                     
                            </select> <br /><br/>
                <input type="button" value="Save" onClick={this.saveTrade.bind(this)}/>
                 <input type="button" value="Cancel" onClick={this.cancelTrade.bind(this)} />
            </form>
            
 
 

            

        );

    }

}




