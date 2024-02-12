import { MouseEvent, MouseEventHandler } from "react";
import Button from "../Button/Button";
import "./NavBar.scss";
import { Link } from "react-router-dom";

type NavBarProps = {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const NavBar = ({name, onClick}: NavBarProps) => {
    return (
        <nav className={`nav nav__${name}`}>
            <Link to="/" ><Button name="Home" className="nav-button"/></Link>
            <Link to="/anime"> <Button name="A-Z" className="nav-button"/></Link>
            <Button name="Rankings" className="nav-button" onClick={onClick}/>
        </nav>
    )
}

export default NavBar;