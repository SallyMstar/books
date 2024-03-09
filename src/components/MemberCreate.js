import { useState } from "react";
import useMembersContext from "../hooks/use-members-context";


function MemberCreate () {  // prop no longer needed here with context
    const [name, setName] = useState('');  // create new piece of state with empty start value
    const { createMember } = useMembersContext(); // we can call the function directly now from context

    const handleChange = (event) => {  // keep track whenever the text field is changed, receives 'event' object from input field
        setName(event.target.value);  // update 'Title' piece of state
    }
    const handleSubmit = (event) => { 
        event.preventDefault();  // prevent the page from automatically reloading upon submit
        createMember(name);  
        setName('');
    }
 
    return (
        <div className="book-create">
            <h3>Commit to this Group Connection</h3>
        <form onSubmit = {handleSubmit}>
            <label>Name:  </label>
            <input className="input" value={name} onChange={handleChange} />
            <button className="button">Join!</button>
        </form>
    </div>
    );
}

    export default MemberCreate;
