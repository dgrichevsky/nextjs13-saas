import React from 'react';
import TodosList from './TodosList';

function Home() {
    { /* @ts-expect-error Server Component */ }
    return <h1> This is where the todos will be listed...</h1>;
}
export default Home;

