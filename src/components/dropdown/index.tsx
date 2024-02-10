import DropdownItem from "./item";

export default function Dropdown({defaultValue = "", className = "", children, onChange}: {
  defaultValue?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (event: any) => void;
}) {
  const handleOnChange = (event: any) => {
    if(onChange) onChange(event);
  };

  return (
    <select
      className={`form-control ${className}`}
      value={defaultValue}
      onChange={(event) => handleOnChange(event)}
    >
      {children}
    </select>
  );
}

Dropdown.Item = DropdownItem;
