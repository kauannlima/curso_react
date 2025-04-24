const UserDetails = ({ nome, idade, profissão }) => {
  return (
    <div>
      <h3>Detalhes do usuário:</h3>
      <ul>
        <li>Nome: {nome}</li>
        <li>idade: {idade}</li>
        <li>Profissão: {profissão}</li>
      </ul>
      {idade >= 18 ? (
        <p>Este usuário pode tirar a carteira de habilitação</p>
      ) : (
        <p>Este usuário não pode tirar a carteira de habilitação</p>
      )}
    </div>
  );
};

export default UserDetails;
