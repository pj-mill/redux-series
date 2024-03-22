import { selectAllUsers } from "../users/userSlice";
import { useAppSelector } from "../../app/hooks";

const PostAuthorView = ({ userId }: { userId: string }) => {
    const users = useAppSelector(selectAllUsers);

    const author = users.find((user) => user.id === userId);

    return <span>by {author ? author.name : "Unknown author"}</span>;
};
export default PostAuthorView;
