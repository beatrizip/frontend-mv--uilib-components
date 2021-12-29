import React from 'react'
import PropTypes from 'prop-types'

import AtomCard, {
  atomCardElevation,
  atomCardRounded
} from '@s-ui/react-atom-card'

export default function Card({
  content,
  media,
  elevation = atomCardElevation.L,
  rounded = atomCardRounded.L,
  href
}) {
  return (
    <AtomCard
      media={() => media}
      content={() => content}
      href={href}
      rounded={rounded}
      elevation={elevation}
    />
  )
}

Card.displayName = 'Card'
Card.propTypes = {
  content: PropTypes.node,
  media: PropTypes.node,
  elevation: PropTypes.string,
  rounded: PropTypes.string,
  href: PropTypes.string
}
