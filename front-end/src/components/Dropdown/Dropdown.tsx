import "./Dropdown.scss";

type DropdownProps = {
  label: string;
  name: string;
  items: string[];
};

const Dropdown = ({ label, name, items }: DropdownProps) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
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
