import React ,{Component} from 'react';
import TradeComponent from './trade.component';

export default class AlbumComponent extends Component{
    render(){
        console.log(this.props.mytrades);
       // console.log(this.props.mycomments);
    var tradesToBeCreated = this.props.trades.map(
        (p,i)=>{
        //    return <li>key={p.id} postData={p.caption}</li>
           return <Trade
            postData={p}
            index={i}
            key={p.id} 
            {...this.props}
           />
        })
    console.log(tradesToBeCreated)
        
        return <div><h1> List Of Users</h1>
                <ul>{postsToBeCreated}</ul>
             
                </div>
    }
}
