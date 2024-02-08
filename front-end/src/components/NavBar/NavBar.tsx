import { MouseEvent, MouseEventHandler } from "react";
import Button from "../Button/Button";
import "./NavBar.scss";

type NavBarProps = {
    name: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const NavBar = ({name, onClick}: NavBarProps) => {
    return (
        <nav className={`nav nav__${name}`}>
            <Button name="Home" className="nav-button" onClick={onClick}/>
            <Button name="A-Z" className="nav-button" onClick={onClick}/>
            <Button name="Rankings" className="nav-button" onClick={onClick}/>
        </nav>
    )
}

export default NavBar;