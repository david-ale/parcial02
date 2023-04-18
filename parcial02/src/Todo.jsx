import { useEffect } from "react";
import { useState } from "react";
import { getTodos } from "./getTodos";
import { TodoItem } from "./TodoItem";


export const TodoApp = (title) =>{
    const [todos,setTodos] = useState([]);

    const tomarTodos = async() =>{
        const todos = await getTodos(title)
        setTodos (todos);
    }

    useEffect(()=>{
        tomarTodos();
    },[])

    return (
        <>
            <h1>Todos list</h1>
            <h3>{title}</h3>
            <div>
                {
                    todos.map((hacer,key)=>{
                        return <TodoItem key={key} {...hacer}></TodoItem>
                    })
                }
            </div>
        </>
    )

 
}