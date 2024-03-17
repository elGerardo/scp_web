const formatTypes = {
  primary: "btn-primary",
};

export default function DropdownItem({
  children,
  kind,
  onClick,
  className = ''
}: {
  children?: React.ReactNode;
  kind?: "primary";
  onClick?: (event: any) => void;
  className?: string;
}) {
  const handleOnClick = (event: any) => {
    if (onClick) {
      onClick(event); // Asegúrate de que onClick exista antes de llamarlo
    }
  };
  return (
    <button
      className={`${className} ${kind === undefined ? "btn-primary" : formatTypes[kind]}`}
      onClick={(event) => handleOnClick(event)}
    >
      {children}
    </button>
  );
}
