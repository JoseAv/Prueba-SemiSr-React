import PropTypes from 'prop-types';

const Task=({task,setTask}) =>{
    const ValidateTask = task <= 0

    function handleDeleto(id){
        console.log(id)
        console.log(task)
        const newTask = task.filter(e => e.id !== id)
        setTask(newTask)
    }


    return(
        ValidateTask ? (<p>Coloque una tarea</p>) : (task.map((e) => (<ul key={e.id}><li>{e.title} <button onClick={()=> handleDeleto(e.id)}>Eliminar</button> </li></ul>)))
    )


}


Task.propTypes = {
    task: PropTypes.array.isRequired,
    setTask: PropTypes.func.isRequired
  };
  
  export default Task;