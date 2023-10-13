import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [item, setItem] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState("");

  return (
    <AppContext.Provider
      value={{
        item,
        setItem,
        todolist,
        setTodolist,
        edit,
        setEdit,
        index,
        setIndex
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { ContextProvider, useGlobalContext };
