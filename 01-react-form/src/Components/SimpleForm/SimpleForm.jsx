// import { useForm } from "react-hook-form";
import { useState } from "react";

const SimpleForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login">
      <div className="login-container">

        <form onSubmit={handleSubmit}>
{/* La función handleSubmit se ejecuta cuando se envía el formulario,
gracias al atributo onSubmit en la etiqueta <form>. Dentro de
handleSubmit, la llamada a event.preventDefault() previene el
comportamiento por defecto del navegador, que sería recargar
la página al enviar el formulario. */}
          <label htmlFor="simple-email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="correo@mail.com"
            id="simple-email"
            autoComplete="current-password"
// onChange -> Prop de formulario. Recoge el valor en setEmail
            // onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="simple-password">Password</label>
          <input
            type="password"
            name="password"
            id="simple-password"
            autoComplete="current-password"
            // onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;