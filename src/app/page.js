import FilmList from "@/app/components/FilmList"
import {data} from "autoprefixer"
const Home = async() => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const anime = await response.json()

    console.log()
    return (
        <div>
            <h1 className="font-extrabold text-6xl p-6">Paling Populer</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-white font-semibold">
                {anime.data.map(data => {
                    return (
                        <div key={data.mal_id} className="shadow-xl">
                        <FilmList title = {data.title} images= {data.images.webp.image_url}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;  
