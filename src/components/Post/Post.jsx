import React from "react";

import PostHeader from "../PostHeader/PostHeader";
import PostActions from "../PostActions/PostActions";
import Comment from "../Comment/Comment";

import "./Post.css";

function Post() {

    const post = {
        username: "john_doe",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000&h=1000&fit=crop",
        likes: 1250,
        caption: "Exploring new places and making beautiful memories. ✨",
    };

    return (
        <article className="post">

            {/* User information */}
            <PostHeader
                username={post.username}
                avatar={post.avatar}
            />

            {/* Main post image */}
            <div className="post-image-wrapper">
                <img
                    className="post-image"
                    src={post.image}
                    alt="A scenic landscape"
                />
            </div>

            {/* Like, comment, share and save */}
            <PostActions />

            {/* Likes and caption */}
            <Comment
                username={post.username}
                caption={post.caption}
                likes={post.likes}
            />

        </article>
    );
}

export default Post;