import React from 'react'
import getImagePath from '../../utils/getImagePath'

const NavigationLink = ({ name, link, onClick, iconUrl, className, isCurrent }) => {
  const baseClass = 'coop-nav__link'
  const currentClass = isCurrent ? `${baseClass}--is-current ${className}--is-current` : ''
  const allClasses = `${baseClass} ${currentClass} ${className}`

  const content =
    <span>
      <span className={`${className}-name`}>
        {name}
      </span>

      { iconUrl &&
        <img src={getImagePath(iconUrl)} className={`${className}-icon`} />
      }
    </span>


  return (
    onClick ?
      <div onClick={onClick} className={allClasses}>
        { content }
      </div>
    :
      <a href={link} className={allClasses}>
        { content }
      </a>
  )
}


export default NavigationLink
