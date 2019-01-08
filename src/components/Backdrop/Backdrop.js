import React, { Component } from 'react'

window.openCoopBackdrops = 0

class Backdrop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoad: false
    }

    this.scrollPosition = 0
    this.lockDocument = this.lockDocument.bind(this)
    this.releaseDocument = this.releaseDocument.bind(this)
  }

  componentDidMount() {
    this.setState({ initialLoad: true })
  }

  shouldComponentUpdate (nextProps) {
    return this.props.visible !== nextProps.visible
  }

  componentDidUpdate() {
    const { visible } = this.props

    if (visible) {
      this.lockDocument()
    } else {
      this.releaseDocument()
    }
  }

  lockDocument() {
    // Note that execution order is important to get the right dom-behaviour
    this.scrollPosition = window.pageYOffset
    document.body.style.paddingRight = `${this.getScrollBarWidth()}px`
    document.body.classList.add("coop-backdrop-body--overlay-open");
    document.body.style.top = `-${this.scrollPosition}px`
    window.openCoopBackdrops = window.openCoopBackdrops + 1
  }

  releaseDocument() {
    if (window.openCoopBackdrops === 1) {
      document.body.classList.remove("coop-backdrop-body--overlay-open");
      window.scrollTo(0, this.scrollPosition)
      document.body.style.top = `0px`
      document.body.style.paddingRight = `0px`
    }

    window.openCoopBackdrops = window.openCoopBackdrops - 1
  }

  getScrollBarWidth() {
    return window.innerWidth - document.body.clientWidth
  }

  render () {
    const { visible, onClose, zIndex = 100000 } = this.props
    const invisibleClass = (! visible && this.state.initialLoad) ? 'coop-backdrop--invisible' : ''
    const visibilityClass = visible ? 'coop-backdrop--visible' : invisibleClass

    return (
      <div
        style={{ zIndex }}
        className={`coop-backdrop ${visibilityClass}`}
        onClick={onClose}
      ></div>
    )
  }
}

export default Backdrop
