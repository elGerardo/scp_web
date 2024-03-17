export default function Input({
  disabled = false,
  required = false,
  className = "",
  defaultValue = "",
  value,
  inputRef,
  placeholder = "",
  type = "text",
}: {
  type?: string;
  disabled?: boolean;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  className?: string;
  inputRef?: any;
  placeholder?: string;
}) {
  return (
    <input
      {...(value !== undefined && { value })}
      {...(inputRef !== undefined && { ref: inputRef })}
      placeholder={placeholder}
      className={`${className} form-control`}
      defaultValue={defaultValue}
      type={type}
      disabled={disabled}
      required={required}
    />
  );
}
