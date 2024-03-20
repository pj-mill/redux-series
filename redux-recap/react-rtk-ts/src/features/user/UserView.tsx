import { useEffect } from "react";
import { fetchUsers } from "./user-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserView = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);

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
