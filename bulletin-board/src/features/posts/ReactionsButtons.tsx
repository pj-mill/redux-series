import { useAppDispatch } from "../../app/hooks";
import { Post, reactionAdd } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionsButtons = ({ post }: { post: Post }) => {
    const dispatch = useAppDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" className="reactionButton" onClick={() => dispatch(reactionAdd({ postId: post.id, reaction: name }))}>
                {emoji} {post.reactions[name as keyof Post["reactions"]]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
};

export default ReactionsButtons;
