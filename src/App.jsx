import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './Card';

function App() {

  const title=<h1>React Aplicaciones Híbridas</h1>
  let clase=1
  return (
    <div>
    {title}
    <p>Clase { clase } de React</p>
    <Card texto="Melina Escalante" edad={19}/>
  </div>
  )
}

export default App
