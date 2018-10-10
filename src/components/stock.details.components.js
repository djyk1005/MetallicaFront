import React,{Component} from 'react';
import Marquee from 'react-smooth-marquee';

export default class StockDetails extends Component{
    render() {
          return <li>{this.props.stockData.identifier} {this.props.stockData.price}</li> 
  
      }




}