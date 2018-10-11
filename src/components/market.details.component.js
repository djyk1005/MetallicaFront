import React, { Component } from 'react';
import StockDetails from './stock.details.components';
import Marquee from 'react-smooth-marquee';

export default class MarketDetails extends Component {
    constructor(){
        super();
        this.state={mydata: []}

    }
    
    fetchMarketData(){
        fetch('http://localhost:8083/data')
            .then(res => res.json())
            .then(data=> {
                this.setState({mydata: data});
            });

    }
     componentDidMount() {
        fetch('http://localhost:8083/data', {
            method: 'POST'
            });
        this.fetchMarketData();
        setInterval(this.fetchMarketData.bind(this), 10000);
        

     }
     

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