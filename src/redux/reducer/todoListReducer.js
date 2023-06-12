import { todoType } from "../type/todoListTypeAction";

const initialValue = {
  isEdit: null,
  todoList: [
    {
      id: 1,
      description: "Compartir material de la clase de las esion Front 4",
      status: false,
    },
    {
      id: 2,
      description: "Preparar la cena",
      status: false,
    },
    {
      id: 3,
      description: "jugar Honka Start Rail",
      status: true,
    },
  ],
};

export const todoListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case todoType.UPDATE_STATUS:
      const updateTodo = state.todoList.map((item) => {
        if (action.payload === item.id) {
          return {
            ...item,
            status: !item.status,
          };
        } else {
          return item;
        }
      });

      return {
        ...state,
        todoList: updateTodo,
      };

    case todoType.CREATE_TODO:
      const newTask = {
        ...action.payload,
        id: state.todoList.length + 1,
        status: false,
      };

      return {
        ...state,
        todoList: [...state.todoList, newTask],
      };

    case todoType.DELETE_TODO:
      const deleteTodo = state.todoList.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todoList: deleteTodo,
      };

    case todoType.HANDLE_ISEDIT:
      return {
        ...state,
        isEdit: action.payload,
        todoList: state.todoList,
      };

    case todoType.UPDATE_TODO:
      const updateTodoTwo = state.todoList.map(item => {
        if (action.payload.id === item.id) {
          return action.payload;
        } else {
          return item;
        }
      })
      return {
        ...state,
        isEdit: null,
        todoList: updateTodoTwo,
      }

    default:
      return state;
  }
};
