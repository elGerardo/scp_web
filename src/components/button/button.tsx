const formatTypes = {
  primary: "btn-primary",
};

export default function DropdownItem({
  children,
  type,
  onClick,
  className = ''
}: {
  children: React.ReactNode;
  type?: "primary";
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
      className={`${className} ${type === undefined ? "btn-primary" : formatTypes[type]}`}
      onClick={(event) => handleOnClick(event)}
    >
      {children}
    </button>
  );
}
