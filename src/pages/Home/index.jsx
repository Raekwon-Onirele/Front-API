import { useState } from "react";
import "./style.css";
import Trash from "../../assets/icons8-lixeira-24.png"

function Home() {

  return (
    <>
      <div className="container">
        <form action="" className="form">
          <h1>Cadastro de Usuários</h1>

          <input name="Name:" type="text" required />

          <input name="Email" type="email" required />

          <input name="Age" type="number" required />
          <button type="button">Cadastrar</button>
        </form>

        <div>
          <div>
            <p>Name:</p>
            <p>Email:</p>
            <p>Age:</p>
          </div>

          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
