import { useEffect, useState } from "react"
import { getUserServices } from '../Services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const response = await getUserServices(token)
        if(response.status === 200){
          setUserData(response.data)
        }
      }catch(error){
        console.log('Ocurrio un error en Dashboard Page', error)
      }
    }
    fetchUserData()
  },[token])

  return (
    <>
    {userData?.first_name && <p>{userData.first_name}</p>}
    {userData?.last_name && <p>{userData.last_name}</p>}
    {userData?.gender && <p>{userData.gender}</p>}
    {userData?.email && <p>{userData.email}</p>}
    {userData?.role && <p>{userData.role}</p>}
    </>
  )
}

export default Dashboard