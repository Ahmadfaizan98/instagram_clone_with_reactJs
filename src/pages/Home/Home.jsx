import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Stories from "../../components/Stories/Stories";
import Post from "../../components/Post/Post";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

import posts from "../../data/posts";

import "./Home.css";

function Home() {
    return (
        <main className="home-page">

            {/* Top navigation */}
            <Navbar />

            {/* Main Home content */}
            <div className="home-content">

                {/* Stories section */}
                <Stories />

                {/* Feed section */}
                <section className="home-feed">

                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                        />
                    ))}

                </section>

            </div>

            {/* Mobile bottom navigation */}
            <BottomNavigation />

        </main>
    );
}

export default Home;