class BackdropVanilla {
  constructor() {
    this.namespace = 'coop-backdrop-vanilla'
    this.scrollPosition = 0
    this.id = Math.floor((Math.random() * 10000000) + 1)
  }

  open() {
    this.insertStyles()

    this.scrollPosition = window.pageYOffset

    document.body.style.paddingRight = `${this.getScrollBarWidth()}px`
    document.body.classList.add(`${this.namespace}--overlay-open`)
    document.body.style.top = `-${this.scrollPosition}px`
    document.getElementById(this.id).classList.remove('coop-backdrop-vanilla--invisible')
    document.getElementById(this.id).classList.add('coop-backdrop-vanilla--visible')

    window.openCoopBackdrops = window.openCoopBackdrops + 1
  }

  close() {
    if (window.openCoopBackdrops === 1) {
      document.body.classList.remove(`${this.namespace}--overlay-open`);
      window.scrollTo(0, this.scrollPosition)
      document.body.style.top = `0px`
      document.body.style.paddingRight = `0px`
    }

    document.getElementById(this.id).classList.remove('coop-backdrop-vanilla--visible')
    document.getElementById(this.id).classList.add('coop-backdrop-vanilla--invisible')

    window.openCoopBackdrops = window.openCoopBackdrops - 1
  }

  getScrollBarWidth() {
    return window.innerWidth - document.body.clientWidth
  }

  insertStyles() {
    const id = `${this.namespace}__styles`

    if (! document.getElementById(id)) {
      let tag = document.createElement('style');

      tag.id = id
      tag.innerHTML = styles

      document.body.insertBefore (tag, document.body.firstChild)
    }
  }

  init() {
    window.openCoopBackdrops = window.openCoopBackdrops || 0

    let rootElem  = document.createElement("div")

    rootElem.className = this.namespace
    rootElem.id = this.id
    document.body.insertBefore (rootElem, document.body.firstChild)

    const element = document.getElementById(this.id)

    element.addEventListener('click', this.close)
  }
}


const styles = `
  .coop-backdrop-vanilla {
    position: fixed;
    width: 100%;
    height: 100vh !important;
    overflow: hidden;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    top: 0;
    visibility: hidden;
    opacity: 0;
  }

  .coop-backdrop-vanilla--visible {
    animation: fadein-backdrop 0.5s forwards;
  }

  .coop-backdrop-vanilla--invisible {
    animation: fadeout-backdrop 0.5s forwards;
  }

  body.coop-backdrop-vanilla--overlay-open {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    height: 100% !important;
  }

  @keyframes fadein-backdrop {
    from {
      visibility: hidden;
      opacity: 0;
    }
    to   {
      visibility: visible;
      opacity: 1;
    }
  }

  @keyframes fadeout-backdrop {
    from {
      visibility: visible;
      opacity: 1;
    }
    to   {
      visibility: hidden;
      opacity: 0;
    }
  }
`

export default BackdropVanilla
