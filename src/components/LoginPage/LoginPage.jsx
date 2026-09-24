import React from "react";
import { Grid } from "@mui/material";

import instaLogo from "../../assets/insta_logo.webp";
import instaLogin from "../../assets/insta_login_img.webp";

import "./LoginPage.css";

function LoginPage() {
    return (
        <section className="insta_login_section">
            <div className="container">
                <Grid container>
                    <Grid className="insta_login_left_content" size={{ xs: 12, md: 8 }}>
                        <img className="insta-logo" src={instaLogo} alt="Instagram" width={60} height={60} />

                        <div className="flex-row">
                            <h1>
                                See everyday moments from your <span className="gradient-text"> close friends</span>.
                            </h1>

                            <img className="insta-login-img" src={instaLogin} alt="Instagram login" width={700} height={500} />
                        </div>
                    </Grid>

                    <Grid className="insta_login_right_content" size={{ xs: 12, md: 4 }}>
                        <div className="login-content">
                            <div className="login-box">
                                <h2>Log into Instagram</h2>

                                <form className="login-form">
                                    <input type="text" placeholder="Mobile number, username or email" />

                                    <input type="password" placeholder="Password" />

                                    <button type="submit" className="login-button">Log in</button>
                                </form>

                                <button type="button" className="forgot-password">Forgot password?</button>

                                <div className="login-divider">
                                    <span></span>
                                    <span>OR</span>
                                    <span></span>
                                </div>

                                <button type="button" className="facebook-login">
                                    <span className="facebook-icon">f</span> Log in with Facebook
                                </button>

                                <button type="button" className="create-account">
                                    Create new account
                                </button>

                                <div className="meta-brand">
                                    <span className="meta-logo">∞</span>
                                    <span>Meta</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default LoginPage;