import BookShow from './BookShow'; 
import useBooksContext from '../hooks/use-books-context';

function BookList () {  // props received no longer needed since we have context

    const { books } = useBooksContext();  //reach into context to get the Books info

    const renderedBooks = books.map((book) => {
        return (
            <BookShow // still simplest to pass just the selected book instead of bookshow reaching into context to find it
                key = {book.id} 
                book = { book } />
        );
    });

    return (
        <div className="book-list">
            {renderedBooks}
        </div>
    );
    }

    export default BookList;
    