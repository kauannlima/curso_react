import "./CarDetails.css";

const CarDetails = ({ nome, ano, km, marca }) => {
  return (
    <div>
      <ul>
        <li>Nome: {nome}</li>
        <li>Ano: {ano}</li>
        <li>Km: {km}</li>
        <li>Marca: {marca}</li>
      </ul>
    </div>
  );
};
export default CarDetails;
