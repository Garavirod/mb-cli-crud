import React from "react";
import Button from '@material-ui/core/Button';


export default function SignInSide() {
  const guardado = localStorage.getItem("statusUser");
  console.log(JSON.parse(guardado));
  const dataUser = JSON.parse(guardado);

  return (
    <React.Fragment>
      <h1>Bienvenido {dataUser.first_name}</h1>
      <h2>Correo {dataUser.email}</h2>
      <h2>Rol {dataUser.rol}</h2>
      <Button variant="contained" color="primary" href="logout">
        Log out
      </Button>
    </React.Fragment>
  );
}
