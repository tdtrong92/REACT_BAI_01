import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        srcImg: "./img/car/products/black-car.jpg"
    }

    changeColor = (newColor) => {
        this.setState({
            srcImg: `./img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4"> Bài tập chọn xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImg} className="w-100" />
                    </div>
                    <div className="col-6">
                        <div className="row" >
                            <div className="col-3">
                                <button style={{ backgroundColor: "black", cursor: "pointer", color: "white" }}
                                    onClick={() => {
                                        this.changeColor("black");
                                    }}>Black car</button>
                            </div>

                            <div className="col-3">
                                <button style={{ backgroundColor: "red", cursor: "pointer" }}
                                    onClick={() => {
                                        this.changeColor("red");
                                    }}>Red car</button>
                            </div>

                            <div className="col-3">
                                <button style={{ backgroundColor: "gray", cursor: "pointer" }}
                                    onClick={() => {
                                        this.changeColor("steel");
                                    }}>Gray car</button>
                            </div>

                            <div className="col-3">
                                <button style={{ backgroundColor: "silver", cursor: "pointer" }}
                                    onClick={() => {
                                        this.changeColor("silver");
                                    }}>Silver car</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
