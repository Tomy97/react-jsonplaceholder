import { createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../../interfaces/users.interfaces";
import { UsersService } from "../../services/users.service";

const initialState = {
    users: [],
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
    }
});