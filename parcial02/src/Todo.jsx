import useTodos from "./useTodos";


export const TodoApp = () =>{
    const todos = useTodos ();
    return (
        <>
            <h1>Todo List:</h1>
            <ul>
                {
                    todos.map((todo,key) =>{
                        return <li key={key}>
                            <p>userId: {todo.userId}</p>
                            <p>id: {todo.id}</p>
                            <p>title: {todo.title}</p>
                            <p>completed: {todo.completed ? 'true' : 'false'} </p>
                        </li>
                    })
                }
            </ul>
        </>
    )

 
}