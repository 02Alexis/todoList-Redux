import React from "react";
import { TodoList } from "../components/TodoList/TodoList";
import { FormTodo } from "../components/FormTodo/FormTodo";

const AppRouter = () => {
    return (
        <div>
            <FormTodo />
            <TodoList />
        </div>
    )
}

export default AppRouter