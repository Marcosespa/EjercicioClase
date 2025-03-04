import { useParams, useLocation } from "react-router-dom";

export default function Detail() {
  const { mascotaId } = useParams(); 
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);

  const foto = queryParams.get("foto");
  const descripcion = queryParams.get("descripcion");

  return (
    <div>
      <h1>Mascota ID: {mascotaId}</h1>
      {foto && <img src={foto} alt={descripcion} style={{ width: "300px" }} />}
      <p>{descripcion}</p>
    </div>
  );
}
