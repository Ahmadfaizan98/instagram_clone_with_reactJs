import React from "react";
import "./PostHeader.css";

function PostHeader({ username, avatar, location }) {
    return (
        <div className="post-header">

            <div className="post-user-info">

                <img
                    className="post-user-avatar"
                    src={avatar}
                    alt={`${username}'s profile`}
                />

                <div className="post-user-details">

                    <span className="post-username">
                        {username}
                    </span>

                    <span className="post-location">
                        {location}
                    </span>

                </div>

            </div>

            <button
                className="post-more-button"
                type="button"
                aria-label="More post options"
            >
                ···
            </button>

        </div>
    );
}

export default PostHeader;