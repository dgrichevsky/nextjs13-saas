import Link from 'next/link';
import React from 'react';

function Header() {
    return (
        <header className="p-5 bg-blue-500">
            <Link className="bg-white rounded-lg px-2 py-2 text-black" href="/">Home</Link>
            <Link className="bg-white m-2 rounded-lg px-2 py-2 text-black" href="/todos">Todo</Link>

        </header>
    );
}
export default Header;
