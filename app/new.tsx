'use client';
import { useRouter } from "next/navigation";
async function update(id : any, isDone: any, refresh: any) { 
  await fetch("/api/todo/update", {
    method: 'POST', 
    mode: 'no-cors',
    body: JSON.stringify({id, isDone})
  });

  refresh(); 
}

const deleteTodo = async (id:any, refresh:any ) => { 
  await fetch (`/api/todo/delete?id=${id}`, {
    method : 'DELETE'
  }); 
  refresh();  
}
export default function New({todo} : any) {
    const router = useRouter(); 
  return (
    <>
    <input type="checkbox" 
    onChange={(e)=> update(todo.id, e.target.checked, router.refresh)} 
    checked={todo.isDone}
    />   
    <span>{todo.name}</span>    
    <button onClick={()=> deleteTodo(todo.id, router.refresh)}>DELETE</button>  
    </> 
  )
}
