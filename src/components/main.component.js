import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MainComponent extends Component {
    componentDidMount() {
        this.props.FetchMarketData();
        setInterval(this.props.FetchMarketData, 10000);
    }


    render() {
        return <div>
            {React.cloneElement(this.props.children, this.props)}


        </div>

    }


}