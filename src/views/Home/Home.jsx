import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Landing from './landing'
import { MoviesData } from '../../service/movie'

function Home() {

  const [data, setData] = useState();
  const [search, setSearch] = useState()
  // https://image.tmdb.org/t/p/original
  useEffect(() => {
    MoviesData().then((res) => {
      if (search) {
        const new_arr = res.data.results.filter((el) => {

          // console.log("sngle",el.title.toLowerCase())
          return el.title.toLowerCase().includes(search.toLowerCase())
        })
        // console.log("new", new_arr)
        setData(new_arr)
      } else {
        setData(res.data.results)
      }
    })
  }, [search])
  // console.log("search", search)
  return (
    <div style={{ width: "100%" }}>
      <Header setSearch={setSearch} />
      <Landing data={data} />
    </div>
  )
}

export default Home
