import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {
    productList = [
        { id: 1, name: "iphone X1", price: 1000, img: "http://picsum.photos/100/100" },
        { id: 2, name: "iphone X2", price: 2000, img: "http://picsum.photos/100/100" },
        { id: 3, name: "iphone X3", price: 3000, img: "http://picsum.photos/100/100" }
    ]

    renderSanPham = () => {
        return this.productList.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps sp={sanPham} />
            </div>
        })
    }

    // componet sử dụng thẻ được gọi là component cha, thẻ dc sử dụng là component con
    render() {
        return (
            <div className="container mt-5">
                <div className="row">

                    {this.renderSanPham()}

                </div>
            </div>
        )
    }
}
