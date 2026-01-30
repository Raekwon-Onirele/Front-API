import { useEffect } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixeira-24.png";
import api from "../../services/api"

function Home() {
  let users = [];

  async function getUsers(){
    users = await api.get("/users")
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }, [])
  

  return (
    <>
      <div className="container">
        <form action="" className="form">
          <h1>Cadastro de Usuários</h1>

          <input placeholder="Full name:" name="Name:" type="text" required />

          <input placeholder="Email:" name="Email" type="email" required />

          <input placeholder="Age:" name="Age" type="number" required />
          <button type="button">Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>Name: <span> {user.name} </span></p>
              <p>Email: <span> {user.email} </span></p>
              <p>Age: <span> {user.age} </span></p>
            </div>

            <button>
              <img src={Trash} alt="foto lixeira" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
