
import "./bicicletasDisponibles.css";

function BicicletasDisponibles(props) {
  return (
    <div className="card">
      <img src={props.foto_url} alt="..." className="card-img-top"></img>
      <div className="card-body">
        <h5 className="card-title">{props.modelo}</h5>
        <p className="card-text">{props.marca}</p>
        <p>${props.precio_por_hora} </p>
      </div>
    </div>
  );
}

export default BicicletasDisponibles;
