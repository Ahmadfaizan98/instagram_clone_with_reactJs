import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            {/* Instagram logo */}
            <a href="/" className="navbar-logo" aria-label="Instagram home">
                Instagram
            </a>

            {/* Navbar actions */}
            <div className="navbar-actions">

                {/* Create post button */}
                <button className="navbar-icon-button" type="button" aria-label="Create post" >
                    <svg viewBox="0 0 24 24" aria-hidden="true" >
                        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Notifications button */}
                <button className="navbar-icon-button" type="button" aria-label="Notifications" >
                    <svg viewBox="0 0 24 24" aria-hidden="true" >
                        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10 21h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Navbar;