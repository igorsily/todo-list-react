import styles from "./header.module.css"

import todoLogo from "../assets/logo-todo.svg"


export default function Header() {
  return (
    <header className={styles.container}>
      <img src={todoLogo}/>
    </header>
  )
}
