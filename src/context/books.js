import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {  // this function "provider" can be confusing, but it just wraps the built-in Context "provider"
    const [count, setCount] = useState(5);// creates a piece of state & then a value to share via contextProvider
                            //then needs to be updated in App.js and in BookList.js
    const valueToShare = {
        count,                   
        incrementCount: () => {
            setCount(count+1);
        }
    };  

    return (
    <BooksContext.Provider value = {valueToShare}>
        {children}
    </BooksContext.Provider>
    );
} 
                                
export { Provider};
export default BooksContext;