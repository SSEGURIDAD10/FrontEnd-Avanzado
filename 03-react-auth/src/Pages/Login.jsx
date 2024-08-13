import "@/styles/form.css";

const Login = () => {
  return (
    <main className='form-signin w-100 m-auto'>
      <div className="login">
        <h1 className='h3 mb-3 fw-normal'>Login</h1>
        <div className="login-container">
          <form>
            <div className='form-floating'>
              <input
                className='form-control'
                type="text"
                name="email"
                placeholder="correo@mail.com"
                id="simple-email"
                autoComplete="current-password"
              />
              <label htmlFor="floatingInput">Email adress</label>
            </div>

            <div className='form-floating'>
              <input
                className='form-control'
                type="password"
                name="password"
                id="simple-password"
                autoComplete="current-password"
                placeholder="Password"
              />
              <label htmlFor="simple-password">Password</label>
            </div>

            <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
