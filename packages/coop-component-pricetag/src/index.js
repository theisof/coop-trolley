import React from 'react'

import './Pricetag.scss'

const PriceTag = ({
  price = 0,
  className = ''
}) => (
  <div className={`coop-pricetag ${className}`}>
    {format(price)}
  </div>
)

const format = price => {
  let whole
  let comma

  if (Number.isInteger(price)) {
    whole = price
    comma = '00'
  } else {
    whole = Math.floor(price)
    comma = (price * 10 - whole * 10) / 10
    comma = String(comma).substring(2, 4)
    comma = comma.length === 1 ? comma + 0 : comma
  }

  return <span>{whole}<sup className='coop-pricetag__sup'>{comma}</sup></span>
}

export default PriceTag