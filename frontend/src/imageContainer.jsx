import { Link } from 'react-router-dom';
import msjIcon from "./buttons/iconMsj.png";

export default function ImageContainer({ image, id }) {
  return (
    <Link to={`/editor/${id}`} style={{ textDecoration: "none" }}>
      <div style={{ border: "1px solid", color: "#A8B2B1" }}>
        <div style={{ height: "180px", width: "240px", backgroundColor: "#E8EDED" }}>
          <img src={image} style={{ width: "90%", height: "90%", objectFit: "contain", marginTop: "6px" }} />
        </div>
        <div style={{ height: "64px", width: "240px", backgroundColor: "#A8B2B1", color: "#E8EDED", fontSize: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Signature</p>
            <p>{'#' + id}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button style={{ padding: "0", background: "none" }}>
              <img src={msjIcon} style={{ width: "12px", height: "12px" }} />
            </button>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </Link>
  );
}