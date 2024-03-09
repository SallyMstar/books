import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {  // this function "provider" can be confusing, but it just wraps the built-in Context "provider"
    const [books, setBooks] = useState([]);  // create the state for books

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books',{  
            'Content-Type': 'applications/json'
        });

        setBooks(response.data);

        // Don't call fetchBooks() directly from App component - will cause infinite loop

    }
    const editBookByID = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        console.log(response);

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }; // this provides all updates to a record instead of just a specific piece
            }

            return book;
        })

        setBooks(updatedBooks);
    };
    

    const deleteBookById = async (id) => {  // function to pass as prop downstream
        await axios.delete(`http://localhost:3001/books/${id}`);


        const updatedBooks = books.filter((book) => {  // preserves new array of all entries that pass the test
            return book.id !== id;   // filter test will preserve all books where the id does NOT match the selection
        });

        setBooks(updatedBooks);
    };

    // begin event handler
    const createBook = async (title) => {  // create the post function & wait for it to complete
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updatedBooks =[
            ...books,
            response.data  // random ID and equivalent shorthand for {id: ***, title: title}
        ];

        setBooks(updatedBooks);

    };

const valueToShare = {
    books,  // if a key name is identical to the value, you can condense to the name of the variable alone 
    deleteBookById,
    editBookByID,
    createBook,
    fetchBooks
}

    return (
    <BooksContext.Provider value = { valueToShare }>
        {children}
    </BooksContext.Provider>
    );
} 
                                
export { Provider};
export default BooksContext;