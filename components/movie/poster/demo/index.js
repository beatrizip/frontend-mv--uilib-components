import MoviePoster from 'components/movie/poster/src'

const path = 'https://image.tmdb.org/t/p/w500/dfYOmisdbiVTXdcQji35pKywPFI.jpg'

export default () => {
  return (
    <>
      <span style={{width: '500px'}}>
        <h2>OK path</h2>
        <MoviePoster path={path} />
      </span>
      <span style={{width: '500px'}}>
        <h2>Broken path</h2>
        <MoviePoster path="https://image.tmdb.org/t/p/w500/ble.jpg" />
      </span>
    </>
  )
}
