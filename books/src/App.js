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

	const editBookHandler = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return {
					...book,
					title: newTitle,
				};
			}

			return book;
		});

		setBooks(updatedBooks);
	};

	const deleteBookHandler = (id) => {
		const updatedBooks = books.filter((book) => book.id !== id);
		setBooks(updatedBooks);
	};

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
