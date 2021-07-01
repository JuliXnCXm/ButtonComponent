import React from 'react';
import './styles/ColorButton.css'

class ColorButton extends React.Component {
  render() {
    return (
      <div className="colorButton">
        <div className="SetButton SetColorButton">
          <div className="First default">
            <p type="text"></p>
            {"<Button color=”default” />"}
            <button>Default</button>
          </div>
          <div className="Second default">
            <p type="text"></p>
            {"&:hover, &:focus"}
            <button>Default</button>
          </div>
        </div>
        <div className="SetButton SetColorButton">
          <div className="First primary">
            <p type="text"></p>
            {"<Button color=”primary” />"}
            <button>Default</button>
          </div>
          <div className="Second Second-primary">
            <p type="text"></p>
            {""}
            <button>Default</button>
          </div>
        </div>
        <div className="SetButton SetColorButton">
          <div className="First secondary">
            <p type="text"></p>
            {"<Button color=”danger” />"}
            <button>Default</button>
          </div>
          <div className="Second Second-secondary">
            <p type="text"></p>
            {""}
            <button>Default</button>
          </div>
        </div>
        <div className="SetButton SetColorButton">
          <div className="First danger">
            <p type="text"></p>
            {"<Button color=”danger” />"}
            <button>Default</button>
          </div>
          <div className="Second Second-danger">
            <p type="text"></p>
            {""}
            <button>Default</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorButton