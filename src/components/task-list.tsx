import { TaskProps } from "../App";
import Task from "./task";
import styles from "./task-list.module.css";

interface TaskListProps {
  tasks: TaskProps[]
  setTasks: (tasks) => void
}


export default function TaskList({ tasks, setTasks }: TaskListProps) {

  const totalCountTask = tasks.length;

  const totalCountTaskCompleted = tasks.filter(task => task.isChecked).length;

  const handleRemoveTask = (idTask: number) => {
    const taskWithRemoveOne = tasks.filter(task => task.id !== idTask)
    setTasks(taskWithRemoveOne)
  }

  const handleToogleCheckTask = (idTask: number) => {
    const newTasks = tasks.map(task => {
      if (task.id === idTask) {
        task.isChecked = !task.isChecked
      }

      return task;
    })

    setTasks(newTasks);
  }

  return (

    <div className={styles.taskListContainer}>
      <div className={styles.taskListInfo}>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>
          <span>{totalCountTask}</span>
        </div>
        <div className={styles.taskCompleted}>
          <p>Concluídas</p>

          {totalCountTask === 0 && <span>{totalCountTask}</span>}
          {totalCountTask > 0 && <span>{totalCountTaskCompleted} de {totalCountTask}</span>}

        </div>
      </div>

      <main className={styles.taskList}>

        {tasks.map(task => (
          <Task key={task.id} task={task} onRemoveTask={handleRemoveTask} onToogleTask={handleToogleCheckTask} />
        ))}


      </main>
    </div>
  )
}
