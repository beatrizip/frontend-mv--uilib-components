import {useState} from 'react'
import PropTypes from 'prop-types'

import AtomInput, {inputSizes} from '@s-ui/react-atom-input'
import AtomButton, {
  atomButtonSizes,
  atomButtonShapes
} from '@s-ui/react-atom-button'

const BASE_CLASS = 'mv-HeaderSearch'
const SEARCH_ICON = (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="m10 16c-1.602 0-3.109-.624-4.242-1.757-1.134-1.133-1.758-2.64-1.758-4.243 0-1.602.624-3.109 1.758-4.242 1.133-1.134 2.64-1.758 4.242-1.758s3.109.624 4.242 1.758c1.134 1.133 1.758 2.64 1.758 4.242 0 1.603-.624 3.11-1.758 4.243-1.133 1.133-2.64 1.757-4.242 1.757zm11.707 4.293-5.392-5.393c1.088-1.396 1.685-3.101 1.685-4.9 0-2.137-.833-4.146-2.344-5.656-1.51-1.512-3.519-2.344-5.656-2.344s-4.146.832-5.656 2.344c-1.511 1.51-2.344 3.519-2.344 5.656s.833 4.146 2.344 5.656c1.51 1.512 3.519 2.344 5.656 2.344 1.799 0 3.504-.596 4.9-1.686l5.393 5.393z" />
  </svg>
)

export default function HeaderSearch({onButtonClick}) {
  const [query, setQueryValue] = useState('')

  const _handleChange = (_, {value}) => {
    setQueryValue(value)
  }

  const _handleSubmit = event => {
    event.preventDefault() // Evita la recarga de la pagina (comportamiento por defecto)
    onButtonClick(query)
  }

  return (
    <div className={BASE_CLASS}>
      <h1>The Movie DB</h1>
      <form className={`${BASE_CLASS}-container`} onSubmit={_handleSubmit}>
        <div className={`${BASE_CLASS}-search`}>
          <AtomInput
            type="text"
            placeholder="Search a movie..."
            value={query}
            onChange={_handleChange}
            size={inputSizes.LARGE}
            leftIcon={SEARCH_ICON}
          />
        </div>
        <AtomButton
          isSubmit
          size={atomButtonSizes.LARGE}
          hape={atomButtonShapes.ROUNDED}
        >
          Search
        </AtomButton>
      </form>
    </div>
  )
}

HeaderSearch.displayName = 'HeaderSearch'
HeaderSearch.propTypes = {
  onButtonClick: PropTypes.func
}
