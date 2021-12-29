import PropTypes from 'prop-types'

export default function MovieInfo({title, text}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}

MovieInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
}
