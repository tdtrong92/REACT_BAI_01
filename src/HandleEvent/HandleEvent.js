import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert("Hello Trọng truyền function được định nghĩa ở trên");
    }
    showMess = (name) => {
        alert(`Hello ${name} `);
    }
    render() {
        return (
            <div>
                <button id="btnClick" onClick={this.handleClick}>Click me cách 1</button>
                <button id="btnClick" onClick={() => {
                    alert("Hello Trọng truyền function nặc danh");
                }}>Click me cách 2</button>

                <button className="btn btn-success mt-2" onClick={() => {
                    this.showMess("Trọng thống nhất xài cách này, gọi dc nhìu hàm");
                    this.showMess("Trọng 1");
                    this.showMess("Trọng 2");
                }}>Show Message</button>
            </div>
        )
    }
}
