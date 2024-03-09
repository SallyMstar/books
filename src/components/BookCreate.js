import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookCreate () {  // prop no longer needed here with context
    const [title, setTitle] = useState('');  // create new piece of state with empty start value
    const { createBook } = useBooksContext(); // we can call the function directly now from context

    const handleChange = (event) => {  // keep track whenever the text field is changed, receives 'event' object from input field
        setTitle(event.target.value);  // update 'Title' piece of state
    }
    const handleSubmit = (event) => { 
        event.preventDefault();  // prevent the page from automatically reloading upon submit
        createBook(title);  
        setTitle('');
    }
 
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
        <form onSubmit = {handleSubmit}>
            <label>Title:  </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>
    );
}

    export default BookCreate;
