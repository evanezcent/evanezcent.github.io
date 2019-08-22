import React from 'react';

function About() {
    return (
        <div id="about">
            <div id="title">
                <div class="title">
                    <h3>ABOUT ME</h3>
                </div>
            </div>
            <div class="row justify-content-between">
                <div id="data" class="col-md-4 animated fadeInLeft">
                    <div class="row justify-content-between">
                        <div class="col-md-6 badgee">Nama</div>
                        <div class="col-md-6">Pratama Yoga Santosa</div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-md-6 badgee">Date of Birth</div>
                        <div class="col-md-6">December, 16th 1999</div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-md-6 badgee">Address</div>
                        <div class="col-md-6">Wisma Kost Al- Muhayat, Citeureup, Sukabirus</div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-md-6 badgee">Phone</div>
                        <div class="col-md-6">082226651838</div>
                    </div>
                    <div class="row justify-content-between">
                        <div class="col-md-6 badgee">Email</div>
                        <div class="col-md-6">pratamayo16@gmail.com</div>
                    </div>
                </div>
                <div id="foto" class="col-md-4 text-center animated fadeInUp">
                    <div id="profpic"><img src={require('../assets/prof.jpg')} width="200px" class="img-fluid" alt="" /></div>
                    <div id="btn-chat">
                        <a href="https://api.whatsapp.com/send?phone=6282226651838" class="hvr-float-shadow">Chat Me!</a>
                    </div>
                </div>
                <div id="bio" class="col-md-4 animated fadeInRight">This is web of someone who want to be a good programmer which person who called himself No Brain Person, interested to Web Development, Artificial Intelligence, and something about Programming. A person who have a good responsibility, fast learner, and milk lover.</div>
            </div>
        </div>

    );
}

export default About;