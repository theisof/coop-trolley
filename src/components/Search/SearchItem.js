import React from 'react'

class SearchItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { onSearchItemClick } = this.props

    onSearchItemClick(this.props)
  }

  render() {
    const { thumbnail, name } = this.props

    return (
      <div className='coop-search__item' onClick={this.handleClick}>
        {thumbnail &&
          <img src={thumbnail} alt={name} className='coop-search__thumbnail' />
        }

        <div  className='coop-search__name'>
          { name }
        </div>
      </div>
    )
  }
}

export default SearchItem
