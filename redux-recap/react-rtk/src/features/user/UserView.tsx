import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./user-slice";

const UserView = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <p>Loading...</p>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {!user.loading && user.users ? (
                <div>
                    {user.users.map((user) => (
                        <p key={user.id}>{user.name}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default UserView;
