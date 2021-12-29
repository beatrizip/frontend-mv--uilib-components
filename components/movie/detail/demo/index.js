import ContentDetail from 'components/content/detail/src'

const RESPONSE = {
  adult: false,
  backdrop_path: '/oQYpa1TKJRR58IrFGhppi9vL7PC.jpg',
  belongs_to_collection: {
    id: 151,
    name: 'Star Trek: La serie original - Colección',
    poster_path: '/eNzMNttF06ndvLqOdHOqSB66TBe.jpg',
    backdrop_path: '/9BQj9hq0aK6yM9Tm2NJ28jg572y.jpg'
  },
  budget: 35000000,
  genres: [
    {id: 878, name: 'Ciencia ficción'},
    {id: 12, name: 'Aventura'},
    {id: 9648, name: 'Misterio'}
  ],
  homepage: '',
  id: 152,
  imdb_id: 'tt0079945',
  original_language: 'en',
  original_title: 'Star Trek: The Motion Picture',
  overview:
    'Siglo XXIII. Al almirante James T. Kirk, de la nave Enterprise, se le encomienda una difícil misión: neutralizar un extraño cuerpo para que no colisione con su objetivo, la Tierra, y que desencandene una terrible catástrofe. El oficial Spock, el capitán Willard Decker, la asesora Ilia y el doctor McCoy ayudan al almirante Kirk a descubrir la naturaleza de este cuerpo sideral, provisto de un mecanismo de inteligencia de origen terrestre. La expedición del Enterprise localiza al ente y, entonces, se apresta a introducirse en su centro de operaciones... Primera entrega cinematográfica de la popular serie fantástica creada por Gene Roddenberry.',
  popularity: 18.936,
  poster_path: '/zvrs4RU6zSFzcRWdqZFWsGUAsOS.jpg',
  production_companies: [
    {
      id: 4,
      logo_path: '/fycMZt242LVjagMByZOLUGbCvv3.png',
      name: 'Paramount',
      origin_country: 'US'
    }
  ],
  production_countries: [{iso_3166_1: 'US', name: 'United States of America'}],
  release_date: '1979-12-07',
  revenue: 139000000,
  runtime: 131,
  spoken_languages: [
    {english_name: 'English', iso_639_1: 'en', name: 'English'}
  ],
  status: 'Released',
  tagline: 'La aventura humana apenas comienza.',
  title: 'Star Trek: La película',
  video: false,
  vote_average: 6.5,
  vote_count: 1240
}

export default () => (
  <ContentDetail
    title={RESPONSE.title}
    overview={RESPONSE.overview}
    voteAverage={RESPONSE.vote_average}
    image={RESPONSE.poster_path}
    tags={RESPONSE.genres}
  />
)