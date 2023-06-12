import { todoType } from "../type/todoListTypeAction"

export const updateStatusAction = (id) => {
    return{
        type: todoType.UPDATE_STATUS,
        payload: id
    }
}

export const createTodoAction = (newTask) => {
    return{
        type: todoType.CREATE_TODO,
        payload: {
            ...newTask
        }
    }
}

export const deleteTodoAction = (id) => {
    return{
        type: todoType.DELETE_TODO,
        payload: id
    }
}

export const handleIsEditAction = (task) => {
    return{
        type: todoType.HANDLE_ISEDIT,
        payload: {
            ...task
        }
    }
}

export const updateTodoAction = (updateTask) => {
    return{
        type: todoType.UPDATE_TODO,
        payload: {
            ...updateTask
        }
    }
}