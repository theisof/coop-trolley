import React from 'react';
import Template from './Template'
import ReactDOM from 'react-dom';

const namespace = "react-custom-popup-box"

const popupBox = (options = {}) => {
  const container = document.createElement("div")

  container.id = namespace

  if (! document.getElementById(namespace)) {
    document.body.insertBefore (container, document.body.firstChild)

    ReactDOM.render(
      <Template
        remove={remove}
        options={options}
      />,
      document.getElementById(namespace)
    )
  }
}

const remove = () => {
  const reactTarget = document.getElementById(namespace)

  reactTarget && reactTarget.parentNode && reactTarget.parentNode.removeChild(reactTarget)
}

export default popupBox
