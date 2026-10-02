
import React, { useState } from "react";
import PostHeader from "../PostHeader/PostHeader";
import PostActions from "../PostActions/PostActions";
import Comment from "../Comment/Comment";
import "./Post.css";

function Post({ post }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [showComments, setShowComments] = useState(false);

    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    const displayedLikes = post.likes + (isLiked ? 1 : 0);

    function handleLike() {
        setIsLiked((previousValue) => !previousValue);
    }

    function handleImageDoubleClick() {
        setIsLiked(true);
    }

    function handleSave() {
        setIsSaved((previousValue) => !previousValue);
    }

    function handleComment() {
        setShowComments((previousValue) => !previousValue);
    }

    function handleCommentSubmit(event) {
        event.preventDefault();

        const trimmedComment = commentText.trim();

        if (!trimmedComment) {
            return;
        }

        setComments((previousComments) => [
            ...previousComments,
            {
                id: Date.now(),
                text: trimmedComment,
            },
        ]);

        setCommentText("");
    }

    return (
        <article className="post">
            <PostHeader
                username={post.username}
                avatar={post.avatar}
                location={post.location}
            />

            <div
                className="post-image-wrapper"
                onDoubleClick={handleImageDoubleClick}
            >
                <img
                    className="post-image"
                    src={post.image}
                    alt={`Post by ${post.username}`}
                />
            </div>

            <PostActions
                isLiked={isLiked}
                onLike={handleLike}
                isSaved={isSaved}
                onSave={handleSave}
                onComment={handleComment}
            />

            <Comment
                username={post.username}
                caption={post.caption}
                likes={displayedLikes}
                time={post.time}
            />

            {showComments && (
                <section className="post-comments-panel">
                    <div className="post-comments-list">
                        {comments.length === 0 ? (
                            <p className="no-comments">
                                No comments yet. Be the first to comment!
                            </p>
                        ) : (
                            comments.map((comment) => (
                                <div className="post-comment" key={comment.id}>
                                    <strong>you</strong>
                                    <span>{comment.text}</span>
                                </div>
                            ))
                        )}
                    </div>

                    <form
                        className="post-comment-form"
                        onSubmit={handleCommentSubmit}
                    >
                        <input
                            type="text"
                            value={commentText}
                            onChange={(event) => setCommentText(event.target.value)}
                            placeholder="Add a comment..."
                            aria-label="Write a comment"
                        />

                        <button type="submit" disabled={!commentText.trim()}>
                            Post
                        </button>
                    </form>
                </section>
            )}
        </article>
    );
}

export default Post;