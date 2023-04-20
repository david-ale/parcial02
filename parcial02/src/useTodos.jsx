import axios from 'axios'
import { useEffect,useState } from 'react'

const useTodos = () => {
    const [todos,setTodos]= useState([])

    useEffect(()=>{
        const fetchTodos = async () =>{
            try{
                const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos (resp.data);
            } catch(error){
                console.log (error);
            }
        };
        fetchTodos();
    },[])

    return todos
}

export default useTodos