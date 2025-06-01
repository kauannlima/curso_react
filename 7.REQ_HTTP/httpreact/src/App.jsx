import "./App.css";

import { useState, useEffect } from "react";

import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - CUSTOM HOOK
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [price, setPrice] = useState("");



  // 1 - RESGATANDO DADOS
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch(url);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (err) {
  //       console.error("Erro ao buscar produtos:", err);
  //     }
  //   }

  //   fetchData(); 
  // }, []);

  // 2 - ADD PRODUTOS
  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - CARREGAMENTO DINÂMICO
    // const addedProduct = await res.json()
    // setProducts((prevProducts) => [...prevProducts,addedProduct ])

    // 5 - REFATORANDO POST
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - LOADING */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R$: {product.price}
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - STATE DE LOADING NO POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar Produto" />}
        </form>
      </div>
    </div>
  );
}

export default App;
