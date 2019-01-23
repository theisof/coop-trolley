import React from 'react'
import baseConfig from './baseConfig'
import NavigationLink from './NavigationLink'
import Backdrop from '../Backdrop'
import Search from '../Search'
import getImagePath from '../../utils/getImagePath'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavVisible: false,
      mobileSearchVisible: false,
      navStart: 0,
      isFixed: false
    }

    this.showMobileNav = this.showMobileNav.bind(this)
    this.hideMobileNav = this.hideMobileNav.bind(this)
    this.showMobileSearch = this.showMobileSearch.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.siteNav = React.createRef()
  }

  handleKeyPress(e) {
    if(e.keyCode === 27) {
      this.setState({
        mobileNavVisible: false,
        mobileSearchVisible: false,
      })
    }
  }

  componentDidMount(){
    const rect = this.siteNav.current.getBoundingClientRect()
    this.setState({ navStart: rect.top + window.scrollY })

    document.addEventListener("scroll", this.handleScroll, false)
    document.addEventListener("keydown", this.handleKeyPress, false)
  }

  componentWillUnmount(){
    document.removeEventListener("scroll", this.handleScroll, false)
    document.removeEventListener("keydown", this.handleKeyPress, false)
  }

  handleScroll() {
    const { navStart, isFixed } = this.state
    const bodyOffset = parseInt(document.body.style.top, 10) || 0 // top offset will be different from 0 if a modal is open

    if (navStart < window.scrollY && ! isFixed) {
      this.setState({ isFixed: true })
    } else if (navStart > window.scrollY && bodyOffset === 0 && isFixed) {
      this.setState({ isFixed: false })
    }
  }

  showMobileNav () {
    this.setState({ mobileNavVisible: true })
  }

  hideMobileNav () {
    this.setState({ mobileNavVisible: false })
  }

  showMobileSearch () {
    this.setState({ mobileSearchVisible: true })
  }

  resetSearch () {
    this.setState({ mobileSearchVisible: false })
    this.props.onSearchReset()
  }

  render() {
    const { globalItems, siteItems, contextItems, siteLogo } = { ...baseConfig, ...this.props.config }
    const { mobileNavVisible, mobileSearchVisible, isFixed } = this.state
    const mobileNavVisibleClass = mobileNavVisible ? 'coop-nav--mobile-visible' : ''
    const mobileSearchVisibleClass = mobileSearchVisible ? 'coop-site-nav__search--mobile-visible' : ''
    const isFixedClass = isFixed ? 'coop-site-nav__inner--is-fixed' : ''

    return (
      <header className={`coop-nav ${mobileNavVisibleClass}`}>
        <div className='coop-global-nav'>
          <div className='coop-global-nav__close-wrap' onClick={this.hideMobileNav}>
            <img
              src={getImagePath('times-black.svg')}
              className='coop-global-nav__close-image'
              alt="Luk"
            />
          </div>

          <ul className='coop-nav__list coop-global-nav__list'>
            { globalItems.map((item, i) =>
              <li className='coop-global-nav__item' key={i}>
                <NavigationLink {...item} className='coop-global-nav__link' isBlank />
              </li>
            )}
          </ul>
        </div>

        <div className='coop-site-nav' ref={this.siteNav}>
          <div className={`coop-site-nav__inner  ${isFixedClass}`}>
            <div className='coop-site-nav__mobile'>
              <img
                src={getImagePath('burger.svg')}
                alt="menu"
                className='coop-site-nav__mobile-toggle'
                onClick={this.showMobileNav}
              />

              <img
                src={getImagePath('search.svg')}
                alt="søg"
                className='coop-site-nav__mobile-search'
                onClick={this.showMobileSearch}
              />
            </div>

            <a href={siteLogo.link} className='coop-site-nav__logo-wrap'>
              <img src={getImagePath(siteLogo.image)} alt="logo" className='coop-site-nav__logo-image' />
            </a>

            <div className={`coop-site-nav__search ${mobileSearchVisibleClass}`}>
              <Search
                {...this.props}
                resetSearch={this.resetSearch}
                mobileSearchVisible={mobileSearchVisible}
              />
            </div>

            <ul className='coop-nav__list coop-site-nav__list'>
              { siteItems.map((item, i) =>
                <li className='coop-site-nav__item' key={i}>
                  <NavigationLink {...item} className='coop-site-nav__link' />
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className='coop-context-nav'>
          <ul className='coop-nav__list coop-context-nav__list'>
            { contextItems.map((item, i) =>
              <li className='coop-context-nav__item' key={i}>
                <NavigationLink {...item} className='coop-context-nav__link' />
              </li>
            )}
          </ul>
        </div>

        <Backdrop visible={mobileNavVisible} onClose={this.hideMobileNav} />
      </header>
    )
  }
}

export default Navigation