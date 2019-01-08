import React from 'react'
import getImagePath from '../../utils/getImagePath'

const NavigationLink = ({ name, link, onClick, Component, iconUrl, className, isCurrent, isBlank = 'false' }) => {
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

  if (Component) {
    return (
      <div className={allClasses}>
        { Component }
      </div>
    )
  } else if (onClick) {
    return (
      <div onClick={onClick} className={allClasses}>
        { content }
      </div>
    )
  }

  return (
    <a href={link} className={allClasses} target={ isBlank ? '_blank' : '_self' }>
      { content }
    </a>
  )
}

export default NavigationLink
