import React, { Component } from 'react';
import StockDetails from './stock.details.components';
import Marquee from 'react-smooth-marquee';
//import axios from 'axios';

export default class MarketDetails extends Component {
    constructor(){
        super();
        this.state={mydata: [{"identifier":"ID1","price":"1000"},{"identifier":"ID2","price":"2000"},{"identifier":"ID1","price":"1000"},{"identifier":"ID2","price":"2000"},{"identifier":"ID1","price":"1000"},{"identifier":"ID2","price":"2000"},{"identifier":"ID1","price":"1000"},{"identifier":"ID2","price":"2000"}]}
        // axios.post('http://localhost:8080/marketdata/data');
        // var request = axios.get('http://localhost:8080/marketdata/data');

    }
    // fetchMarketData(){
    //     // fetch('url for fetching market vdata')
    //     //     .then(res => res.json())
    //     //     .then(data=> {
    //     //         this.setState({mydata: data});
    //     //     });

    // }
    //  componentDidMount() {
    //     this.fetchMarketData.bind(this);
    //     setInterval(this.fetchMarketData, 10000);
        


    //  }
     


 
 



    render() {
        var marketDataList = this.state.mydata.map(
            (p, i) => {
                return <StockDetails
                    key={i}
                    index={i}
                    stockData={p}
                    {...this.props} />
            }
        )

        console.log(marketDataList);

        return <div className='simple-marquee-container'>
        
        <div className='marquee'>
                <Marquee>
                    <ul className='marquee-content-items'>
                    {marketDataList}
                        </ul>
                    </Marquee>
                    
                    </div>
        </div>
    }


}