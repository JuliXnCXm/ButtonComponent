import React from 'react';
import './styles/outline.css'

class OutlineButton extends React.Component{
  render() {
    return (
      <div className="SetButton outline">
        <div className="First outline">
          <p type="text"></p>
          {"<Button variant=”outline” />"}
          <button>Default</button>
        </div>
        <div className="Second outline2">
          <p type="text"></p>
          {"&:hover, &:focus"}
          <button>Default</button>
        </div>
      </div>
    );
  }
}

export default OutlineButton;