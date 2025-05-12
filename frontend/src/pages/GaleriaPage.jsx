import SearchBar from '../components/SearchBar';
import Filtros from '../components/Filtros';
import ImageGrid from '../components/ImageGrid';


const mockImages = Array.from({ length: 11 }, (_, index) => ({
  id: index + 1,
  url: `/images/${index + 1}.jpg`,
}));


export default function GaleriaPage() {
  return (
    <div style={{ padding: '1rem' }}>
      <SearchBar />
      <Filtros />
      <ImageGrid images={mockImages} />
    </div>
  );
}
