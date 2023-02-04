import React from 'react';
import Link from 'next/link';
import { Todo } from '../../../typings';

const fetchTodos = async () => {
    // add timeoujt to simulate slow network
    const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
    await new Promise((resolve) => {
        return setTimeout(resolve, timeout);
    });
    const res = await fetch('https://jsonplaceholder.typicode.com/todos',
        { next: { revalidate: 60 } }
    );
    const data: Todo[] = await res.json();
    return data;
};

async function TodosList(): Promise<JSX.Element> {
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
