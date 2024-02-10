export default function Input(props: {
  type: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  className?: string;
  inputRef?: any;
  placeholder?: string;
}) {
  const {
    disabled = false,
    className = "",
    defaultValue = "",
    value,
    inputRef,
    placeholder = "",
  } = props;

  return (
    <input
      {...(value !== undefined && { value })}
      {...(inputRef !== undefined && { ref: inputRef })}
      placeholder={placeholder}
      className={`form-control ${className}`}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );
}
