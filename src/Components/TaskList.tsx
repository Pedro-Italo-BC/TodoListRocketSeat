import styles from './TaskList.module.css'

import {TbNotebook} from 'react-icons/tb'


import { CreateTaskBar } from './CreateTaskBar'
import { Task } from './Task'

import { useState } from 'react'


interface TaskInfoOBJ{
    id: number,
    content: string,
    isChecked: boolean
}

export function TaskList(){
    
    const [taskInfo, setTaskInfo] = useState<TaskInfoOBJ[]>([])

    const [checkedsValue, setCheckedsValue] = useState(0)
 
    function setTaskContent(str:string){   
        setTaskInfo([...taskInfo, {id: Math.random(), content:str, isChecked: false
    }])
    }

    function deleteTask(id: number){
        setTaskInfo(taskInfo.filter(task => task.id != id))
    }

    function handdleToggleIsCheckedValue(id: number) {
        let oldTask = taskInfo
        
        const taskIndex = taskInfo.findIndex(task => task.id == id)

        oldTask[taskIndex].isChecked = !oldTask[taskIndex].isChecked
        
        setTaskInfo(oldTask)


        getTasksCheked()
    }

    function getTasksCheked(){
        const number = taskInfo.filter(task => {
            return task.isChecked == true
        }).length

        setCheckedsValue(number)
    }

    console.log(taskInfo)

    return(
        <div className={styles.container}>
            <CreateTaskBar getTaskContent={setTaskContent}/>
            
            <div className={styles.taskContainer}>

                <header className={styles.header}>
                    <p>Tarefas criadas <span>{taskInfo.length}</span></p>

                    <p>Concluidas <span>{checkedsValue == 0 ? '0' : `${checkedsValue} de ${taskInfo.length}`}</span></p>
                </header>

                <ul className={styles.taskList}>
                    {
                        taskInfo.length == 0 ?
                        <div className={styles.noTasksStyle}>
                            <TbNotebook color='#333333' size={56} />
                            <p>Você ainda não tem tarefas cadastradas <span>Crie e organize seus itens a fazer</span></p>
                        </div> 
                        : 
                        taskInfo.map(task => {
                            return(
                                <Task key={task.id} taskInfo={task} deleteTask={deleteTask}  handdleToggleIsCheckedValue={handdleToggleIsCheckedValue}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}