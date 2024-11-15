import type { TaskProps } from "../App";
import styles from "./task.module.css";

import { Check, Trash } from "@phosphor-icons/react";


interface TaskDataProps {
  task: TaskProps
  onRemoveTask: (idTask: number) => void
  onToogleTask: (idTask: number) => void
}


export default function Task({ task, onRemoveTask, onToogleTask }: TaskDataProps) {


  const checkboxCheckedClassname = task.isChecked
    ? styles['checkboxChecked']
    : styles['checkboxUnchecked']

  const paragraphCheckedClassname = task.isChecked
    ? styles['paragraphChecked']
    : styles['paragraphUnchecked']


  return (
    <div className={styles.task}>
      <div>
        <label htmlFor="checkbox">
          <input readOnly type="checkbox" />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`} onClick={() => onToogleTask(task.id)}>
            {task.isChecked && <Check size={12} />}
          </span>

          <p className={`${paragraphCheckedClassname}`}>
            {task.content}
          </p>
        </label>
      </div>

      <button className={styles.buttonTrash} onClick={() => onRemoveTask(task.id)}>
        <Trash />
      </button>
    </div>
  )
}
