import React from 'react'
import { Navigation } from '../src'
import navConfig from './navConfig'

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      isSearching: false
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSearchItemClick = this.onSearchItemClick.bind(this)
    this.onSearchReset = this.onSearchReset.bind(this)
  }

  handleSearchInput() {
    this.setState({ isSearching: true })

    setTimeout( () => {
      this.setState({
        searchResults: [
          {
            title: 'Mener du...',
            results: [
              {
                name: 'Grillkylling',
                link: 'https://opskrifter.coop.dk/opskrifter/karrysild-1786',
                type: 'suggestion'
              },
              {
                name: 'Kattemad',
                link: 'https://opskrifter.coop.dk/opskrifter/frikadeller-stegt-i-julekrydderier-serveret-med-coleslaw-2649',
                type: 'suggestion'
              }
            ]
          },
          {
            title: 'Populære',
            results: [
              {
                name: 'Karrysild',
                thumbnail: 'https://opskrifteradmin.coop.dk/media/recipeimages/1786/9935/1920/r-41782.jpg?width=350&height=350&mode=crop&format=jpg&quality=90&center=0.5%2C0.5',
                link: 'https://opskrifter.coop.dk/opskrifter/karrysild-1786',
                type: 'link'
              },
              {
                name: 'Frikadeller stegt i julekrydderier serveret med coleslaw',
                thumbnail: 'https://opskrifteradmin.coop.dk/media/recipeimages/2649/10796/1920/r-6458.jpg?width=350&height=350&mode=crop&format=jpg&quality=90&center=0.5%2C0.5',
                link: 'https://opskrifter.coop.dk/opskrifter/frikadeller-stegt-i-julekrydderier-serveret-med-coleslaw-2649',
                type: 'link'
              }
            ]
          }
        ],
        isSearching: false
      })
    }, 1000)
  }

  onSearchItemClick(item) {
    if (item.type === 'link') {
      alert('Direct link to ' + item.link)
    }

    if (item.type === 'suggestion') {
      alert('Go to search page and search for ' + item.name)
    }
  }

  onSearchReset() {
    this.setState({ searchResults: [], isSearching: false })
  }

  render () {
    const { searchResults, isSearching } = this.state

    return (
      <Navigation
        config={navConfig}
        onSearchInput={this.handleSearchInput}
        onSearchItemClick={this.onSearchItemClick}
        onSearchReset={this.onSearchReset}
        searchResults={searchResults}
        isSearching={isSearching}
      />
    )
  }
}


export default Nav