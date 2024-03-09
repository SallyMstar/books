import { useEffect } from "react";
import MemberCreate from "./components/MemberCreate";
import MemberList from "./components/MemberList";
import useMembersContext from "./hooks/use-members-context";

function App() {

    const { fetchMembers } = useMembersContext();

    useEffect(() => {
        fetchMembers();
    }, []);



    // end event handler

    return (
        <div className="app">
            <h1>Group List</h1>
            <MemberList />
            <MemberCreate  />
        </div>
    );
}

export default App;
