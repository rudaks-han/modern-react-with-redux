import './index.css';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get('http://localhost:3001/books');
		setBooks(response.data);
	};

	const createBook = async (title) => {
		const response = await axios.post('http://localhost:3001/books', {
			title,
		});

		const updatedBooks = [...books, response.data];
		setBooks(updatedBooks);
		// setBooks((prevState) => {
		// 	return [...prevState, { id: Math.round(Math.random() * 9999), title }];
		// });
	};

	const editBookHandler = async (id, newTitle) => {
		const response = await axios.put(`http://localhost:3001/books/${id}`, {
			title: newTitle,
		});

		console.log('response', response);

		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				console.log(response.data);
				return { ...book, ...response.data };
			}

			return book;
		});
		console.log(updatedBooks);

		setBooks(updatedBooks);
	};

	const deleteBookHandler = async (id) => {
		await axios.delete(`http://localhost:3001/books/${id}`);

		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList
				onEditBook={editBookHandler}
				books={books}
				onDeleteBook={deleteBookHandler}
			/>
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
