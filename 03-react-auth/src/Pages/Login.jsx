import "@/styles/form.css";

const Login = () => {
  return (
    <main className='form-singin w-100 m-auto'>
      <div className="login">
        <h1>Login</h1>
        <div className="login-container">
          <form>
            <label htmlFor="simple-email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="correo@mail.com"
              id="simple-email"
              autoComplete="current-password"
            />

            <label htmlFor="simple-password">Password</label>
            <input
              type="password"
              name="password"
              id="simple-password"
              autoComplete="current-password"
            />

            <button type="submit">Iniciar Sesion</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
