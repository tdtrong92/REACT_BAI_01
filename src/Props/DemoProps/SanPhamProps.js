import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {

        // this.props dùng để nhận giá trị từ component cha truyền vào
        // this.props ko gán lại giá trị được
        // Viết kiểu es5
        let sp = this.props.sp;
        // Viết kiểu es6
        // let {sp} =this.props
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sp.img} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sp.name}</h4>
                        <p className="card-text">{sp.price}</p>
                    </div>
                </div>

            </div>
        )
    }
}
