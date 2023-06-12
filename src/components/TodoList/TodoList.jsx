import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAction,
  handleIsEditAction,
  updateStatusAction,
} from "../../redux/actions/todoListActions";

export const TodoList = () => {
  //   const [status, setStatus] = useState({});
  const dispatch = useDispatch();

  const { todoList } = useSelector((store) => store.allList);

  //   useEffect(() => {
  //     if (todoList.length) {
  //       todoList.forEach((item) => {
  //         setStatus((previusState) => ({
  //           ...previusState,
  //           [item.id]: item.status,
  //         }));
  //       });
  //     }
  //   }, [todoList]);

  const handleDelete = (id) => {
    dispatch(deleteTodoAction(id));
  };

  const handleEdit = (task) => {
    dispatch(handleIsEditAction(task));
  };

  return (
    <form>
      {todoList.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.status}
              onChange={() => {
                console.log("Quiero cambiar el state");
                dispatch(updateStatusAction(item.id));
              }}
            />
            <span>{item.description}</span>
          </label>
          <div>
            <span
              className="material-symbols-outlined"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </span>
            <span
              className="material-symbols-outlined"
              onClick={() => handleEdit(item)}
            >
              edit_note
            </span>
          </div>
        </div>
      ))}
    </form>
  );
};
