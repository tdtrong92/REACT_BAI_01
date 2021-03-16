import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Header from './BT1Header'
import BT1Laptop from './BT1Laptop'
import BT1ProductList from './BT1ProductList'
import BT1Promotion from './BT1Promotion'
import BT1Smartphone from './BT1Smartphone'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <BT1Header></BT1Header>
                <BT1Carousel></BT1Carousel>
                <BT1ProductList></BT1ProductList>
                {/* <BT1Smartphone></BT1Smartphone>
                <BT1Laptop></BT1Laptop> */}
                <BT1Promotion></BT1Promotion>


            </div>
        )
    }
}
