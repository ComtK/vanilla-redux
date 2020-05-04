import { configureStore, createSlice } from '@reduxjs/toolkit';


/* 
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");
const setToDo = createAction("SET");

 const reducer = createReducer([], {
    [addToDo]: (state, action) => {
        state.push( {text: action.payload, id: Date.now() });
        localStorage.setItem("toDos", JSON.stringify(state));
    },
    [deleteToDo]: (state, action) => {
        const filtered = state.filter(toDo => toDo.id !== action.payload);
        localStorage.setItem("toDos", JSON.stringify(filtered));
        return filtered;
    },
    [setToDo]: (state, action) => {
        const storedToDos = JSON.parse(localStorage.getItem("toDos"));
        return storedToDos;
    },
 });

  */

  const toDos = createSlice({
      name: 'toDosReducer',
      initialState: [],
      reducers: {
          add: (state, action) => {
            state.push( {text: action.payload, id: Date.now() });
            localStorage.setItem("toDos", JSON.stringify(state));
          },
          remove: (state, action) => {
            const filtered = state.filter(toDo => toDo.id !== action.payload);
            localStorage.setItem("toDos", JSON.stringify(filtered));
            return filtered;
          },
          set: (state, action) => {
            const storedToDos = JSON.parse(localStorage.getItem("toDos"));
            return storedToDos;
          }
      }
  });

const store = configureStore({reducer: toDos.reducer});

export const {
    add,
    remove,
    set
} = toDos.actions;

export default store;