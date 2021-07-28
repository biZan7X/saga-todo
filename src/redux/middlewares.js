import { ADD_TODO } from "./actions";

import { takeEvery } from "@redux-saga/core/effects";

//& dispatching/using purpose
export function* addTodo() {
    yield takeEvery(ADD_TODO,function* (){
        //* it takes all the actions having to do with "ADD_TODO"
        //* and performs async operations for them within this func
    })
}

//& for running the middlewares in the store.js
export default function* (){
    yield* addTodo();
}

