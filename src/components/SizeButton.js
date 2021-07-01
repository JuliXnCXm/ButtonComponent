import React from 'react';
import './styles/SizeButtons.css'

class SizeButton extends React.Component {
  render () {
    return (
        <div className="size-button">
          <div className="First" >
            <p type="text"></p>
              {"<Button size=”sm” />"}
            <button className="sm">Default</button>
          </div>
          <div className="First" >
            <p type="text"></p>
              {"<Button size=”md” />"}
            <button className="md">Default</button>
          </div>
          <div className="First" >
            <p type="text"></p>
              {"<Button size=”lg” />"}
            <button className="lg">Default</button>
          </div>
        </div>
    )
  }
}
export default SizeButton 