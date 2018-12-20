import React from 'react'
import { render} from 'react-dom'
import { Button, initPopupBox, Navigation } from '../src'
import navConfig from './navConfig'
import '../src/styles/coop-trolley.scss'
import './example.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    }

    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.onSearchItemClick = this.onSearchItemClick.bind(this)
  }

  handleSearchInput(text) {
    console.log(text)

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
        ]
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

  render () {
    const { searchResults } = this.state

    return (
      <div>
        <Navigation
          config={navConfig}
          onSearchInput={this.handleSearchInput}
          onSearchItemClick={this.onSearchItemClick}
          searchResults={searchResults}
        />

        <div className='app'>
          <div className="section">
            <h3 className="title">Button</h3>

            <div className='variation'>
              <Button>Primary button</Button>
            </div>

            <div className='variation'>
              <Button type='secondary'>Secondary button</Button>
            </div>

            <div className='variation'>
              <Button type='white-transparent'>White and transparent button</Button>
            </div>
          </div>

          <div className='section'>
            <h3 className="title">Popup Box</h3>

            <Button onClick={triggerPopup}>Press to trigger PopupBox</Button>
          </div>
        </div>
      </div>
    )
  }
}

const triggerPopup = () => {
  initPopupBox({
    title: 'This is a Popup Box',
    text: 'Use it as a pretty alternative to alert()',
    actions: [
      { text: 'That\'s nice' },
      { text: 'See me trigger me', secondary: true, callback: () => {
        setTimeout(triggerPopup, 500)
      }}
    ]
  })
}

render(<App />, document.getElementById("root"))