
import type {FilterValues, Todolist} from '../App'
import {createAction, createReducer, nanoid} from "@reduxjs/toolkit";

export const deleteTodolistAC = createAction<{id: string}>('todoLists/deleteTodolist')
export const changeTodolistTitleAC = createAction<{id: string, title: string}>('todoLists/changeTodolistTitle')
export const changeTodolistFilterAC = createAction<{id: string, filter: FilterValues}>('todoLists/changeTodolistFilter')
export const createTodolistAC = createAction('todoLists/createTodolist', (title: string)=> {
  return {payload: { title, id: nanoid() }}
})

const initialState: Todolist[] = []

export const todoListsReducer = createReducer(initialState, builder=> {
  builder.addCase(deleteTodolistAC, (state, action) => {
    const index = state.findIndex(list => list.id === action.payload.id)
    if (index !== -1)
      {state.splice(index, 1)
      }
  })
         .addCase(createTodolistAC, (state, action) => {
        state.push( {id: action.payload.id, title: action.payload.title, filter: 'all'} )
      })
         .addCase(changeTodolistFilterAC, (state, action) => {
        const todolist = state.find(list => list.id === action.payload.id)
        if (todolist) {
          todolist.filter = action.payload.filter
        }
      })
         .addCase(changeTodolistTitleAC, (state, action) => {
        const index = state.findIndex(list => list.id === action.payload.id)
        if (index !== -1) {
          state[index].title = action.payload.title
        }
      })
})
