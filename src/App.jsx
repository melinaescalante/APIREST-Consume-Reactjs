import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './Card';
import User from './User';
import { useState, useEffect } from 'react';
function App() {
  const [sneakers, setSneakers] = useState([])
  useEffect(() => {
    const getSneakers = async () => {
      const endPoint = 'http://127.0.0.1:3000/api/sneakers'
      const resp = await fetch(endPoint)
      const sneakers = await resp
      setSneakers(sneakers.data)
    }
    getSneakers()
  }, [])

  const title = <h1 className='font-medium text-3xl mt-10'>React Aplicaciones Híbridas</h1>
  let clase = 2
  const arrayUsers = [{ name: 'Juan', email: 'juan@gmail.com', age: 19 }, { name: 'Sofia', email: 'sofia@gmail.com', age: 24 }, { name: 'Lourdes', email: 'lourdes@gmail.com', age: 28 }, { name: 'Juan Rodriguez', email: 'juanr@gmail.com', age: 25 }]
  const userData = { name: 'Juan', email: 'juan@gmail.com', age: 19 }
  return (
    <div>
      {title}
      <p className='m-2 mb-4'>Clase {clase} de React</p>
      <img src="/react.jpg" alt="Imagen de react" className='w-2/5 mx-auto' />
      <Card texto="Melina Escalante" edad={19} />
      {/* Mapeamos array */}
      {
        arrayUsers.map(user=>(
      <User name={user.name} age={user.age}  email={user.email}></User>
      ))
  }
      {/* <User name={userData.name} age={userData.age} email={userData.email}></User> */}
    </div>
  )
}

export default App
