import React from "react";
import './FeaturedMovie.css'




export default ({ item }) => {

  let fisrtDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name)
  }


  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }} >
      <div className="featuredVert">
        <div className="featuredHor">
          < div className="featuredName">{item.original_name}</div>
          <div className="featured--info">
            <div className="featuredPoints"> {item.vote_average} Pontos</div>
            <div className="featuredYear">{fisrtDate.getFullYear()}</div>
            <div className="featuredSeasons">{item.number_of_seasons} Temporadas{item.number_of_seasons == 1 ? '' : 's'}</div>
          </div>
          <div className="featuredDesc">{item.overview}</div>
          <div className="featuredButtons">
            <a className="featuredWatch" href={`/watch/${item.id}`}>Assistir</a>
            <a className="featuredList" href={`/list/add/${item.id}`} >+ Minha lista</a>
          </div>
          <div className="featuredGenres">
            <strong>
              Gêneros:
            </strong>
            {genres.join(', ')}
          </div>
        </div>
      </div>

    </section>
  )
}

