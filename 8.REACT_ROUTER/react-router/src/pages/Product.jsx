import { useParams } from "react-router-dom";

const Product = () => {
  // 4 - ROTA DINÂMICA
  const { id } = useParams();

  return (
    <>
      <p>ID do Produto: {id}</p>
    </>
  );
};

export default Product;
