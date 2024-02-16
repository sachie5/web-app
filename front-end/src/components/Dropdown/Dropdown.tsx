import { ChangeEventHandler } from "react";
import "./Dropdown.scss";

type DropdownProps = {
  label: string,
  name: string,
  items: string[] ,
  classname: string,
  onChange: ChangeEventHandler<HTMLSelectElement>,
  defaultValue: string
};

const Dropdown = ({ label, name, items, classname, onChange, defaultValue }: DropdownProps) => {
  return (
    <div className="dropdown">
      <label className={classname} htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onChange} defaultValue={defaultValue}>
        {items.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
