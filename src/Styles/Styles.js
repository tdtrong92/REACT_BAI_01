import React, { Component } from 'react'

// cách 1: import đường dẫn css từ file component
// import "./styles.css";

//cách 2: import css tại component
import styles from "./styles.module.css"

export default class Styles extends Component {
    render() {
        return (

            <div>
                <div className="container">
                    <p className="text-red">Cybersoft</p>

                    <p className={styles.textGreen}>ahihi cách 1</p>
                    <p className={styles["textGreen"]}>ahihi cách 2</p>
                    <p className={`${styles["textGreen"]} ${styles["bg-black"]} display-4`}>ahihi nhìu hơn 1 class</p>


                    <section style={{
                        backgroundColor: "white",
                        color: "green",
                    }}>component chỉ ảnh hưởng trên 1 thẻ</section>
                </div>
            </div>
        )
    }
}
