import React,{Component} from 'react';
import Marquee from 'react-smooth-marquee';

export default class StockDetails extends Component{
    render() {
          return <li>{this.props.stockData.name} 
              <span style={{color:(this.props.stockData.positive)?'#01FE9E': '#FE6A6C'}}>
              &nbsp;&nbsp;&nbsp;{this.props.stockData.price}</span></li> 

  
      }




}