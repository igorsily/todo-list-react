import styles from "./task-empty.module.css";

import clipboard from "../assets/clipboard.svg";

export default function TaskEmpty() {
  return (
    <main className={styles.taskList}>
      <img src={clipboard}></img>
      <div>
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </main>
  )
}
