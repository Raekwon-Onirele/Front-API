import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixeira-24.png";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputEmail = useRef()
  const inputAge = useRef()

  async function getUsers() {
    const usersFromApi = await api.get("/users");

    setUsers(usersFromApi.data);
  }

  async function createUsers() {

    await api.post("/users", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      age: inputAge.current.value
    })

    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        
        <form action="" className="form">
          <h1>Cadastro de Usuários</h1>

          <input placeholder="Full name:" name="Name:" type="text" required ref={inputName}/>

          <input placeholder="Email:" name="Email" type="email" required ref={inputEmail}/>

          <input placeholder="Age:" name="Age" type="number" required ref={inputAge}/>
          <button type="button" onClick={createUsers}>Cadastrar</button>
        </form>

        <div className="cards">
          {users.map((user) => (
            <div key={user.id} className="card">
              <div>
                <p>
                  Name: <span> {user.name} </span>
                </p>
                <p>
                  Email: <span> {user.email} </span>
                </p>
                <p>
                  Age: <span> {user.age} </span>
                </p>
              </div>

              <button>
                <img src={Trash} alt="foto lixeira" onClick={() => deleteUsers(user.id)}/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
