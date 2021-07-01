import React , {useState}from 'react';
import './styles/Icon.css'
import icono from "./images/local_grocery_store_black_24dp.svg";


function Icon() {
  const [isActive = <img className="" src={icono} alt="Icono"/>, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
    console.log("Toggle")
  }
  return (
      <div className="SetIconButton">
        <div className="First DisableShadow">
          <p type="text" className="textFirst"></p>
          {"<Button startIcon=”local_grocery_store />"}
          <div onClick={ToggleClass}>
              { isActive 
                ? <div>
                    <button>
                      <img src={icono} alt="Icono"/>
                      <p>Default</p>
                    </button>
                </div>
                :
                <div>
                    <button>
                      <p>Default</p>
                      <img src={icono} alt="Icono"/>
                    </button>
                </div>
              }
          </div>
        </div>
        <div className="First DisableShadow">
          <p type="text" className="textFirst"></p>
          {"<Button endIcon=”local_grocery_store” />"}
          <div onClick={ToggleClass}>
              { !isActive 
                ? <div>
                    <button>
                      <img src={icono} alt="Icono"/>
                      <p>Default</p>
                    </button>
                  </div>
                :
                  <div>
                    <button>
                      <p>Default</p>
                      <img src={icono} alt="Icono"/>
                    </button>
                  </div>
              }
          </div>
        </div>
      </div>
  );
}

export default Icon