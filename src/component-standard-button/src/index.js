import React from 'react'

import './styles.scss'

const StandardButton = ({
  children,
  style = {},
  onClick = () => {},
  type = 'primary',
  className = ''
}) => (
  <div
    className={`coop-standard-button coop-standard-button--${type} ${className}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </div>
)

export default StandardButton