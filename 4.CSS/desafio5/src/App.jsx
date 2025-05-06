import { useState } from "react";
import "./App.css";
import CarDetails from "./component/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  const cars = [
    { id: 1, nome: "Civic Touring", ano: 2022, km: "35000", marca: "Honda" },
    { id: 2, nome: "Corolla Altis", ano: 2021, km: "42500", marca: "Toyota" },
    { id: 3, nome: "Compass Longitude", ano: 2023, km: "18000", marca: "Jeep" },
  ];

  return (
    <>
      <h1>Desafio 5</h1>

      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          nome={car.nome}
          ano={car.ano}
          km={car.km}
          marca={car.marca}
        />
      ))}
    </>
  );
}

export default App;
