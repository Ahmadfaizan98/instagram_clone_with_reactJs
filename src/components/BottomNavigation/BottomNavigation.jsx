import React from "react";

import {
    Home,
    Movie,
    ChatBubble,
    Search,
    AccountCircle
} from "@mui/icons-material";

import "./BottomNavigation.css";

function BottomNavigation() {
    return (
        <nav
            className="bottom-navigation"
            aria-label="Main navigation"
        >

            {/* Home */}
            <button
                className="bottom-nav-item active"
                type="button"
                aria-label="Home"
            >
                <Home />
            </button>

            {/* Reels */}
            <button
                className="bottom-nav-item"
                type="button"
                aria-label="Reels"
            >
                <Movie />
            </button>

            {/* Direct Messages */}
            <button
                className="bottom-nav-item"
                type="button"
                aria-label="Messages"
            >
                <ChatBubble />
            </button>

            {/* Search */}
            <button
                className="bottom-nav-item"
                type="button"
                aria-label="Search"
            >
                <Search />
            </button>

            {/* Profile */}
            <button
                className="bottom-nav-item"
                type="button"
                aria-label="Profile"
            >
                <AccountCircle />
            </button>

        </nav>
    );
}

export default BottomNavigation;