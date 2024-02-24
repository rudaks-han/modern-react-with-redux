import BookShow from './BookShow';
import { useContext, useEffect } from 'react';
import BooksContext from '../context/books';
import useBooksContext from '../hooks/use-books-context';

function BookList() {
	const { books } = useBooksContext();

	console.log(books);
	if (books == null) {
		return <div></div>;
	}
	const renderedBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} />;
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
