import { useState } from "react";
import useMembersContext from "../hooks/use-members-context";
import MemberShow from "./MemberShow";

function MemberCreate (group) {  // prop no longer needed here with context
    const [name, setName] = useState('');  // create new piece of state with empty start value
    
    const { createMember } = useMembersContext(); // we can call the function directly now from context

    const handleChange = (event) => {  // keep track whenever the text field is changed, receives 'event' object from input field
        setName(event.target.value);  // update 'Member' piece of state
    }
    const handleSubmit = (event) => { 
        event.preventDefault();  // prevent the page from automatically reloading upon submit
        createMember(name, group.group);  
        
        setName('');
    }

    const createStyle = {
        backgroundColor: "#0e70ab"
    }
 
    return (
        <div className="book-create" style={createStyle}>
            <h3>Commit to this Group Connection</h3>
        <form onSubmit = {handleSubmit}>
            <h3><label>Name:  </label></h3>
            <input className="input" value={name} onChange={handleChange} />
            <button className="button" >Join!</button>
        </form>
    </div>
    );
}

    export default MemberCreate;
