import React from 'react';
import DefaultButton from './DefaultButton';
import OutlineButton from './OutlineButton';
import TextButton from './TextButton';
import DisableBox from './DisableShadow';
import Disabled from './Disabled';
import Icon from './Icon'
import './styles/Buttons.css'

class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
          <h1 type="text">Buttons</h1>
          <DefaultButton/>
          <OutlineButton/>
          <TextButton/>
          <DisableBox/>
          <Disabled/>
          <Icon/>
      </div>
    )
  }
}

export default Buttons;