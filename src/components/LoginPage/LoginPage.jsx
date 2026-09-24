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
                        <img className="insta-logo" src={instaLogo} alt="Instagram" width={72} height={72} />

                        <div className="flex-row">
                            <h1>
                                See everyday moments from your close friends.
                            </h1>

                            <img className="insta-login-img" src={instaLogin} alt="Instagram login" width={1240} height={1025} />
                        </div>
                    </Grid>

                    <Grid className="insta_login_right_content" size={{ xs: 12, md: 4 }}>
                        <div className="login-content">
                            Faizan
                        </div>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
}

export default LoginPage;