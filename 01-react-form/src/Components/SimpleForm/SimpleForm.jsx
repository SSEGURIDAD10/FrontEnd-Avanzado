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
          <label htmlFor="simple-email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="correo@mail.com"
            id="simple-email"
            autoComplete="current-password"
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="simple-password">Password</label>
          <input
            type="password"
            name="password"
            id="simple-password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  );
};

export default SimpleForm;