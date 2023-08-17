import React from 'react'
import styles from "./cart.module.css"
import { useNavigate } from 'react-router-dom'
function Cart({ detail }) {
    const navigate = useNavigate()
    let data = {
        image: `https://image.tmdb.org/t/p/original/${detail.poster_path}`,
        title: detail?.title,
        description: detail?.overview,
        rating: detail?.vote_average
    }
    return (
        <div className={styles.main} onClick={() => {
            navigate("/details", {
                state: detail
            }
            )
        }}>
            <div className={styles.image}>
                <img src={data.image} alt="" />
            </div>
            <div>
                <div className={styles.text}>
                    <h3>{data.title}</h3>

                    <h3>{data.rating}</h3>
                </div>
                <p>{data.description.slice(0, 40)}</p>
            </div>
        </div>
    )
}

export default Cart
