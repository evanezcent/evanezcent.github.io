import React from 'react';

function Portofolio() {
    return (
        <div id="portofolio">
            <div id="title">
                <div class="title">
                    <h3>MY PORTOFOLIO </h3>
                </div>
            </div>
            <div class="isi-porto">
                <div class="row justify-content-between">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project1.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: Project to make electronic vote for OSIS</i></p>
                            </div>
                            <div class="social">
                                <h5>Evotte</h5>
                                <p><i>WEBDEV</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project6.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: OOP project as final assignment of semester</i></p>
                            </div>
                            <div class="social">
                                <h5>Electronic Voting</h5>
                                <p><i>JAVA</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project2.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: WEBPRO project for duplicate website (tumblr) as final assignment of semester</i></p>
                            </div>
                            <div class="social">
                                <h5>Pic-Q</h5>
                                <p><i>WEBDEV</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-between">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project4.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: Make some simple face recognition</i></p>
                            </div>
                            <div class="social">
                                <h5>Simple face recognition</h5>
                                <p><i>PYTHON</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project3.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: Make some object detection, but at least that is become color detection</i></p>
                            </div>
                            <div class="social">
                                <h5>Simple Object / Color Detection</h5>
                                <p><i>PYTHON</i></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 animated fadeInUp">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={require("../assets/project5.PNG")} alt="UNKNOWN" />
                            </div>
                            <div class="team-content">
                                <p><i>Description: Simple FUZZY LOGIC algorithm</i></p>
                            </div>
                            <div class="social">
                                <h5>Fuzzy Logic</h5>
                                <p><i>JAVA</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portofolio;