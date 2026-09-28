import React from "react";
import "./Story.css";

function Story({ username, image, isOwnStory = false }) {
    return (
        <button className="story" type="button">

            <div className="story-image-wrapper">

                <img
                    className="story-image"
                    src={image}
                    alt={`${username}'s story`}
                />

                {isOwnStory && (
                    <span className="story-add-icon">+</span>
                )}

            </div>

            <span className="story-username">
                {isOwnStory ? "Your story" : username}
            </span>

        </button>
    );
}

export default Story;