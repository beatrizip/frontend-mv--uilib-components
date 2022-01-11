import ContentDetail from 'components/movie/detail/src'

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

export default () => <ContentDetail movie={RESPONSE} />
