import React, { Component } from 'react';

 

export default class SearchComponent extends Component {

    constructor() {
 
        super();
     
        this.state = {
          location: ["location 1","location2","location3" ,"locatsjidu"],
          commodity:["com1","com2","com3"],
          counterParty:["counter1","counter2"]
     
        };
        this.startDate = React.createRef();
       this.endDate = React.createRef();
        this.commodityName = React.createRef();
        this.buyVal = React.createRef();
        this.sellVal = React.createRef();
        this.counterPartyName=React.createRef();  
        this.locationName=React.createRef();
     
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
    cleardata(e){
        e.preventDefault();
        console.log("inside clear")
        document.getElementById("search_entry").reset();

    }

    searchdata(e){
        e.preventDefault();
        console.log("inside search");


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
        <form id="search_entry" action="#">

            <div class="container-fluid">

                <div class="panel panel-default">

                    <div class="panel-body">

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

                                    <select ref={this.commodityName} name="Commodity" id="wgtmsr"  onChange={this.onDropdownSelected} >
                                    <option ></option>
                                     {this.createCommodityItems()}                                     
                                     </select>
                                    

                                </div>

                            </div>

                            <div className="col-lg-2">

                                Side

                                <div>

                                    <label class="checkbox-inline">

                                        <input ref={this.buyVal} type="checkbox" value=""  />Buy

                                    </label>

                                    <label class="checkbox-inline">

                                        <input ref={this.sellVal} type="checkbox" value="" />Sell

                                     </label>

                                </div>

                            </div>

 

                            <div className="col-lg-2">

                                Counterparty

                        <div >

                            <select ref={this.counterPartyName} onChange={this.onDropdownSelected}>
                            <option ></option>

                            {this.createCounterPartyItems()}                                     
                            </select>
                            

                        </div>

                            </div>

                            <div className="col-lg-2">

                                Location

                             <div >

                            <select ref={this.locationName} onChange={this.onDropdownSelected} >
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









        );

    }

}