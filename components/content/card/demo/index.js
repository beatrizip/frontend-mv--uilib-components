import PropTypes from 'prop-types'
import Card from 'components/content/card/src'
import MoviePoster from '../../../movie/poster/src'

const RESPONSE = {
  id: 634649,
  title: 'Spider-Man: No Way Home',
  rating: 8.7,
  genres: [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'}
  ],
  voteCount: 1490,
  overview:
    'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
  poster: `https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`,
  homepage: 'https://www.spidermannowayhome.movie'
}

const Content = ({title, text}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

Content.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}

export default () => (
  <Card
    media={<MoviePoster path={RESPONSE.poster} />}
    content={<Content title={RESPONSE.title} text={RESPONSE.overview} />}
  />
)
