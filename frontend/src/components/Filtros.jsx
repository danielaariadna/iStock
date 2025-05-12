import { useState } from 'react';

const opciones = ['Naturaleza', 'Negocios', 'Tecnología', 'Personas'];

export default function Filtros({ onFiltroChange }) {
  const [seleccionados, setSeleccionados] = useState([]);

  const toggleFiltro = (opcion) => {
    const nuevos = seleccionados.includes(opcion)
      ? seleccionados.filter((o) => o !== opcion)
      : [...seleccionados, opcion];
    setSeleccionados(nuevos);
    onFiltroChange(nuevos);
  };

  return (
    <div className="mb-4">
      <h3 className="font-bold mb-2">Filtrar por categoría</h3>
      <div className="flex flex-wrap gap-4">
        {opciones.map((opcion) => (
          <label key={opcion} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={seleccionados.includes(opcion)}
              onChange={() => toggleFiltro(opcion)}
            />
            {opcion}
          </label>
        ))}
      </div>
    </div>
  );
}
