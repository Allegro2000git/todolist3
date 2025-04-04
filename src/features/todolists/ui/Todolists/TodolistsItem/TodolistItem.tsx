import {useAppDispatch} from '@/common/hooks/useAppDispatch.ts'
import { createTaskAC} from '@/features/todolists/model/tasks-reducer.ts'
import {CreateItemForm} from '@/common/components/CreateitemForm/CreateItemForm.tsx'
import {TodolistTitle} from "./TodolistTitle/TodolistTitle.tsx";
import {Tasks} from "./Tasks/Tasks.tsx";
import FilterButtons from "./FilterButtons/FilterButtons.tsx";
import {Todolist} from "@/features/todolists/model/todolists-reducer.ts";

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {

  const dispatch = useAppDispatch()

  const createTaskHandler = (title: string) => {
    dispatch(createTaskAC({todolistId: todolist.id, title}))
  }

  return (
      <div>
        <TodolistTitle todolist={todolist}/>
        <CreateItemForm onCreateItem={createTaskHandler}/>
        <Tasks todolist={todolist}/>
        <FilterButtons todolist={todolist}/>
      </div>
  )
}
