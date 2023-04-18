export const getTodos = async (title) =>{
    const url = `https://jsonplaceholder.typicode.com/todos`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const porHacer = data.map(todo =>{
        return {
            id:todo.id,
            title:todo.title,
            userId:todo.userId,
            complete: todo.complete            
        }
    })
    
    return porHacer
} 