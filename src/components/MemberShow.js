import { useState } from "react";
import MemberEdit from "./MemberEdit";
import useMembersContext from "../hooks/use-members-context";

function MemberShow ( {member} ) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteMemberById } = useMembersContext();

    const handleDeleteClick = () => {
        deleteMemberById(member.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);  // change the true/false value to the opposite if edit is clicked
    }

    const handleSubmit = () => {
        setShowEdit(false);

    }

    console.log(member.group);

    let content = <span><h3>{member.name}</h3><h2>{member.group}</h2></span>
        if (showEdit) {  // meaning if the value of showEdit = True, then open the edit fields
            content = <MemberEdit 
                        onSubmit = {handleSubmit}
                        member = {member} 
                        group = {member.group}
                    />;
        }

    return (
    <div className="book-show">
        {/* <img 
            alt="members"
            src= {`https://picsum.photos/seed/${member.id}/300/200`}
        /> */}
        <div>{content}</div>
        <div className="actions">
            {/* <button className="edit" onClick = {handleEditClick}>
                Edit
            </button> */}
            {/* <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button> */}
        </div>
    </div>
    );
    }

    export default MemberShow;
    