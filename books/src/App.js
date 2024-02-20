import './index.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		// BAD CODE
		// books.push({ id: 123, title: title });
		// setBooks(books);
		setBooks((prevState) => {
			return [...prevState, { id: Math.round(Math.random() * 9999), title }];
		});
	};

	const deleteBook = (id) => {
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

	return (
		<div>
			<BookList books={books} deleteBook={deleteBook} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
