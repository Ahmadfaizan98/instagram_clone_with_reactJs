import React from "react";

import PostHeader from "../PostHeader/PostHeader";
import PostActions from "../PostActions/PostActions";
import Comment from "../Comment/Comment";

import "./Post.css";

function Post({ post }) {
    return (
        <article className="post">

            {/* User information */}
            <PostHeader
                username={post.username}
                avatar={post.avatar}
                location={post.location}
            />

            {/* Main post image */}
            <div className="post-image-wrapper">
                <img
                    className="post-image"
                    src={post.image}
                    alt={`Post shared by ${post.username}`}
                />
            </div>

            {/* Like, comment, share and save */}
            <PostActions />

            {/* Likes and caption */}
            <Comment
                username={post.username}
                caption={post.caption}
                likes={post.likes}
                time={post.time}
            />

        </article>
    );
}

export default Post;