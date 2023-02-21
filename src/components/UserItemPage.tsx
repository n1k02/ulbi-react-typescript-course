import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const {id} = useParams<string>()

    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()
    }, []);

    async function fetchUser() {
        try {
            const res = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id)
            setUser(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;