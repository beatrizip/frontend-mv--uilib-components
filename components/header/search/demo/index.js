import HeaderSearch from '../src/index'

const onButtonClick = value => {
  return console.log(value)
}

export default () => <HeaderSearch onButtonClick={onButtonClick} />
