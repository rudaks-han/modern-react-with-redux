import BookShow from './BookShow';

function BookCreate({ books, deleteBook }) {
	const renderedBooks = books.map((book) => {
		return <BookShow key={book.id} book={book} deleteBook={deleteBook} />;
	});

	return <div className="book-list">{renderedBooks}</div>;
}

export default BookCreate;
