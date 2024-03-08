import BookShow from './BookShow'; 
import BooksContext from '../context/books';
import { useContext } from 'react';

function BookList ( {books, onDelete, onEdit } ) {  // props received
    const { count, incrementCount } = useContext(BooksContext); // retrieving info using Context here
    const renderedBooks = books.map((book) => {
        return <BookShow 
            onEdit = {onEdit}
            onDelete = {onDelete}  // passing the function on downstream
            key = {book.id}
            book = {book}
            />;
    });
    return (
        <div>
           <h1> {count} 
            <button onClick={incrementCount}>  Click   </button>
           </h1>
        <span className="book-list">
            {renderedBooks}
        </span>
        </div>
    );
    }

    export default BookList;
    