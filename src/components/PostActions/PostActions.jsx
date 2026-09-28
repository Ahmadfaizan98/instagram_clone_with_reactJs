import React, { useState } from "react";
import "./PostActions.css";

function PostActions() {

    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    return (
        <div className="post-actions">

            <div className="post-actions-left">

                {/* Like */}
                <button
                    className={`post-action-button ${isLiked ? "liked" : ""}`}
                    type="button"
                    aria-label={isLiked ? "Unlike post" : "Like post"}
                    onClick={() => setIsLiked(!isLiked)}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M20.8 8.7c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10A4.7 4.7 0 0 1 12 6.2a4.7 4.7 0 0 1 8.8 2.5Z"
                            fill={isLiked ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Comment */}
                <button
                    className="post-action-button"
                    type="button"
                    aria-label="Comment"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.3-3.3A7.5 7.5 0 1 1 20 11.5Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Share */}
                <button
                    className="post-action-button"
                    type="button"
                    aria-label="Share"
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path
                            d="M22 2 11 13"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                        />
                        <path
                            d="m22 2-7 20-4-9-9-4 20-7Z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

            </div>

            {/* Save */}
            <button
                className={`post-action-button save-button ${isSaved ? "saved" : ""}`}
                type="button"
                aria-label={isSaved ? "Unsave post" : "Save post"}
                onClick={() => setIsSaved(!isSaved)}
            >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M6 3.5h12v17l-6-4-6 4v-17Z"
                        fill={isSaved ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

        </div>
    );
}

export default PostActions;