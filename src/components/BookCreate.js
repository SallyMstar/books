import { useState } from "react";


function BookCreate ({ onCreate }) {
    const [title, setTitle] = useState('');  // create new piece of state with empty start value

    const handleChange = (event) => {  // keep track whenever the text field is changed, receives 'event' object from input field
        setTitle(event.target.value);  // update 'Title' piece of state
    }
    const handleSubmit = (event) => { 
        event.preventDefault();  // prevent the page from automatically reloading upon submit
        onCreate(title);
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
