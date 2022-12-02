export default function Pill({ children }) {
  return (
    <div className="flex max-h-5 items-center justify-center bg-gray-400 rounded-full p-2 text-white font-bold text-xs">
      {children}
    </div>
  );
}
