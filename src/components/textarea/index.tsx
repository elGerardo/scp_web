export default function Textarea({
  id,
  rows = 4,
  required = false,
  value = "",
  placeholder = "",
  className = "",
  onChange,
  inputRef,
}: {
  id?: string;
  rows?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
  onChange?: (event: any) => void;
}) {
  const handleOnChange = (data: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(data);
  };

  const _props = {
    rows,
    required,
    value,
    placeholder,
    className,
    onChange,
    ...(id !== undefined && { id }),
    ...(onChange !== undefined && {
      onChange: (data: any) => handleOnChange(data),
    }),
    ...(inputRef !== undefined && { ref: inputRef }),
  };
  return <textarea {..._props} />;
}
