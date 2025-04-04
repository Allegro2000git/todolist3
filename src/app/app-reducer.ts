
import {createAction, createReducer} from "@reduxjs/toolkit";

export const changeThemeAC = createAction<{themeMode: ThemeMode}>('app/changeTheme')


const initialState = {
    themeMode: 'light' as ThemeMode,
}


export const AppReducer = createReducer(initialState, builder=> {
  builder.addCase(changeThemeAC, (state, action) => {
      state.themeMode = action.payload.themeMode;
  })

})


export type ThemeMode = 'light' | 'dark'