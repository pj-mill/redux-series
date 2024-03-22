import { useAppSelector } from "../../app/hooks";
import { selectAllPosts } from "./postsSlice";
import PostAuthorView from "./PostAuthorView";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionsButtons";

const PostListView = () => {
    const posts = useAppSelector(selectAllPosts);
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    return (
        <>
            <h1>Posts</h1>
            {orderedPosts.map((post) => (
                <article className="post-excerpt" key={post.id}>
                    <h3>{post.title}</h3>
                    <p className="post-content">{post.content.substring(0, 100)}</p>
                    <p className="postCredit">
                        <PostAuthorView userId={post.userId} />
                        <TimeAgo timestamp={post.date} />
                    </p>
                    <ReactionButtons post={post} />
                </article>
            ))}
        </>
    );
};

export default PostListView;
