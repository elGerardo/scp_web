export default function Spinner({ className = '' }: { className?: string }) {
  return (
    <div className={`border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-gray-600 ${className}`} />
  );
}
