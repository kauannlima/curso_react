import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/paisagem.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunctions from "./components/ExecuteFunctions";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  const [count, setCount] = useState(0);

  //  const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", km: 0, color: "Branco", newCar: true },
    { id: 2, brand: "KIA", km: 3434, color: "Branco", newCar: false },
    { id: 3, brand: "Renault", km: 73847, color: "Branco", newCar: false },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <h1>Avançando no React</h1>
      {/*Imagem em public*
      <div>
       <img src="/img1.jpg" alt="Logo do React" />
      </div>
      /}
      {/*Imagem em asset
      <div>
        <img src={Paisagem} alt="Paisagem aleatoria" />
      </div>
      */}
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={userName} />

      {/*destructuring*/}
      <CarDetails brand="BMW" km={100000} color="Azul" newCar={false} />

      {/*reaproveitamento*/}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false} />

      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}
      {/* fragment*/}
      <Fragment propFragment="teste" />

      {/*Children*/}
      <Container myValue="testing">
        <p>Este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>

      {/*Executando funções!*/}
      <ExecuteFunctions myFunction={showMessage} />

      {/*State lift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </>
  );
}

export default App;
