import {useAppSelector} from '@/common/hooks/useAppSelector.ts'
import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper'
import {TodolistItem} from "./TodolistsItem/TodolistItem.tsx";
import {selectTodoLists} from "@/features/todolists/model/todolists-selectors.ts";


export const TodoLists = () => {

  const todoLists = useAppSelector(selectTodoLists)

  return (
      <>
        {todoLists.map(todolist => (
            <Grid key={todolist.id}>
              <Paper sx={{p: '0 20px 20px 20px'}}>
                <TodolistItem todolist={todolist}/>
              </Paper>
            </Grid>
            ))}
      </>
  )
}