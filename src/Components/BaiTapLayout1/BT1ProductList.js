import React, { Component } from 'react'
import BT1Product from './BT1Product'

export default class BT1ProductList extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="col-3">
                        <BT1Product></BT1Product>
                    </div>
                    <div className="col-3">
                        <BT1Product></BT1Product>
                    </div>
                    <div className="col-3">
                        <BT1Product></BT1Product>
                    </div>
                    <div className="col-3">
                        <BT1Product></BT1Product>
                    </div>
                </div>
            </div>
        )
    }
}
