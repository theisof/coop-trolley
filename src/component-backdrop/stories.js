import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Backdrop from './src/index.js';

class BackdropWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    action('Toggle backdrop')
    this.setState({ visible: ! this.state.visible })
  }

  render () {
    return (
      <div>
        <div onClick={this.buttonClick}>{this.props.text}</div>
        <Backdrop visible={this.state.visible} onClose={this.buttonClick} zIndex={this.props.zIndex} />
      </div>
    )
  }
}

storiesOf('Backdrop', module)
  .add('visible', () => (
    <Backdrop visible onClose={action('Close backdrop')} />
  ))
  .add('toggle', () => (
    <BackdropWrapper text="Click me" />
  ))
  .add('layers', () => (
    <div>
      <BackdropWrapper zIndex={999} text="Click me first"  />
      <div style={{ position: 'absolute', zIndex: 9998 }}>
        <BackdropWrapper zIndex={9999}  text="Click me last"/>
      </div>
    </div>
  ))