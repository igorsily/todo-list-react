import Header from "./components/header";
import "./global.css";

import { useState } from "react";
import styles from "./app.module.css";
import TaskList from "./components/task-list";

export interface TaskProps {
  id: number;
  isChecked: boolean;
  content: string;
}

function App() {

  const [taskText, setTaskText] = useState("")

  const [tasks, setTasks] = useState<TaskProps[]>([])

   const handleCreateTaks = () => {

    const task: TaskProps = {
      id: tasks.length + 1,
      isChecked: false,
      content: taskText
    }

    setTasks(state => [...state, task])
    setTaskText("")

   }

  return (
    <>
      <Header />
      <div className={styles.content}>
        <section className={styles.containerTask}>

          <input placeholder="Adicione uma nova tarefa" value={taskText} onChange={(event) => setTaskText(event.target.value)}/>

          <button onClick={handleCreateTaks}>
            Criar <p>+</p>
          </button>
        </section>

        <TaskList tasks={tasks} setTasks={setTasks}/>

      </div>
    </>
  )
}

export default App
