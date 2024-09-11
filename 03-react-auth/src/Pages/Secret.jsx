import { useAuthContext } from '../Hook/useAuthContext'
import Counter from '../Components/Counter'

const Secret = () => {
  const { userPayload } = useAuthContext();
  return (
    <>
    <Counter />
    <h1>Secret</h1>
    {
      userPayload.role = 'ADMIN'
      ? <h2>Hola Admin</h2>
      : <h2>Hola Customer</h2>
    }
    </>
  )
}

export default Secret