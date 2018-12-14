import React from 'react';
import PopupBox from './PopupBox'
import ReactDOM from 'react-dom';

const namespace = "react-custom-popup-box"

export const initPopupBox = (options = {}) => {
  if (! document.getElementById(namespace)) {
    const container = document.createElement("div")

    container.id = namespace
    document.body.insertBefore (container, document.body.firstChild)
  }

  ReactDOM.render(
    <PopupBox
      remove={remove}
      options={options}
    />,
    document.getElementById(namespace)
  )
}

const remove = () => {
  const reactTarget = document.getElementById(namespace)

  ReactDOM.unmountComponentAtNode(reactTarget)
}

export default <PopupBox />
