export default function Table({
  children,
  className = "w-full",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <table className={className}>{children}</table>;
}
