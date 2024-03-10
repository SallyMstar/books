import { useEffect } from "react";
import MemberCreate from "./components/MemberCreate";
import MemberList from "./components/MemberList";
import useMembersContext from "./hooks/use-members-context";

//>>>>> SET THE PAGE GROUP HERE
let group = "Building & Grounds";
let groupContent = "Several areas of ministry involve correspondence, organizing teams, office work, filing and communication. We also need help keeping the library (resource center) up to date and functional.";


function App() {

    const { fetchMembers } = useMembersContext();


    useEffect(() => {
        fetchMembers();
    }, []);
const contentStyle = {
    width: "80%",
    marginLeft: "10%",
    fontSize: "24px"
};


    // end event handler
console.log(group);
    return (
        <div className="app">
            <h1><i>{group}</i> Connection</h1>
            <h2 style={contentStyle}>{groupContent}</h2>
            <MemberList 
                group = {group} />
            <MemberCreate 
                group = {group} />
        </div>
    );
}

export default App;
