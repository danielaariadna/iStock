export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Buscar imágenes..."
      onChange={(e) => onSearch(e.target.value)}
      className="border rounded p-2 w-full mb-4"
    />
  );
}
