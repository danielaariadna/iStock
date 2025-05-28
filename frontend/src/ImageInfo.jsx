export default function ImageInfo({ image,autorName }) {
  return (
    <div style={{"font-size":"18px",textAlign: 'left'}}>
        Credit: {autorName} <br/>
        Largest size: {image.tamaño_maximo} <br/>
        Stock photo ID: {image.id} <br/>
        Upload date: {image.fecha_subida} <br/>
        Location: {image.ubicación} <br/>
        Categories:
    </div>
  );
}