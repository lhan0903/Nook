import { useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard";
import {useState} from "react";
import "./styles/sign-in-landing.css"

const Login = ({ setisLoggedIn }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        // Perform login logic here
        setisLoggedIn(true); // Update isLoggedIn state to true after successful login
        navigate("/dashboard"); // Navigate to the dashboard page after login
    };

    return (
        <div className="container">
            <head>
                <meta charset="utf-8" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <title>Sign In/Landing</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jua%3A400"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Just+Me+Again+Down+Here%3A400"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jost%3A400"/>
                <link rel="stylesheet" href="./styles/sign-in-landing.css"/>
            </head>
            <body>
            <div class="sign-in-landing-VoA">
                <div class="auto-group-schr-xqA">
                    <img class="rectangle-1-U4k" src="./images/rectangle-1-drc.png"/>
                    <img class="nook-logo-1-KLG" src="./images/nook-logo-1-9vc.png"/>
                    <p class="nook-9q6">nook</p>
                    <p class="give-voice-to-your-struggles-share-your-story-and-find-solidarity-through-connecting-with-minority-groups-join-a-community-where-every-message-counts-connecting-individuals-navigating-through-various-challenges-and-discover-that-youre-not-alone-in-your-journey-j2c">Give voice to your struggles, share your story, and find solidarity through connecting with minority groups. Join a community where every message counts, connecting individuals navigating through various challenges and discover that you&#39;re not alone in your journey.</p>
                </div>
                <div class="auto-group-asnt-axL">
                    <div class="auto-group-mthz-tCL">
                        <p class="log-in-ZJU">Log In</p>
                        <div class="input-area-PYQ">youremail@domain.com</div>
                        <div class="input-area-feL">
                            <p class="youremaildomaincom-Mn4">password</p>
                            <div class="input-area-Ldz">password</div>
                        </div>
                        <p class="i-forgot-my-password-3B2">I forgot my password</p>
                        {/*<div class="group-3-txL">LOG IN</div>*/}
                        <button class="group-3-txL" onClick={handleLogin}>LOG IN</button>
                        <div class="rectangle-4-s3a">
                        </div>
                    </div>
                    <div class="auto-group-e6ex-Lhr">
                        <p class="new-to-nook-sign-up-here-RzC">New to Nook? Sign Up Here</p>
                        <div class="input-area-JYC">email@domain.com</div>
                        <div class="input-area-wr4">choose a password</div>
                        <div class="group-2-Pi4">SIGN UP</div>
                        <div class="rectangle-5-rrY">
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
};

export default Login;