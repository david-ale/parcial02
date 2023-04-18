export const TodoItem = ({id,userId}) =>{
    return(
        <>
            <div>
                <li src = {id} alt = {userId}/>
            </div>
        </>
    )
}