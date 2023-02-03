import React from 'react';

type PageProps = {
	params: {
		searchTerm: string;
	}
}

type SearchResult = {
	organic_results: [
		{
			position: number;
			title: string;
			link: string;
			thumbnail: string;
			snippet: string;
		}

	]
}
const search = async (searchTerm: string) => {
	const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=72171027a8cf3bfa5dea41a599e3f76ed76ef864a3f5525335a353cdc74a8d8f`);
	const data: SearchResult = await res.json();
	return data;
};

async function SearchResults({ params: { searchTerm } }: PageProps) {
	const searchResults = await search(searchTerm);
	console.log(searchResults);
	return (
		<div> <p>	You searched for: {searchTerm}</p>
			<ol>
				{searchResults.organic_results.map((result) => {
					return <li>
						<p> {result.title}</p>
						<p> {result.thumbnail}</p>
						<p> {result.snippet}</p>


					</li>;
				}

				)}
			</ol>
		</div>
	);
}

export default SearchResults;
