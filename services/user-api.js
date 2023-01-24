import axios from "axios";

// fetch("url")
// .then(response => response.json())
// .then(data => console.log(data))
// SHOW ALL 
const baseURL = 'http://localhost:3001/user';
// port to our express app 
// defining it here makes things easier
// the slash is for everything comming from the default route

export const getUsers = () =>{
    const URL = baseURL;// base URL
    const response = axios.get(URL);
    return response;
};

export const getUser = (user) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.get(URL);
    return response;
};

export const editUser = (id, updatedUser) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedUser);
    return response;
};

export const createUser = (User) => {
    const URL = baseURL;
    const response = axios.post(URL, User);
    return response;
};

export const deleteUser = (id) =>
{
    const URL = `${baseURL}/${id}`;
    const response = axios.delete(URL);
    return response;
};