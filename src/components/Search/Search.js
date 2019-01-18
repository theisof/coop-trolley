import React, { Fragment } from 'react'
import Backdrop from '../Backdrop'
import getImagePath from '../../utils/getImagePath'
import SearchItem from './SearchItem'
import Loader from 'react-loader'

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      selected: 0,
      didSearch: false,
      isActive: false
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.hideSearch = this.hideSearch.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.searchInput = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let count = 0
    let hasRequired = false

    const searchResults = nextProps.searchResults ? nextProps.searchResults.map( section => {
      if (! section.optional) {
        hasRequired = true
      }

      return {
        ...section,
        results: section.results.map( item => {
          count++

          return {
            ...item,
            index: count
          }
        })
      }
    }) : []

    return {
      ...prevState,
      searchResults,
      count,
      hasRequired,
      didSearch: ! nextProps.isSearching && prevState.searchText.length > 0
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false)
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false)
  }

  componentDidUpdate(prevProps) {
    const { mobileSearchVisible } = this.props

    if (prevProps.mobileSearchVisible !==  mobileSearchVisible && mobileSearchVisible ) {
      this.searchInput && this.searchInput.current.focus()
    }
  }

  handleBlur() {
    if (this.state.selected === 0) {
      this.setState({ isActive: false })
    }
  }

  handleKeyPress(e) {
    const { selected, searchResults, count, searchText, isActive } = this.state
    const goUp = () => {
      e.preventDefault()
      selected > 0 && this.setState({ selected: selected -1 })
      selected === 1 && this.searchInput && this.searchInput.current.focus()
    }

    const goDown = () => {
      e.preventDefault()
      count > selected && this.setState({ selected: selected + 1})
    }

    if (isActive) {
      switch(e.key) {
        case 'Enter':
          if (window.location.href.indexOf('/soeg') > -1) {
            this.setState({ isActive: false })
          } else {
            window.location.href = `https://opskrifter.secure:5002/soeg#?${encodeURI(searchText)}`
          }
          break

        case 'Escape':
          this.hideSearch()
          break

        case 'ArrowDown':
          searchResults.length && goDown()
          break

        case 'ArrowUp':
          searchResults.length && goUp()
          break

        case 'Tab':
          e.shiftKey ? goUp() : goDown()
          break
      }
    }
  }

  handleInputChange(e) {
    const value = e.target.value

    this.setState({ searchText: value, selected: 0, isActive: true })

    clearTimeout(this.timer)

    this.timer = setTimeout(() => {
      this.props.onSearchInput(value)
    }, 350)
  }

  hideSearch() {
    this.props.hideSearch()
    this.setState({ searchText: '', selected: 0, isActive: false })
  }

  render() {
    const { onSearchItemClick, isSearching, searchFailed } = this.props
    const { searchText, selected, searchResults, hasRequired, didSearch, isActive } = this.state
    const clearWrapClass = isActive ? 'coop-search__clear-wrap--has-input' : ''
    const maxHeightStyle = window.innerWidth < 768 ? { maxHeight: window.innerHeight - 60 } : {}

    return (
      <Fragment>
        <div className='coop-search'>
          <img
            src={getImagePath('search.svg')}
            alt="søg"
            className='coop-search__icon'
          />

          <input
            id='coop-search__input'
            className='coop-search__input'
            placeholder="Søg..."
            onClick={this.handleInputChange}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            value={searchText}
            ref={this.searchInput}
          />

          { isActive &&
            <Fragment>
              { isSearching &&
                <Loader
                  options={{
                    radius: 4,
                    length: 4,
                    width: 2,
                    lines: 10,
                    color: '#555',
                    left: 'auto',
                    className: 'coop-search__loader'
                  }}
                />
              }

              <div className='coop-search__results' style={maxHeightStyle}>
                { didSearch && ! hasRequired && ! searchFailed &&
                  <div className='coop-search__fallback'>Ingen resultater</div>
                }

                { searchFailed &&
                  <div className='coop-search__fallback'>Der er sket en fejl</div>
                }

                { searchResults.map((s, i) =>
                  <div key={i} className='coop-search__section'>
                    <h4 className='coop-search__section-title'>{s.title}</h4>

                    <div className='coop-search__section-results'>
                      { s.results.map((r, e) =>
                        <SearchItem
                          {...r}
                          key={e}
                          onSearchItemClick={onSearchItemClick}
                          isSelected={selected === r.index}
                          index={r.index}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Fragment>
          }

          <div className={`coop-search__clear-wrap ${clearWrapClass}`} onClick={this.hideSearch}>
            <img
              src={getImagePath('times-black.svg')}
              className='coop-search__clear-image'
              alt="Luk"
            />
          </div>
        </div>

        <Backdrop
          visible={isActive && searchResults.length > 0}
          onClose={this.hideSearch}
        />
      </Fragment>
    )
  }
}

export default Search