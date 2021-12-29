import PropTypes from 'prop-types'

const BASE_CLASS = 'mv-List'

export default function List({children}) {
  return <ul className={BASE_CLASS}>{children}</ul>
}

List.displayName = 'List'
List.propTypes = {
  children: PropTypes.node
}
