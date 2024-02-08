import { MouseEventHandler } from "react";
import "./Button.scss";

type ButtonProps = {
    name: string;
    className: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({name, className, onClick}: ButtonProps) => {
    return (
        <button className={className} id={name} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button;