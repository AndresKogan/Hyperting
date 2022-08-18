import axios from "axios";

const fetchUsers = async () => {

    try {
        const res = await axios.get("https://gorest.co.in/public/v2/users")
        return res.data;
    } catch (err) {
        if (err.message === "Request failed with status code 404") return [];
        throw new Error(err.toString());
    }




};

export default fetchUsers;