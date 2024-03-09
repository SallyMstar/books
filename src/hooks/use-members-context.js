import { useContext } from "react";
import MembersContext from "../context/members";

function useMembersContext() {
    return useContext(MembersContext);
}

export default useMembersContext;