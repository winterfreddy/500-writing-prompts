import React from "react";

const SplashPage = () => {
    return (
        <div className="splashpage-container">
            <label className="splashpage-title">500+ Writing Prompts</label>
            <div className="splashpage-subcontainer">
                <img className="splashpage-image" src="images/undraw_Diary_re_4jpc.png" alt="woman standing to a life-sized diary page"/>
                <div className="splashpage-subtext">
                    <label className="splashpage-subtext-label">Pick <label>a prompt</label></label>
                    <label className="splashpage-subtext-label">Write <label>a response</label></label>
                    <label className="splashpage-subtext-label">Share <label>with the world</label></label>
                </div>
            </div>
        </div>
    )
}

export default SplashPage;