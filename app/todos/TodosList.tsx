import React from 'react';
import Link from 'next/link';
import { Todo } from '../../typings';

const fetchTodos = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: Todo[] = await res.json();
    return data;
};

async function TodosList() : Promise<JSX.Element>{
    const todos = await fetchTodos();

    return (
        <>
            {todos.map((todo) => {
                return <p key={todo.id}>
                    <Link href={`/todos/${todo.id}`}> Todo: {todo.id}</Link>
                </p>;
            }
            )}
        </>
    );
}

export default TodosList;
