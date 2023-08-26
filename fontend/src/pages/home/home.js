import { React, useEffect, useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import BicicletasDisponibles from "../../components/bicicletasDisponibles/bicicletasDisponibles";
import axios from "axios";

function Home() {
  const [bicicletas, setBicicletas] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const getBicicletas = () => {
    setLoading(true);
    axios
      .get("http://127.0.0.1:8000/api/v1/bicicletas")
      .then((json) => setBicicletas(json.data.data))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    getBicicletas();
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    const data = {
      modelo: "Desde front",
      marca: "front",
      precio_por_hora: 800,
      foto_url:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/bicicletas", data)
      .then((json) => setMensaje(json.data.message))
      .finally(() => setLoading(false))
      .finally(() => getBicicletas());
  };

  return (
    <div className="main-home">
      <Navbar />
      <h1 className="h1-home">BICICLETAS DISPONIBLES</h1>
      <button onClick={() => onSubmit()}>Agregar bici</button>
      {mensaje}
      <div className="bicicletas-disp-size">
        <div className="bicicletas-disp-container">
          {loading
            ? "Cargando..."
            : bicicletas.map((item, index) => {
                return (
                  <BicicletasDisponibles
                    key={index}
                    modelo={item.modelo}
                    marca={item.marca}
                    precio_por_hora={item.precio_por_hora}
                    foto_url={item.foto_url}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default Home;
