import React from 'react'

const Button = ({
  children,
  style = {},
  type = 'primary',
  className = '',
  onClick = () => {}
}) => (
  <div
    className={`coop-button coop-button--${type} ${className}`}
    style={style}
    onClick={onClick}
  >
    { children }
  </div>
)

export default Button


