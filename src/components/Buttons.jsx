import React from 'react';
import DefaultButton from './DefaultButton';
import OutlineButton from './OutlineButton';
import TextButton from './TextButton';
import DisableBox from './DisableShadow';
import Disabled from './Disabled';
import Icon from './Icon'
import SizeButton from './SizeButton';
import ColorButton from './ColorButton';
import './styles/Buttons.css'

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
          <h1>Buttons</h1>
          <DefaultButton/>
          <OutlineButton/>
          <TextButton/>
          <DisableBox/>
          <Disabled/>
          <Icon/>
          <SizeButton/>
          <ColorButton/>
      </div>
    )
  }
}

export default Buttons;