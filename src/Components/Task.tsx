import styles from './Task.module.css'

import {HiOutlineTrash} from 'react-icons/hi'

import {useState} from 'react'

interface TaskProps{
   
 taskInfo: { 
    id: number,
    content: string,
    isChecked: boolean 
},
deleteTask: (id: number) => void,
handdleToggleIsCheckedValue: (id:number) => void
}

export function Task({taskInfo, deleteTask, handdleToggleIsCheckedValue}:TaskProps){

    function handdleDeleteTask(){
        deleteTask(taskInfo.id)
    }

    return(
        <li className={styles.container}>
            <button className={taskInfo.isChecked == true ? styles.checkboxCheked : styles.checkbox} 
            onClick={() => {
                handdleToggleIsCheckedValue(taskInfo.id)
            }}>

            </button>

            <p>{taskInfo.content}</p>

            <button className={styles.trash} ><HiOutlineTrash color='#808080' size={20} onClick={handdleDeleteTask}/></button>
        </li>
    )
}