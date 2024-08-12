import '@/styles/form.css'

const Signup = () => {
  return (
    <main className='form-singin w-100 m-auto'>
      <div className="login">
        <div className="login-container">
          <form
          >
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Tu Nombre"
              id="firstName"
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Tu Apellido"
              id="lastName"
            />

            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Tu Edad"
              id="age"
            />

            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="">Chose...</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="correo@mail.com"
              id="email"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
            />

            <button type="submit">Send It</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Signup