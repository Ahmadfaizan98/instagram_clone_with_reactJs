import React from "react";
import "./Comment.css";

function Comment({ username, caption, likes }) {
    return (
        <div className="post-caption-section">

            <p className="post-likes">
                {likes.toLocaleString()} likes
            </p>

            <p className="post-caption">
                <span className="post-caption-username">{username}</span>{" "}
                {caption}
            </p>

            <button className="view-comments-button" type="button">
                View all comments
            </button>

            <span className="post-time">2 HOURS AGO</span>

        </div>
    );
}

export default Comment;