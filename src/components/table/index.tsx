export default function Table({ children, className = "w-100" }: { children: React.ReactNode, className?: string }) {
  return <table className={className}>{children}</table>;
}
