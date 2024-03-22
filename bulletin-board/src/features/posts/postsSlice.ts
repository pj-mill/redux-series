import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

export type Post = {
    userId: string;
    id: string;
    title: string;
    content: string;
    date: string;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        coffee: number;
    };
};

type InitialState = {
    posts: Post[];
};

const initialState: InitialState = {
    posts: [
        {
            userId: "1",
            id: "1",
            title: "Learning Redux Toolkit",
            content: "I've heard good things.",
            date: sub(new Date(), { minutes: 10 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            },
        },
        {
            userId: "1",
            id: "2",
            title: "Slices...",
            content: "The more I say slice, the more I want pizza.",
            date: sub(new Date(), { minutes: 5 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
            },
        },
    ],
};

const postReducer = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdd: {
            reducer(state, action: PayloadAction<Post>) {
                state.posts.push(action.payload);
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0,
                        },
                    },
                };
            },
        },

        reactionAdd(state, action: PayloadAction<{ postId: string; reaction: string }>) {
            const { postId, reaction } = action.payload;
            const existingPost = state.posts.find((post) => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction as keyof Post["reactions"]]++;
            }
        },
    },
});

export const selectAllPosts = (state: { posts: InitialState }) => state.posts.posts;
export const { postAdd, reactionAdd } = postReducer.actions;
export default postReducer.reducer;
