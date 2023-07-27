import { useState } from 'react';

function App(){
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const[user, setUser] = useState({});

  function handleRegister(e){
    e.preventDefault();
    alert("Usuário Cadastrado com Sucesso!")
    setUser({
      nome: nome,
      idade: idade, 
      email: email,
    })
  }
  return(
    <div>
      <h1>Cadastrando Usuario</h1>
      <form onSubmit={handleRegister}>

        <label>Nome:</label><br></br>
        <input
        placeholder='Digite seu nome:'
        value={nome}
        onChange={(e)=> setNome(e.target.value)}
        ></input><br></br>

        <label>Idade:</label><br></br>
        <input
        placeholder='Digite sua idade:'
        value={idade}
        onChange={(e)=> setIdade(e.target.value)}
        ></input><br></br>

        <label>Email:</label><br></br>
        <input
        placeholder='Digite seu email:'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        ></input><br></br>

        <button type='submit'>Registrar</button>
      </form>
      <br></br>

      <div>
        <span>Bem vindo: {user.nome}</span>
        <span>Sua idade: {user.idade}</span>
        <span>Seu email: {user.email}</span>
      </div>
    </div>
  );
}
export default App;
