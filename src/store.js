import {createStore} from 'redux';

const ADD="ADD";
const DELETE="DELETE";
const SET = "SET";

const addToDo = (text) => {
    return {
        type: ADD,
        text,
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

const setToDo = () => {
    return {
        type: SET
    }
}

const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            const newToDoobj = [{text: action.text, id: Date.now()}, ...state];
            localStorage.setItem("toDos", JSON.stringify(newToDoobj));
            return newToDoobj;
        
        case DELETE:
            const filtered = state.filter(toDo => toDo.id !== action.id);
            localStorage.setItem("toDos", JSON.stringify(filtered));
            return filtered;

        case SET:
            const storedToDos = JSON.parse(localStorage.getItem("toDos"));
            return storedToDos;
        default:
            return state;
    }
}

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo,
    setToDo

};

export default store;