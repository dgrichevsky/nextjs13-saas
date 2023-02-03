'use client';
import React, { FormEvent, useState, } from 'react';
import { useRouter } from 'next/navigation';

function Search() {
	const [search, setSearch] = useState('');
	const router = useRouter();

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearch('');
		router.push(`/search/${search}`);
	};


	return (
		<form onSubmit={handleSearch}>
			<input type="text" value={search} placeholder="search..."
				onChange={(e) => {
					return setSearch(e.target.value);
				}}>

			</input>
			<button type="submit"></button>
		</form>
	);
}

export default Search;
