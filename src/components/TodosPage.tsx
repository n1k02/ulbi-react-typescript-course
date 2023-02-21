import React, {useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos()
    }, []);

    async function fetchTodos() {
        try {
            const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(res.data)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <List
            items={todos}
            renderItem={(todo:ITodo)=> <TodoItem todo={todo} key={todo.id}/>}
        />
    );
};

export default TodosPage;