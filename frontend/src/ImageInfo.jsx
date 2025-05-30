export default function ImageInfo({ image }) {
  return (
    <div style={{"font-size":"18px",textAlign: 'left'}}>
        Credit: {image.autor_usuario_id} <br/>
        Largest size: {image.tamaño_maximo} <br/>
        Stock photo ID: {image.id} <br/>
        Upload date: {image.fecha_subida} <br/>
        Location: {image.ubicación} <br/>
        Categories:
    </div>
  );
}