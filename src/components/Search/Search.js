import React from 'react'
import SearchItem from './SearchItem'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const { onSearchInput } = this.props
    const value = e.target.value

    onSearchInput(value)
    this.setState({ searchText: value })
  }

  render() {
    const { searchResults = [], onSearchItemClick } = this.props
    const { searchText } = this.state

    return (
      <div className='coop-search'>
        <input
          className='coop-search__input'
          placeholder="Søg..."
          onChange={this.handleInputChange}
          value={searchText}
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