import React from 'react'
import { render} from 'react-dom'
import Button from '../src/components/Button'
import '../src/styles/coop-trolley.scss'
import './example.css'

const App = () => (
  <div className='app'>
    <div class="section">
      <h3 class="title">Button</h3>

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
  </div>
)

render(<App />, document.getElementById("root"))