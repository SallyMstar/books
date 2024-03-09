import { useState } from "react";
import useMembersContext from "../hooks/use-members-context";

function MemberEdit ( {member, onSubmit} ) {
    const [name, setName] = useState(member.name);
    const { editMemberById } = useMembersContext();

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault ();
        
        onSubmit();
        editMemberById(member.id, name);
    }
   
    return (
        <form onSubmit = {handleSubmit} className="book-edit">
            <label>Name  </label>
            <input className="input" value = {name} onChange = {handleChange} />
            <button className="button is-primary">
                Save Changes
            </button>
        
        </form>
    )
    }

    export default MemberEdit;