import './global.css'
import styles from './App.module.css'

import { Header } from './Components/Header'
import { TaskList } from './Components/TaskList'

export function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <TaskList/>
    </div>
  )
}


