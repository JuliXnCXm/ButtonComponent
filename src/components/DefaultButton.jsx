import React from 'react';
import './styles/DefaultButton.css'

class DefaultButton extends React.Component {
  render() {
    return (
        <div className="SetButton">
          <div className="First">
            <p type="text"></p>{'<Button />'}
            <button>Default</button>
          </div>
          <div className="Second">
            <p type="text"></p>{'&:hover, &:focus'}
            <button>Default</button>
          </div>
        </div>
    )
  }
}

export default DefaultButton;