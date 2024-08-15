import { useForm } from 'react-hook-form'
import { registerUserService } from '@/Services/userServices'
import { useNavigate } from 'react-router-dom'
import '@/styles/form.css'

const Signup = () => {

  const { register, handleSubmit, formState: { errors },} = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // Enviar el formulario Signup
    try {
      const response = await registerUserService(data);
      if(response.status === 201){ // 201 Creado Nuevo, 200 Existe, 404 No existe
        navigate('/login')
        console.log('Usuario creado correctamente')
      }
    } catch(error) {
      console.log('Ocurrio un error en Signup', error)
    }
  };

  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            onChange={() => { }}
            placeholder='John'
            autoComplete="given-name"
            {...register('first_name')}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            onChange={() => { }}
            placeholder='Doe'
            autoComplete="family-name"
            {...register('last_name')}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            onChange={() => { }}
            {...register('gender')}
          >
            <option >Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            onChange={() => { }}
            placeholder='name@example.com'
            autoComplete="email"
            {...register('email')}
          />
          <p>{errors.email?.message}</p>
          <label htmlFor='email'>Email address</label>
        </div>

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={() => { }}
            placeholder='Password'
            autoComplete='current-password'
            {...register('password')}
          />
          <p>{errors.password?.message}</p>
          <label htmlFor='password'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
      </form>
    </main>
  )
}

export default Signup