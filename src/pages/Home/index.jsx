import { useState } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixeira-24.png";

function Home() {
  const users = [
    {
      id: "112121321",
      name: "Roberto",
      email: "raa@email",
      age: 23,
    },
    {
      id: "11233499",
      name: "bernardo",
      email: "babe@email",
      age: 89,
    },
  ];

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
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
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
