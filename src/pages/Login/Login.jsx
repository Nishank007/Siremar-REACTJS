// Manasa Mohan kumar (1001869268)
// K S Pavan Krishna (1001935714)
// Nishank Girish Gujar (1001861756)

/* Developed by Nishank*/
import './Login.css'
import MainFooter from '../Footer/MainFooter';
import MainNavBar from '../../components/Navbar/MainNavBar';
import video2 from "../../images/margarita.mp4"
import video from "../../images/margarita.ogv"
import video3 from "../../images/margarita.webm";
import image from "../../images/margarita2.png"

import React from "react";
const clipper = "#t=12,160";
function Login() {

    return (
        <div class="login-container flex-column">
            <MainNavBar />
            <div class="background-video-container">
                <video autoPlay muted loop playsinline poster={image} class="login-video">
                    <source src={video + clipper} type="video/ogv" />
                    <source src={video2 + clipper} type="video/mp4" />
                    <source src={video3 + clipper} type="video/webm" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div class="login-card">
                <div class="login-form">
                    <h1 class="login-title">Login</h1>
                    <form class="form" action="" method="">
                        <label class="form-label-wrapper">
                            <p class="form-label">Email</p>
                            <input type="email" placeholder="Enter your email" required />
                        </label>
                        <label class="form-label-wrapper">
                            <p class="form-label">Password</p>
                            <input type="password" placeholder="Enter your password" required />
                        </label>
                        <button class="login-btn primary-default-button">Sign in</button>
                    </form>
                </div>
            </div>
            <MainFooter />
        </div>

    );

}


export default Login;