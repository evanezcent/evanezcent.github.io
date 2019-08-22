import React from 'react';

function Reference() {
    return (
        <div id="reference">
            <div id="title">
                <div class="title">
                    <h3>MORE ABOUT ME</h3>
                </div>
            </div>
            <div class="isi-ref animated zoomIn">
                <div class="view view-first">
                    <img src={require("../assets/github.png")} alt="UNKNOWN" height="100%" />
                    <div class="mask">
                        <h2>Github</h2>
                        <p>Want to see my work ?</p>
                        <a href="https://github.com/evanezcent" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Read More</a>
                    </div>
                </div>
                <div class="view view-first">
                    <img src={require("../assets/linkedin.png")} alt="UNKNOWN" height="100%" />
                    <div class="mask">
                        <h2>LinkedIn</h2>
                        <p>Want to know about me ?</p>
                        <a href="https://www.linkedin.com/in/pratamays" target="_blank" rel="noopener noreferrer" class="btn btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reference;