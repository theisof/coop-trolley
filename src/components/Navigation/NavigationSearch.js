import React from 'react'
import NavigationSearchItem from './NavigationSearchItem'

class NavigationSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { onSearchInput } = this.props

    onSearchInput(e.target.value)
  }

  render() {
    const { searchResults, onSearchItemClick } = this.props

    return (
      <div className='coop-nav-search'>
        <input
          className='coop-nav-search__input'
          placeholder="Søg..."
          onChange={this.handleInputChange}
        />

        <div className='coop-nav-search__results'>
          { searchResults.map((s, i) =>
            <div key={i} className='coop-nav-search__section'>
              <h4 className='coop-nav-search__section-title'>{s.title}</h4>

              <div className='coop-nav-search__section-results'>
                { s.results.map((r, e) =>
                  <NavigationSearchItem key={e} {...r} onSearchItemClick={onSearchItemClick} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default NavigationSearch