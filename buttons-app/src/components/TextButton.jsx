import React from 'react';
import './styles/TextButton.css';

class TextButton extends React.Component {
  render() {
    return (
      <div className="SetButton text">
        <div className="First text">
          <p type="text"></p>
          {"<Button variant=”text” />"}
          <button>Default</button>
        </div>
        <div className="Second text2">
          <p type="text"></p>
          {"&:hover, &:focus"}
          <button>Default</button>
        </div>
      </div>
    );
  }
}

export default TextButton