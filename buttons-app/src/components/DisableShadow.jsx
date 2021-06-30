import React,{useState} from 'react';
import './styles/DisableBox.css'

function DisableBox()
{  const [isActive, setActive] = useState("false");
    const ToggleClass = () => {
      setActive(!isActive);
      console.log("toggled")
    };
    return (
      <div className="SetButton">
        <div className="First DisableShadow" >
          <p type="text"></p>
          {"<Button disableShadow />"}
          <button onClick={ToggleClass} className={isActive ? "disabled" : "active"}>Default</button>
        </div>
      </div>
    )
}

export default DisableBox