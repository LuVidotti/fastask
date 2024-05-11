import "./Logo.css";
import { FaCheck } from "react-icons/fa6";

function Logo() {
    return (
        <div 
            className="logotipo"
            onClick={() => window.location.reload()}
        >
            <FaCheck className="logotipo__icon"/>
            <h1>Fastask</h1>
        </div>
    )
}

export default Logo;