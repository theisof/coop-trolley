import React, { Fragment } from 'react'

class SearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      id: `search-item__index-${nextProps.index}`
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false)
  }

  componentDidUpdate(prevProps) {
    if (this.props.isSelected && prevProps.isSelected !== this.props.isSelected) {
      document.getElementById(this.state.id).focus()
    }
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && this.props.isSelected) {
      e.preventDefault()
      this.handleClick()
    }
  }

  handleClick() {
    const { onSearchItemClick, link } = this.props

    if (link) {
      window.location.href = link
    } else {
      onSearchItemClick(this.props)
    }
  }

  render() {
    const { thumbnail, name, link, isSelected } = this.props
    const { id } = this.state
    const wrapperClass = isSelected ? 'coop-search__item coop-search__item--is-selected' : 'coop-search__item'
    const content = (
      <Fragment>
        {thumbnail &&
          <img src={thumbnail} alt={name} className='coop-search__thumbnail' />
        }

        <div  className='coop-search__name'>
          { name }
        </div>
      </Fragment>
    )

    if (link) {
      return (
        <a href={link} className={wrapperClass} id={id}>
          { content }
        </a>
      )
    }

    return (
      <div onClick={this.handleClick} className={wrapperClass} id={id}>
        { content }
      </div>
    )
  }
}

export default SearchItem
