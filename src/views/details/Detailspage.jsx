import React from 'react'
import styles from "./details.module.css"
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
function Detailspage() {
    const location = useLocation().state;
    let data = {
        image: `https://image.tmdb.org/t/p/original/${location.poster_path}`,
        title: location?.title,
        description: location?.overview,
        rating: location?.vote_average,
        
    }
    console.log("detailed", data, location)
    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.imageBox}>
                    <img src={data?.image  || "https://tse4.explicit.bing.net/th?id=OIP.KBXDNW0nNrPYyNYjqzNBMQHaLH&pid=Api&P=0&h=180"} alt="" />
                </div>
                <div className={styles.details}>
                    <h3>{data?.title} ({data.rating})</h3>
                    <p>Year | Length | Director</p>
                    <p>Cast : Actor 1, Actor 2, ..</p>
                    <p>Description : {data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Detailspage
