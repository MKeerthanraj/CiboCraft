import "./ParchmentForm.css"
import wok from '../assets/cooking.png';

function ParchmentForm() {
    return (
        <div id="parchment">
            <img className="wok" alt="Wok" src={wok}/>
            <div className="test"></div>
        </div>
    );
  }
  
  export default ParchmentForm;
  