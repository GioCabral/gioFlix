import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import MovieRow from "./components/movieRow";
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie";

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([null])

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list)

      //pegar destaque

      // let originals = list.filter(f=> f.slug === 'originals')
      // let randomChosen = math.floor(Math.random() * (originals.items.results.length -1) )
      // let chosen = originals[0].items.results[randomChosen]
    }
    loadAll()
  }, []);


  return (
    <div className="page">
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key) =>
          <MovieRow key={key} title={item.title} items={item.items} />
        )}
      </section>

    </div>

  )

}