import React, { Component } from 'react'

export default class Databinding extends Component {
    sinhVien = {
        ma: 1,
        ten: "Nguyen Van Teo",
    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "Nguyen Van Teo",
            hinhAnh: "http://picsum.photos/100/100",
        };

        return <div className="card text-left w-25">
            <img className="card-img-top" src={sinhVien.hinhAnh} alt={sinhVien.hinhAnh} />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ten}</h4>
                <p className="card-text">Đây là card RenderSinhVien</p>
            </div>
        </div>

    }

    // Databinding là cơ chế hiển thị dữ liệu lên thành phần giao diện
    render() {
        let name = "Cybersoft";

        let product = {
            id: 1,
            name: "Iphone Xs",
            price: 1000,
            img: "http://picsum.photos/100/100"
        }

        let renderProduct = () => {
            // khi nội dung return là component thì phải được bao phủ bởi 1 thẻ 
            return <div>
                <p>{product.name}</p>
            </div>
        }
        return (
            <div>

                {this.renderSinhVien()}
                <br></br>
                <ul>
                    <li>Mã số SV:{this.sinhVien.ma}</li>
                    <li>Tên SV:{this.sinhVien.tên}</li>
                </ul>

                <p id="title">{name}</p>
                <br></br>
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>

                {renderProduct()}
            </div>
        )
    }
}
