import React from 'react'
import SearchItem from './SearchItem'

class Search extends React.Component {
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
    const { searchResults = [], onSearchItemClick } = this.props

    return (
      <div className='coop-search'>
        <input
          className='coop-search__input'
          placeholder="Søg..."
          onChange={this.handleInputChange}
        />

        <div className='coop-search__results'>
          { searchResults.map((s, i) =>
            <div key={i} className='coop-search__section'>
              <h4 className='coop-search__section-title'>{s.title}</h4>

              <div className='coop-search__section-results'>
                { s.results.map((r, e) =>
                  <SearchItem key={e} {...r} onSearchItemClick={onSearchItemClick} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Search