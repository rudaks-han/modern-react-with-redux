import BookShow from './BookShow';

function BookList({ books, onEditBook, onDeleteBook }) {
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

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
