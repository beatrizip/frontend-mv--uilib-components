import PropTypes from 'prop-types'
import AtomImage from '@s-ui/react-atom-image'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'

const NOT_FOUND_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M21.5 15.2L15.4 4c-.7-1.2-2-2-3.4-2s-2.7.8-3.4 2L2.5 15.2c-.7 1.2-.7 2.7 0 3.9.7 1.2 2 1.9 3.4 1.9h12.2c1.4 0 2.6-.7 3.3-1.9.8-1.2.8-2.6.1-3.9zM11.2 6.8c0-.5.4-.8.8-.8s.8.3.8.8v5c0 .4-.3.8-.8.8s-.8-.3-.8-.8v-5zM12 15c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
    />
  </svg>
)

const ImageNotFoundIcon = () => {
  return (
    <AtomIcon
      color={ATOM_ICON_COLORS.currentColor}
      size={ATOM_ICON_SIZES.extraExtraLarge}
    >
      {NOT_FOUND_ICON}
    </AtomIcon>
  )
}

Image.propTypes = {
  path: PropTypes.string
}

export default function MoviePoster({path}) {
  return (
    <div className="mv-MoviePoster">
      <AtomImage
        src={path}
        errorText="Not found image"
        errorIcon={<ImageNotFoundIcon />}
      />
    </div>
  )
}

MoviePoster.displayName = 'MoviePoster'
MoviePoster.propTypes = {
  path: PropTypes.string
}
