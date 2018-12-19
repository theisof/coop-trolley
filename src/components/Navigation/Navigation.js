import React from 'react'
import baseConfig from './baseConfig'
import NavigationLink from './NavigationLink'
import Backdrop from '../Backdrop'
import Search from '../Search'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNavVisible: false,
      mobileSearchVisible: false
    }

    this.showMobileNav = this.showMobileNav.bind(this)
    this.hideMobileNav = this.hideMobileNav.bind(this)
    this.showMobileSearch = this.showMobileSearch.bind(this)
    this.hideMobileSearch = this.hideMobileSearch.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e) {
    if(event.keyCode === 27) {
      this.setState({
        mobileNavVisible: false,
        mobileSearchVisible: false
      })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyPress, false);
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

  hideMobileSearch () {
    this.setState({ mobileSearchVisible: false })
  }

  render() {
    const { globalItems, siteItems, contextItems, siteLogo  } = { ...baseConfig, ...this.props.config }
    const { mobileNavVisible, mobileSearchVisible } = this.state
    const mobileNavVisibleClass = mobileNavVisible ? 'coop-nav--mobile-visible' : ''
    const mobileSearchVisibleClass = mobileSearchVisible ? 'coop-site-nav__search--mobile-visible' : ''

    return (
      <header className={`coop-nav ${mobileNavVisibleClass}`}>
        <div className='coop-global-nav'>
          <div className='coop-global-nav__close-wrap' onClick={this.hideMobileNav}>
            <img src="images/times-black.svg" className='coop-global-nav__close-image' alt="Luk" />
          </div>

          <ul className='coop-nav__list coop-global-nav__list'>
            { globalItems.map((item, i) =>
              <li className='coop-global-nav__item' key={i}>
                <NavigationLink {...item} className='coop-global-nav__link' />
              </li>
            )}
          </ul>
        </div>

        <div className='coop-site-nav'>
          <div className='coop-site-nav__mobile'>
            <img
              src='images/burger.svg'
              alt="menu"
              className='coop-site-nav__mobile-toggle'
              onClick={this.showMobileNav}
            />

            <img
              src='images/search.svg'
              alt="menu"
              className='coop-site-nav__mobile-search'
              onClick={this.showMobileSearch}
            />
          </div>

          <a href={siteLogo.link} className='coop-site-nav__logo-wrap'>
            <img src={siteLogo.imageUrl} alt="logo" className='coop-site-nav__logo-image' />
          </a>

          <div className={`coop-site-nav__search ${mobileSearchVisibleClass}`}>
            <Search {...this.props} />

            <div className='coop-site-nav__close-wrap' onClick={this.hideMobileSearch}>
              <img
                src="images/times-black.svg"
                className='coop-site-nav__close-image'
                alt="Luk"
              />
            </div>
          </div>

          <ul className='coop-nav__list coop-site-nav__list'>
            { siteItems.map((item, i) =>
              <li className='coop-site-nav__item' key={i}>
                <NavigationLink {...item} className='coop-site-nav__link' />
              </li>
            )}
          </ul>
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