export default {
  siteLogo: {
    image: 'opskrifter-logo.svg',
    link: '/'
  },
  siteItems: [
    {
      name: 'Gemte',
      iconUrl: 'heart.svg',
      onClick: () => {
        console.log('clicked gemt')
      }
    }
  ],
  contextItems: [
    {
      name: 'Temaer',
      link: '/temaer'
    },
    {
      name: 'Artikler',
      link: '/artikler',
      isCurrent: true
    },
    {
      name: 'Kategorier',
      link: '/kategorier'
    },
    {
      name: 'Om',
      link: '/om'
    }
  ]
}