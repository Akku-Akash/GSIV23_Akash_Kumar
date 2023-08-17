import React, { useState } from 'react'
import styles from "./header.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { AiFillHome } from "react-icons/ai"
import { useLocation, useNavigate } from 'react-router-dom';
function Header({setSearch}) {
  // const [search, setSearch] = useState("");
  const location = useLocation().pathname
  const navigate = useNavigate()


  return (
    <div>
      <div className={styles.main}>
        {location !== "/details" ? <div className={styles.searchbar}>
          <p>
            <SearchIcon style={{ color: "black", width: "50", height: "40" }} />
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            // value={search}
          />
          <br />
        </div> : <div><h3>Movie Details</h3></div>}
        <div className={styles.home} onClick={()=> navigate("/")}>
          <AiFillHome size={30} />
        </div>
      </div>
    </div>
  )
}

export default Header
