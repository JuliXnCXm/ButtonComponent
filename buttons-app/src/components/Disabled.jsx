import React , {useState} from 'react';
import './styles/Disabled.css';

function Disabled() 
{   const [isActive, setActive] = useState("false");
      const ToggleClass = () => {
      setActive(!isActive);
      console.log("toggled")
    };
      return (
        <div className="SetButton">
          <div className="First-disable">
            <p type="text"></p>
            {"<Button variant=”text” />"}
            <button onClick={ToggleClass} className={isActive ? "disable" : "enable"}>Disabled</button>
          </div>
          <div className="Second-diseble">
            <p type="text"></p>
            {"<Button variant=”text” disabled />"}
            <button onClick={ToggleClass} className={isActive ? "text-disable" : "enable-text"}>Disabled</button>
          </div>
        </div>
    )
}
export default Disabled;