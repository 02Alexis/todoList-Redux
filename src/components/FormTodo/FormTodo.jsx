import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createTodoAction } from "../../redux/actions/todoListActions";

const schema = yup.object({
  description: yup.string().required("No hay tarea registrada para guardar"),
});

export const FormTodo = () => {
  const dispatch = useDispatch();

  const { isEdit } = useSelector((store) => store.allList);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
        description: isEdit?.description ? isEdit.descriptio: ""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // const newTask = {
    //     ...data,
    //     status: false
    // }
    dispatch(createTodoAction(data));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Agrege una Nueva Tarea"
          {...register("description")}
        />
        <span>{errors.description?.message}</span>
        <button type="submit">Nueva Tarea</button>
      </form>
    </div>
  );
};
