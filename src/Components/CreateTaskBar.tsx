import styles from './CreateTaskBar.module.css'

import {AiOutlinePlusCircle} from 'react-icons/ai'
import { ChangeEvent } from 'react'
import {useState} from 'react'

interface CreateTaskBarProps{
    getTaskContent: (str: string) => void
}

export function CreateTaskBar({getTaskContent}:CreateTaskBarProps){

    const [inputValue, setInputValue] = useState('')

    function getTheInputValue(event:ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }

    function handdleCreateNewTask(){
        getTaskContent(inputValue)
    }

    return(
        <div className={styles.container}>
            <input 
            type="text" 
            placeholder='Adicionar uma nova tarefa'
            onChange={getTheInputValue}
            />
            <button onClick={handdleCreateNewTask}>
                Criar 
                <AiOutlinePlusCircle 
                size={15}
                color='#F2F2F2'
                />
            </button>
        </div>
    )
}