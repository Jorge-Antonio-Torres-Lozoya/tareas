import { useState } from "react"
import AddTarea from "./components/AddTarea"
import Header from "./components/Header"
import Tareas from "./components/Tareas"



function App() {
  const [mostrarForm, setMostrarForm]=useState(false)
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminada: true,
    },
    {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminada: false,
    },
    {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminada: false,
    }
  ])

  //Borrar tarea
  const borrarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }
  const terminarTarea = (id) => {
    setTareas(tareas.map((tarea) => tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea))
  }
  const addTarea=(tarea)=>{
   const id=Math.floor(Math.random()*10000)+1
   const newTarea={id,...tarea}
   setTareas([...tareas,newTarea])

  }

  return (
    <div className="container" >
      <Header onAdd={()=> setMostrarForm(!mostrarForm)}  mostrarForm={mostrarForm} titulo="Tareas" />
      {tareas.length > 0 ? <Tareas tareas={tareas} onDelete={borrarTarea} onToggle={terminarTarea} /> : "No hay tareas para mostrar"}
    { mostrarForm &&  <AddTarea onAdd={addTarea}/>}
    </div>
  )
}

export default App
