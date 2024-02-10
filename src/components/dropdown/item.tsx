export default function DropdownItem({ value, children }: {
  value: string;
  children: React.ReactNode;
}) {
  return <option value={value}>{children}</option>;
}
