import React from 'react'

import './styles.scss'

class PopupBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      closing: false
    }

    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick (event) {
    if (! this.state.closing) {
      const index = event.target.dataset.index
      const action = this.props.options.actions[index]

      action && action.callback && action.callback()
      this.setState({ closing: true })

      setTimeout(() => {
        this.props.remove()
      }, 400)
    }
  }

  render () {
    const { options } = this.props

    return (
      <div className={`coop-popup-box__wrap ${this.state.closing ? 'coop-popup-box__wrap--closing' : ''}`}>
        <div className='coop-popup-box__inner'>
          <h3 className='coop-popup-box__title'>
            {options.title ? options.title : ''}
          </h3>

          <p className='coop-popup-box__text'>
            {options.text ? options.text : ''}
          </p>

          {options.actions.map((a, i) =>
            <div className={`coop-popup-box__button ${a.secondary ? 'coop-popup-box__button--secondary' : ''}`} onClick={this.buttonClick} data-index={i} key={i}>
              {a.text}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PopupBox
