import React from 'react'
import Cart from '../../components/Cart/Cart'
import styles from "./home.module.css"
function Landing({data}) {
    console.log("check", data)
    let arr = [1, 2, 3, 4, 5,7,8]
    return (
        <div className={styles.landing}>
            {data && data.map((el) => {
                return <Cart detail = {el}/>
            })}
        </div>
    )
}

export default Landing
