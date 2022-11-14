import axios from "axios";

export const UsersService = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}