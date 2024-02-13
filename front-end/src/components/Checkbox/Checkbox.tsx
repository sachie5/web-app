import { ChangeEventHandler } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
    name: string,
    value:  string,
    label: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    checked: boolean,
    disabled: boolean

}

const Checkbox = ({name, value, label, onChange, checked, disabled}: CheckboxProps) => {

    return (
        <>
        <label htmlFor={name}>{label}</label>
        <input className={name} type="checkbox" name={name} id={name} value={value} onChange={onChange} checked={checked} disabled={disabled} />
        </>
    )
}

export default Checkbox;