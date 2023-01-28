"use client";
import { useRouter } from "next/navigation";
async function update(id:any, isDone:any,refresh:any) {
  //await fetch(`http://127.0.0.1:3001/api/todo/update`
  await fetch(`/api/todo/update`, {
    method: "POST",
    // mode:'no-cors', for local host
    // for vercel
    //mode:'no-cors',
    body: JSON.stringify({ id, isDone }),
  });
refresh();
}

async function deleteTodo(id:any,refresh:any) {
  //await fetch(`http://127.0.0.1:3001/api/todo/delete?id=${id}`
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
     //mode:'no-cors', for local host
     // for vercel
    // mode:'no-cors',
  });
refresh();
}


// export default function Todo({todo}:{todo:any}){
  {/* @ts-expect-error Server Component */}
  export default function Todo({todo}){
  const router = useRouter();
  return(
    <>
    <input type="checkbox" onChange={(e)=>update(todo.id,e.target.checked,router.refresh)}
    checked={todo.isDone}
    />
               {todo.name}
               <button onClick={()=>deleteTodo(todo.id,router.refresh)}>Delete</button>
    </>
  );
}