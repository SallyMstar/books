import { useState, useEffect } from "react";
import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);  // create the state for books

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);

        // Don't call fetchBooks() directly from App component - will cause infinite loop

    }

    useEffect(() => {
        fetchBooks();
    }, []);


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
    // end event handler

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList 
                onEdit = {editBookByID}
                books = {books} 
                onDelete = {deleteBookById}/>
            <BookCreate 
                onCreate={createBook} />
        </div>
    );
}

export default App;
