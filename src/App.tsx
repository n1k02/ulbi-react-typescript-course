import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodosItemPage from "./components/TodosItemPage";

interface Item {
    id: string
}

const App = () => {



    return (
        <div>
            <BrowserRouter>
                <div>
                    <div>
                        <NavLink to={'/users'}>Пользователи</NavLink>
                        <NavLink to={'/todos'}>Список дел</NavLink>
                    </div>
                    <Routes>
                        <Route path={'/users'} >
                            <Route element={<UserPage/>} index/>
                            <Route element={<UserItemPage/>} path={':id'}/>
                        </Route>
                        <Route path={'/users/:id'} element={<UserItemPage/>}/>
                        <Route path={'/todos'} element={<TodosPage/>}/>
                        <Route path={'/todos/:id'} element={<TodosItemPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;