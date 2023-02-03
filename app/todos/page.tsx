import React from 'react';
import TodosList from './TodosList';

function Home() {
    { /* @ts-expect-error Server Component */ }
    return <div><TodosList/></div>;
}
export default Home;

