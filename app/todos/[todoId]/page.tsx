import React from 'react';
import { Todo } from '../../../typings';
import { notFound } from 'next/navigation';
export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: string;
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } }
    );
    const data: Todo = await res.json();
    return data;
};


async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    console.log(todoId);
    if (!todo.id) {
        return notFound();
    }
    return (
        <div>
            <p className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
                #{todo.id}: {todo.title}
            </p>
            <p>
                Completed: {todo.completed ? 'yes' : 'no'}
            </p>
            <p className="border-t border-black mt-5 text-right"> By User: {todo.userId}</p>
        </div>
    );
}


export default TodoPage;

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos',
        { next: { revalidate: 60 } } // invalidates the cache after 60 seconds, server side render the new verison of the page
    );
    const todos: Todo[] = await res.json();

    // rate limited
    const trimmedTodos = todos.slice(0, 10);
    return trimmedTodos.map((todo) => {
        return {
            todoId: todo.id.toString()
        };
    });
}
