import PropTypes from 'prop-types'
import AtomTag, {atomTagDesigns} from '@s-ui/react-atom-tag'
import AtomBadge, {atomBadgeTypes, atomBadgeSizes} from '@s-ui/react-atom-badge'
import MoviePoster from '../../poster/src'

const CLASS_BASE = 'mv-Detail'

export default function Detail({movie}) {
  // import PropTypes from 'prop-types'
  return (
    <div className={CLASS_BASE}>
      <h1 className={`${CLASS_BASE}-title`}>{movie.title}</h1>

      <div className={`${CLASS_BASE}-content`}>
        <div className={`${CLASS_BASE}-image`}>
          <MoviePoster path={movie.poster} />
        </div>
        <div className={`${CLASS_BASE}-info`}>
          <div className={`${CLASS_BASE}-resume`}>{movie.overview}</div>

          <div className={`${CLASS_BASE}-section`}>
            <div className={`${CLASS_BASE}-titleSection`}>Genres</div>

            {movie.genres.map((genre, index) => {
              return (
                <AtomTag
                  key={index}
                  label={genre.name}
                  design={atomTagDesigns.OUTLINE}
                />
              )
            })}
          </div>

          <div className={`${CLASS_BASE}-section`}>
            <div className={`${CLASS_BASE}-titleSection`}>Vote average</div>
            <AtomBadge
              size={atomBadgeSizes.LARGE}
              type={atomBadgeTypes.INFO}
              label={`${movie.rating}`}
            />
            <span className={`${CLASS_BASE}-vote`}>
              ({movie.voteCount} Votes)
            </span>
          </div>

          <div className={`${CLASS_BASE}-section`}>
            <div className={`${CLASS_BASE}-titleSection`}>Web</div>
            <a href={movie.homepage} target="_blank" rel="noreferrer">
              {movie.homepage}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Detail.displayName = 'Detail'
Detail.propTypes = {
  movie: PropTypes.node.isRequired
}
