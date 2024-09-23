import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/todo-item/TodoItem";
import TodoDetails from "./components/todo-details/TodoDetails";
import { Skeleton } from "@mui/material";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [todoList, setTodoList] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [todoDetails, setTodoDetails] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const fetchListOfTodos = async () => {
        try {
            setLoading(true);
            const apiResponse = await fetch("https://dummyjson.com/todos");
            const result = await apiResponse.json();
            console.log(result);

            if (result?.todos && result?.todos.length > 0) {
                setTodoList(result?.todos);
                setLoading(false);
                setErrorMsg("");
            } else {
                setTodoList([]);
                setLoading(false);
                setErrorMsg("");
            }
        } catch (e) {
            console.log(e);
            setErrorMsg("Some Error Occured");
        }
    };

    const fetchDetailsOfCurrentTodo = async (getCurrentTodoId) => {
        try {
            const apiResponse = await fetch(
                `https://dummyjson.com/todos/${getCurrentTodoId}`
            );
            const details = await apiResponse.json();
            if (details?.todo) {
                setTodoDetails(details);
                setOpenDialog(true);
            } else {
                setTodoDetails(null);
                setOpenDialog(false);
            }
        } catch (e) {
            console.log(e);
            setErrorMsg("Some Error Occured");
        }
    };

    useEffect(() => {
        fetchListOfTodos();
    }, []);

    if (loading)
        return <Skeleton variant="rectangulat" width={650} height={650} />;

    return (
        <div className={classes.mainWrapper}>
            <h1 className={classes.headerTitle}>Todo App Using Materianl UI</h1>
            <div className={classes.toListWrapper}>
                {todoList && todoList.length > 0
                    ? todoList.map((todoItem) => (
                          <TodoItem
                              todo={todoItem}
                              fetchDetailsOfCurrentTodo={
                                  fetchDetailsOfCurrentTodo
                              }
                          />
                      ))
                    : null}
            </div>
            <TodoDetails
                setOpenDialog={setOpenDialog}
                openDialog={openDialog}
                todoDetails={todoDetails}
                setTodoDetails={setTodoDetails}
            />
        </div>
    );
};

export default App;
