import React, { Component } from 'react';
import CreateTradeComponent from './createtrade.component'
import TableOneComponent from './tableone.component';

 

export default class SearchComponent extends Component {

    constructor() {
 
        super();
     
        this.state = {
        location: [],
        commodity:[],
        counterParty:[],
        trades:[]   
        };
        this.startDate = React.createRef();
        this.endDate = React.createRef();
        this.commodityName = React.createRef();
        this.buyVal = React.createRef();
        this.sellVal = React.createRef();
        this.counterPartyName=React.createRef();  
        this.locationName=React.createRef();
     
      }
      componentDidMount() {
        fetch('http://localhost:8083/add', {
            method: 'POST'
            });
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
        fetch('http://localhost:8081/trade/findAll')
        .then(res => res.json())
        .then(data=> {
            this.setState({trades: data});
        });
        
    } 
    cleardata(e){
        e.preventDefault();
        document.getElementById("search_entry").reset();

    }

    searchdata(e){
        e.preventDefault();
        let startDate = this.startDate.current.value;
        let endDate = this.endDate.current.value;
        let comm = this.commodityName.current.value;
        let cP = this.counterPartyName.current.value; 
        let loc = this.locationName.current.value;   
        fetch('http://localhost:8081/trade/search', {
            method: 'POST',
            body: JSON.stringify({
                startDate:(startDate === "")?null:startDate,
                endDate:(endDate === "")?null:endDate, 
                comm:(comm === "")?null:comm,
                counterParty:(cP === "")?null:cP, 
                loc:(loc === "")?null:loc,
                }),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res=> res.json())
        .then(data=> {
            this.setState({trades: data});
        });
        


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
TDate() {
    var StartDate =document.getElementById("startdate").value;
    StartDate=new Date(StartDate);
    var EndDate =document.getElementById("enddate").value;
    EndDate=new Date(EndDate); 
    var date=new Date();
    if ((StartDate >=date ) ||(EndDate>=date)){
    alert("The Date must be lesser or Equal to Today's date");
    return false;
    }
    return true;
    }  

    render() {
        return (
            <div>
        <form id="search_entry" action="#">

            <div className="container-fluid">

                <div className="panel panel-default">

                    <div className="panel-body">

                        <div className="row">

                         <div className="col-lg-2">

                                Trade Date:

                                <input ref = {this.startDate} id="startdate" onChange={this.TDate} type="date" className="form-control" placeholder="Start Date"/>

                                to

                                <input ref={this.endDate}  id="enddate" onChange={this.TDate}type="date" className="form-control" placeholder="Start Date"/>

                       

                        </div>
                         <div className="col-lg-2">

                                Commodity

                            <div >

                                    <select ref={this.commodityName} name="Commodity" id="wgtmsr" >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select>
                                    

                                </div>

                            </div>

                            <div className="col-lg-2">

                                Side

                                <div>

                                    <label className="checkbox-inline">

                                        <input ref={this.buyVal} type="checkbox" value=""  />Buy

                                    </label>

                                    <label className="checkbox-inline">

                                        <input ref={this.sellVal} type="checkbox" value="" />Sell

                                     </label>

                                </div>

                            </div>

 

                            <div className="col-lg-2">

                                Counterparty

                        <div >

                            <select ref={this.counterPartyName} >
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select>
                            

                        </div>

                            </div>

                            <div className="col-lg-2">

                                Location

                             <div >

                            <select ref={this.locationName}  >
                            <option ></option>
                            {this.createLocationItems()}                                     
                            </select>
                           

                            </div>

                            </div>

                            <div className="col-lg-2">
                                <div className="">
                                <br /><br /><br /><br></br>
                                <div className="row">
                                <div className="col-md-3"></div>
                                <button className="btn btn-default" value="Reset Form" style={{ margin: "5%" }} onClick={this.cleardata.bind(this)}>Clear</button>
                                <button className="btn btn-default" onClick={this.searchdata.bind(this)}>Search</button> </div>

                                </div>
                                </div> 

                           

                        </div>

                    </div>

                </div>

            </div>

            </form>
            <div className="something">
            <TableOneComponent trades={this.state.trades}/>
            <CreateTradeComponent />
             </div>
            </div>









        );

    }

}