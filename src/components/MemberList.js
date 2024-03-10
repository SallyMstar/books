import MemberShow from './MemberShow'; 
import useMembersContext from '../hooks/use-members-context';

function MemberList (group) {  // props received no longer needed since we have context

    const { members } = useMembersContext();  //reach into context to get the Books info

    const renderedMembers = members.map((member) => {
        return (
            <MemberShow // still simplest to pass just the selected book instead of bookshow reaching into context to find it
                key = {member.id} 
                member = { member } 
                group = { member.group } />
        );            

    });

    return (
        <div className="book-list">
            {renderedMembers}
        </div>
        );
    }

    export default MemberList;
    