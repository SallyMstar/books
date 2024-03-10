import { createContext, useState } from "react";
import axios from 'axios';

const MembersContext = createContext();

function Provider({ children }) {  // this function "provider" can be confusing, but it just wraps the built-in Context "provider"
    const [members, setMembers] = useState([]);  // create the state for books
    

    const fetchMembers = async () => {
        const response = await axios.get('https://fake-server-52bf3c13e154.herokuapp.com/members',{  
            'Content-Type': 'applications/json'
        });

        setMembers(response.data);

        // Don't call fetchBooks() directly from App component - will cause infinite loop

    }
    const editMemberById = async (id, newMember, group) => {
        const response = await axios.put(`https://fake-server-52bf3c13e154.herokuapp.com/members/${id}`, {
            name: newMember,
            group: group
        });

        console.log(response);

        const updatedMembers = members.map((member) => {
            if (member.id === id) {
                return { ...member, ...response.data }; // this provides all updates to a record instead of just a specific piece
            }

            return member;
        })

        setMembers(updatedMembers);
    };
    

    const deleteMemberById = async (id) => {  // function to pass as prop downstream
        await axios.delete(`https://fake-server-52bf3c13e154.herokuapp.com/members/${id}`);


        const updatedMembers = members.filter((member) => {  // preserves new array of all entries that pass the test
            return member.id !== id;   // filter test will preserve all books where the id does NOT match the selection
        });

        setMembers(updatedMembers);
    };

    // begin event handler
    const createMember = async (name, group) => {  // create the post function & wait for it to complete
        const response = await axios.post('https://fake-server-52bf3c13e154.herokuapp.com/members', {
            name,
            group
        });

        const updatedMembers =[
            ...members,
            response.data  // random ID and equivalent shorthand for {id: ***, name: name}
        ];

        setMembers(updatedMembers);

    };

const valueToShare = {
    members,  // if a key name is identical to the value, you can condense to the name of the variable alone 
    deleteMemberById,
    editMemberById,
    createMember,
    fetchMembers
}

    return (
    <MembersContext.Provider value = { valueToShare }>
        {children}
    </MembersContext.Provider>
    );
} 
                                
export { Provider};
export default MembersContext;