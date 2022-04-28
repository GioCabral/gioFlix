const key = 'd453c77723ee09ed11d4a2036525125e';
const base = 'https://api.themoviedb.org/3'

const basicFetch = async (endpoint) => {
  const req = await fetch(`${base}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'comedy',
        title: 'comédia',
        items: await basicFetch(`/discover/movie?with_genres=35?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749?language=pt-BR&api_key=${key}`)
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await basicFetch(`/discover/movie?with_genres=99?language=pt-BR&api_key=${key}`)
      }

    ]
  }
}