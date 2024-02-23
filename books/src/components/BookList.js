import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onEditBook, onDeleteBook }) {
	const { count, incrementCount } = useContext(BooksContext);

	const renderedBooks = books.map((book) => {
		return (
			<BookShow
				key={book.id}
				book={book}
				onEditBook={onEditBook}
				onDeleteBook={onDeleteBook}
			/>
		);
	});

	return (
		<div className="book-list">
			{count}
			<button onClick={incrementCount}>Click</button>
			{renderedBooks}
		</div>
	);
}

export default BookList;
