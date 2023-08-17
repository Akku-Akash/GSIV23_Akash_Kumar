import axios from "axios"
const api_key = '964cc6de87e0a70af6ec6bc132f2427c'
const language = 'en-US'
export const MoviesData = async () => {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        return data
    } catch (error) {
        console.log(error)
    }
}