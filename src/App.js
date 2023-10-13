import "./styles.css";
import { useGlobalContext } from "./context";

function App() {
  const {
    item,
    setItem,
    todolist,
    setTodolist,
    edit,
    setEdit,
    index,
    setIndex
  } = useGlobalContext();

  const addItem = () => {
    setTodolist([...todolist, item]);
    setItem("");
    console.log(todolist);
  };

  const removeTask = (id) => {
    const updatedList = todolist.filter((to, ind) => ind !== id);

    setTodolist(updatedList);

    // console.log(updatedList);
  };

  const editTask = (ele, id) => {
    setEdit(true);
    setItem(ele);
    setIndex(id);
  };

  const updateTask = () => {
    const newArr = [...todolist];
    newArr[index] = item;
    setTodolist(newArr);
    setItem("");
    setEdit(false);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder="Enter task"
      />
      {edit ? (
        <button onClick={() => updateTask()}> update</button>
      ) : (
        <button onClick={() => addItem()}>Add</button>
      )}
      {todolist.map((element, ind) => {
        return (
          <div className="app">
            <span>{element} </span>
            <button onClick={() => removeTask(ind)}>remove</button>
            <button onClick={() => editTask(element, ind)}>edit</button>
          </div>
        );
      })}
    </div>
  );
}
export default App;
