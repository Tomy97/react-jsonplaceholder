import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { userSlice } from "../reducers/UserSlice";
import { UsersService } from "../../services/users.service";

export const UserActions = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(userSlice.actions.setUsers(UsersService));
    }, [dispatch]);

    return { users };
}