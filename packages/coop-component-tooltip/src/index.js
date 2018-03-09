import React, { Component } from 'react'

import './styles.scss'

// Todo: load from npm
const breakpoints = {
  sm: 500,
  md: 750,
  lg: 1024,
  xl: 1200
}


class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.onEnter = this.onEnter.bind(this)
    this.onLeave = this.onLeave.bind(this)
    this.state = { visible: false }
  }

  onEnter () {
    this.detectDesktop() && this.setState({ visible: true })
  }

  onLeave () {
    this.setState({ visible: false })
  }

  detectDesktop () {
    return window.innerWidth > breakpoints.xl
  }

  render () {
    const { visible } = this.state
    const {
      width = 100,
      children,
      text = '',
      style = {}
  } = this.props

    return (
      <div
        ref="wrap"
        style={ style }
        onMouseEnter={this.onEnter}
        onMouseLeave={this.onLeave}
        onClick={this.onLeave}
        className='coop-tooltip__wrap'
      >
        { children }

        <div
          style={styles.tip(width)}
          className={`coop-tooltip__tip ${visible ? 'coop-tooltip__tip--visible' : ''}`}
        >
          { visible &&
            <div style={styles.arrow(width)} className='coop-tooltip__arrow'></div>
          }
          <span>{text}</span>
        </div>
      </div>
    )
  }
}

const styles = {
  tip: width => ({
    marginLeft: `-${(width) / 2}px`,
    width
  }),
  arrow: width => ({
    left: ((width) / 2) - 2.5
  })
}

export default Tooltip
