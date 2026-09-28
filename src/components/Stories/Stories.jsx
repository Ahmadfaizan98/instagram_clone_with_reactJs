import React from "react";
import Story from "../Story/Story";
import "./Stories.css";

function Stories() {

    const stories = [
        {
            id: 1,
            username: "Your story",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
            isOwnStory: true,
        },
        {
            id: 2,
            username: "john_doe",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        },
        {
            id: 3,
            username: "sarah",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
        },
        {
            id: 4,
            username: "alex",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
        },
        {
            id: 5,
            username: "emma",
            image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
        },
        {
            id: 6,
            username: "michael",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        },
    ];

    return (
        <section className="stories-section" aria-label="Stories">

            <div className="stories-list">

                {stories.map((story) => (
                    <Story
                        key={story.id}
                        username={story.username}
                        image={story.image}
                        isOwnStory={story.isOwnStory}
                    />
                ))}

            </div>

        </section>
    );
}

export default Stories;