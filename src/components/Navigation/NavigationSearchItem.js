import React from 'react'

class NavigationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const { onSearchItemClick } = this.props

    onSearchItemClick(this.props)
  }

  render() {
    const { thumbnail, name } = this.props

    return (
      <div className='coop-nav-search__item' onClick={this.handleClick}>
        {thumbnail &&
          <img src={thumbnail} alt={name} className='coop-nav-search__thumbnail' />
        }

        <div  className='coop-nav-search__name'>
          { name }
        </div>
      </div>
    )
  }
}

export default NavigationSearch


/*

   <a href={r.link} key={e} className='coop-nav-search__link'>
        <img src={r.thumbnail} alt={r.name} className='coop-nav-search__thumbnail' />

        <div  className='coop-nav-search__name'>
          { r.name }
        </div>
      </a>
*/