import "./App.css";
import PostListView from "./features/posts/PostListView";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
    return (
        <>
            <AddPostForm />
            <PostListView />
        </>
    );
}

export default App;
