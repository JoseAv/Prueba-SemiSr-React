import { useState } from 'react'
import './App.css'
import Task from  './task'



function App() {
  const [task,setTask] = useState([])
  const [error,setError] = useState('')

function handlenSubmit(e){
  e.preventDefault()
  const data = new window.FormData(e.target)
  let inputPrueba = data.get('inputPrueba')

  if(inputPrueba === ' '){
    setError('Ingrese Algo')
  } else {
    setTask([...task,{id:crypto.randomUUID(),title:inputPrueba}])
    e.target.inputPrueba.value = ''
    setError('')
  }

}


  return (
    <>
    <h1>Prueba in Live Coding</h1>
      <header>
        <form className='form-prueba' onSubmit={handlenSubmit} >
          <input name='inputPrueba' type="text" required placeholder='Pasear Perro'/>
          <button >Enviar</button>
        </form>
      </header>
    {error ? '' : <p>Ingrese Algo</p> }
    <Task task={task} setTask={setTask}/>
    </>
  )
}

export default App
