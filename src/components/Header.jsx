import Logo from "../assets/investment-calculator-logo.png";
import "../index.css";

export default function Header(){
    return (
        <header>
            <img src={Logo} alt="logo" />
            <h1>React Investment Calculator</h1>
        </header>
    )
}
