import React from 'react';
import { Todo } from '../../../typings';
type PageProps = {
	params: {
		todoId: string;
	}
}

const fetchTodo = async(todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data: Todo = await res.json();
    return data;
};


async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    console.log(todoId);
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
