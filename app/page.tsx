import React, { Suspense } from 'react';
import '../styles/globals.css';

import TodosList from './(users)/todos/TodosList';
function Home() {
    return (
        <div>
            <Suspense fallback={<p className="text-red-500">Loading the todos in home page</p>}>
                {/* @ts-ignore*/}
                <TodosList />
            </Suspense>
            <div>Home</div></div>);
}
export default Home;

