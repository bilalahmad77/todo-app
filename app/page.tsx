import AddNewTodo from "./add-new-todo";
import TodoList from "./todo-list";
import Suspense from 'react';
export default function Page() {
  return (
    
    <div>
      <AddNewTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList/>
    </div>
  );
}