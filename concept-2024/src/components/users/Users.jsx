import { useEffect, useState } from "react";

const Users = () => {
    const [usersList, setUsersList] = useState([]);
    const [pending, setPending] = useState(false);

    const fetchAllUsers = async () => {
        try {
            setPending(true);
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();
            // result?.users ? setUsersList(result?.users) : setUsersList([]);
            if (result?.users) {
                setUsersList(result?.users);
                setPending(false);
            } else {
                setUsersList([]);
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect(() => {
    //     fetchAllUsers();
    // }, []);

    // const handleFetchListOfUsers = () => {
    //     fetchAllUsers();
    // };

    if (pending) return <h1>...Fetching users data. Please wait</h1>;

    return (
        <div>
            <h2>Get All the User List</h2>
            <button onClick={fetchAllUsers}>Fetch Users List</button>
            <ul>
                {usersList && usersList.length > 0 ? (
                    usersList.map((userItem) => (
                        <li key={userItem?.id}>
                            <p>
                                {userItem?.firstName} {userItem?.lastName}
                            </p>
                        </li>
                    ))
                ) : (
                    <h2>No users found! please try again</h2>
                )}
            </ul>
        </div>
    );
};

export default Users;
