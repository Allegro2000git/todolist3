import {RootState} from "@/app/store.ts";
import {Todolist} from "@/features/todolists/model/todolists-reducer.ts";

export const selectTodoLists = (state:RootState): Todolist[] => state.todoLists