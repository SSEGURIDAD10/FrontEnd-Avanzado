import { useForm } from "react-hook-form";
import { loginUserService } from "@/Services/userServices";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Hook/useAuthContext";
import "@/styles/form.css";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const onSubmit = async (data) => {
    // Enviar el formulario Signup
    try {
      const response = await loginUserService(data);
      if (response.status === 200) {
        // 201 Creado Nuevo, 200 Existe, 404 No existe
        navigate("/");
        console.log("Usuario autenticado correctamente (:");
        console.log(response.data.token);
      }
    } catch (error) {
      console.log("Ocurrio un error en Login", error);
    }
  };

  return (
    <main className="form-signin w-100 m-auto">
      <div className="login">
        <h1 className="h3 mb-3 fw-normal">Login</h1>
        <div className="login-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating">
              <input
                className="form-control"
                type="text"
                name="email"
                placeholder="correo@mail.com"
                id="simple-email"
                autoComplete="email"
              />
              {/* <p>{errors.email?.message}</p> */}
              <label htmlFor="simple-email">Email adress</label>
            </div>

            <div className="form-floating">
              <input
                className="form-control"
                type="password"
                name="password"
                id="simple-password"
                autoComplete="current-password"
                placeholder="Password"
              />
              {/* <p>{errors.password?.message}</p> */}
              <label htmlFor="simple-password">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
