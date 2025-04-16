const Challenge = () =>{

    const primeirValor = 4;
    const segundoValor = 9;

    const handleSomarValores = () =>{
        console.log(primeirValor + segundoValor)
    }
     
    return(
        <div>
            <h1>Valores do Desafio!</h1>
            <p>Primeiro valor: {primeirValor}</p>
            <p>Segundo valor: {segundoValor}</p>
            <button onClick={handleSomarValores}>Clique aqui para somar esses valores!</button>
        </div>
    );
};

export default Challenge;