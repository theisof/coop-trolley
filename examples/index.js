import React from 'react'
import { render} from 'react-dom'
import { Button, initPopupBox } from '../src'
import Navigation from './Navigation'
import '../src/styles/coop-trolley.scss'
import './example.css'

class App extends React.Component {

  render () {
    return (
      <div>
        <Navigation />

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