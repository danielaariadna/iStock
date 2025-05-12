export default function ImageCard({ image }) {
  return (
    <div className="rounded shadow hover:shadow-lg transition bg-white overflow-hidden">
      <img 
        src={image.url} 
        alt={image.title} 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
      />
      <div className="p-2 text-sm font-semibold text-center">{image.title}</div>
    </div>
  );
}
