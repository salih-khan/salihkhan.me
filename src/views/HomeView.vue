<template>
<div class="home">
    <!-- Header -->
    <Header />

    <!-- Snap container -->
    <div class="container-fluid snap">
        <!-- Section 1 -->
        <div class="s1 snap-section">
            <div class="content">
                <div class="img_section">
                    <img src="../assets/Images/me 3.jpg" alt="" width="400" height="400" id="home-pfp" />
                </div>

                <div class="info_section">
                    <h1>Hi, I'm Salih</h1>
                    <h3>Backend-Focused<br /></h3>
                    <h3>Web Developer</h3>

                    <p id="info_section_desc">
                        I’m a self-taught software developer,starting since 4 years and primarily focused on backend and server-side systems.

                        While I’ve built frontend projects in the past, my core interest lies in designing and implementing reliable backend architectures, APIs, and data-driven systems.

                        You can see this focus clearly in Loomverse, an actively developed project where I document architectural decisions, server logic, and platform design as they evolve.

                        Loomverse is an ongoing startup project and serves as a practical record of how I think, design, and build systems over time.
                    </p>

                    <div class="socials_container">
                        <a href="/Pdf/Salih_Khan_Tech.pdf" target="_blank" rel="noopener noreferrer">
                            <button id="my_cv">
                                My CV
                                <div class="hoverEffect">
                                    <div></div>
                                </div>
                            </button>
                        </a>

                        <img src="../assets/Images/github.svg" alt="GitHub" width="50" height="50" id="github" class="socialIcon socialIcon--github" @click="goTo('https://github.com/salih-khan')" />

                        <img src="../assets/Images/ig.webp" alt="Instagram" width="50" height="50" id="instagram" class="socialIcon socialIcon--ig" @click="goTo('https://www.instagram.com/salih.jpg__/')" />
                    </div>
                </div>
                <h1 id="scroll">I think you should scroll</h1>

            </div>

        </div>

        <div class="s1_end"></div>

        <!-- Section 2 -->

        <!-- Section 2 -->
        <div class="container-fluid s2_container snap-section">
            <div class="s2">
                
                <div class="skills-section">
    <h2 class="skills-title">Skills and Technologies</h2>

    <div class="skills-container">

    <!-- Backend Core -->
    <div class="skills-group">
        <h3>Backend</h3>
        <button class="skill node">Node.js</button>
        <button class="skill api">REST APIs</button>
        <button class="skill crud">CRUD Operations</button>
        <button class="skill http">HTTP / Request Flow</button>
        <button class="skill middleware">Middleware</button>
        <button class="skill routing">Routing</button>
        <button class="skill async">Async Programming</button>
    </div>

    <!-- Data & Database -->
    <div class="skills-group">
        <h3>Data</h3>
        <button class="skill mongodb">MongoDB</button>
        <button class="skill modeling">Data Modelling</button>
        <button class="skill queries">Query Design</button>
        <button class="skill json">JSON Handling</button>
    </div>

    <!-- API & Architecture -->
    <div class="skills-group">
        <h3>APIs & Systems</h3>
        <button class="skill rest">REST Architecture</button>
        <button class="skill validation">Validation</button>
        <button class="skill errors">Error Handling</button>
        <button class="skill state">State Management</button>
    </div>

    <!-- Security -->
    <div class="skills-group">
        <h3>Security</h3>
        <button class="skill auth">Authentication</button>
        <button class="skill jwt">JWT</button>
        <button class="skill authz">Authorization</button>
    </div>

    <!-- Frontend / Delivery -->
    <div class="skills-group">
        <h3>Frontend</h3>
        <button class="skill html">HTML</button>
        <button class="skill css">CSS</button>
        <button class="skill js">JavaScript</button>
        <button class="skill vue">Vue.js</button>
        <button class="skill nuxt">Nuxt</button>
        <button class="skill router">Vue Router</button>
        <button class="skill tailwind">Tailwind</button>
    </div>

    <!-- Tools -->
    <div class="skills-group">
        <h3>Tools</h3>
        <button class="skill git">Git</button>
        <button class="skill github">GitHub</button>
        <button class="skill cli">CLI</button>
        <button class="skill env">Environment Config</button>
    </div>

</div>

    <br/>
        <br/>
    <br/>
    <br/>
    <br/>

    <div id="skills-body">
                    <p>I work primarily with backend and server-side technologies, with a strong focus on building clear, maintainable systems rather than surface-level features. My main runtime is Node.js, where I work close to the fundamentals of request flow, asynchronous behaviour, file I/O, and API design instead of relying purely on framework abstractions. I use MongoDB as my primary database for modelling structured, evolving data, with an emphasis on explicit schemas, relationships, and long-term maintainability. On the frontend, I’m comfortable with Vue and Nuxt for building clean, functional interfaces, but these are treated as delivery layers rather than sources of application logic.
                        Overall, my work is backend-first: data models, APIs, and system design come before UI polish.</p>

                </div>
                    <br/>
    <br/>
    <br/>

</div>
                
                


                   
            </div>
        </div>

    </div>
</div>
<div class="s1_end"></div>

<div class="projects">
    <div class="vertical-line"></div>

    <div class="projects__content-outer">
        <div class="projects__content-inner">
            <img src="../assets/icons/code.png" alt="" width="50px" height="50px">
            <h1 id="projects__content-title">Projects</h1>
        </div>
    </div>

    <div class="projects__works">
        <div class="project__works__grid">

            <div class="projects__works-inner">

                <div class="projects__works-photography-portfolio projects__works-card">

                    <h1>Photography Portfolio</h1>
                    <p id="tag">In progress</p>

                    <p>
                        A dedicated photography portfolio built for a client to showcase their work professionally, focusing on clean presentation, performance, and a strong visual layout.
                    </p>
                    <div>

                        <ul>
                            <li id="html">Html</li>
                            <li id="css">Css</li>
                            <li id="javascript">Javascript</li>
                            <li id="vue">Vue.js</li>
                            <li id="mongodb">Mongodb</li>
                        </ul>
                    </div>
                </div>

                <div class="projects__works-portfolio projects__works-card">

                    <h1>My Portfolio</h1>
                    <p id="tag">Regular Updates</p>

                    <p>
                        My personal portfolio website, designed to present projects, skills, and ongoing work with a focus on clarity, structure, and practical frontend design.
                    </p>
                    <div>

                        <ul>
                            <li id="html">Html</li>
                            <li id="css">Css</li>
                            <li id="javascript">Javascript</li>
                            <li id="vue">Vue.js</li>
                            <li id="nuxt">Nuxt</li>
                            <li id="mongodb">Mongodb</li>
                            <li id="git">git</li>
                            <li id="github">github</li>

                        </ul>
                    </div>

                    <div class="projects__works-card-nav">
                        <button class="github" @click="goTo('https://github.com/salih-khan')">Github</button>
                        <span class="s3_hint" @click="goTo('https://salihkhan.me')">View Site →</span>
                    </div>
                </div>

                <div class="projects__works-photography-portfolio projects__works-card">

                    <h1>Connect2Deen</h1>
                    <p id="tag">To be re-developed</p>

                    <p>
                        A platform originally built to host a local scholar’s sermons, now being redeveloped into a modern, well-designed system with plans to expand into a full mobile app.
                    </p>
                    <div>

                        <ul>

                            <li id="html">Html</li>
                            <li id="css">Css</li>
                            <li id="javascript">Javascript</li>
                            <li id="vue">Vue.js</li>
                            <li id="firebase">Firebase</li>
                            <li id="vue-router">Vue Router</li>
                            <li id="firebase-storage">Firebase Storage</li>
                            <li id="firestore">FireStore</li>
                        </ul>
                    </div>
                    <div class="projects__works-card-nav">
                        <button class="github" @click="goTo('https://github.com/salih-khan')">Github</button>
                        <span class="s3_hint" @click="goTo('https://connect2deen.com')">View Site →</span>
                    </div>
                </div>

                <div class="projects__works-photography-portfolio projects__works-card">

                    <h1>Loomverse</h1>
                    <p id="tag">In Development</p>

                    <p>
                        An ongoing backend-focused project centered on building and experimenting with systems from first principles, including message processing, automation, and real-world integrations; designed to be a practical record of how I think, design, and build systems over time.
                    </p>
                    <div>
                        <ul>
                            <li id="vue">Vue.js</li>
                            <li id="nuxt">Nuxt</li>
                            <li id="mongodb">MongoDB</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div class="project__works-inner2">
                <div class="projects__works-portfolio projects__works-card darker">

                    <h1>Node.js File-Based CRUD Server</h1>
                    <p id="tag">Completed</p>

                    <p>
                        A minimal HTTP server built with Node.js core modules that handles routing, request parsing, and full CRUD operations using a JSON file as storage. No frameworks — just raw request/response handling and file persistence. </p>
                    <div>

                        <ul>
                            <li id="node">Node.js</li>
                            <li id="json">Json</li>
                        </ul>
                    </div>
                    <div class="projects__works-card-nav">
                        <a href="/projects/crud-server" class="s3_hint">View Documentation</a>
                    </div>

                </div>

            </div>
        </div>

    </div>

</div>

<div class="footer">
    <p class="footer__text">&copy; copyright 2026</p>
</div>

<!-- Footer -->
</template>

<script setup>
import Header from '../components/Header.vue';

const goTo = (url) => {
    window.open(url, "_blank");
};

const goToSite = (url) => {
    window.open(url, "_self");
};

const goToPdf = () => {
    window.open(
        "https://drive.google.com/file/d/1ott2Rj65i8-7poazC7nPi9-5bsBt_oIa/view?usp=sharing",
        "_blank"
    );
};
</script>

<style scoped>
/* =========================
   Base
   ========================= */
* {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;

}

.home {
    width: 100%;
    height: 100%;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

/* =========================
   Scroll snap container
   ========================= */
.snap {
    overflow-y: auto;
    scroll-behavior: smooth;
}

.snap-section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
}

/* =========================
   Section 1 (Hero)
   ========================= */
.s1 {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    position: relative;

    background-color: #fcfcfd;
    background: url("../assets/Images/beige.jpg");
    background-size: cover;
    background-position: center;
}

.content {
    width: 1000px;
    margin: auto;
    padding: 2rem;
    padding-top: 5rem;
    border-radius: 1rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    text-align: center;
    justify-content: center;
}

#home-pfp {
    border-radius: 50%;
    object-fit: cover;
    object-position: bottom;
    display: block;
}

.info_section {
    text-align: left;
    color: #000;
}

.info_section h1 {
    border-left: 5px solid black;
    padding-left: 1rem;
    margin-bottom: 0.5rem;
}

#info_section_desc {
    border: 1px solid #1f1f1f;
    border-radius: 1rem;
    padding: 1rem;
    line-height: 1.5rem;
    word-spacing: 0.25rem;
    letter-spacing: 1px;
}

.socials_container {
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Social icons (moved from inline styles; same output) */
.socialIcon {
    margin-inline: 5px;
    border-radius: 50%;
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.socialIcon:hover {
    transform: scale(1.05);
    opacity: 0.95;
}

.socialIcon--github {
    background: white;
}

/* Scroll label */
#scroll {
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 2.5rem);

    color: #000;
    font-size: 1rem;
    background-color: gold;
    border-radius: 0.5rem;
    padding: 1rem;
}

/* Section divider */
.s1_end {
    height: 10vh;
    width: 100%;
    background-color: #ffffff;

    background-image: url("../assets/Images/grid_black.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    background-size: 200px;
}

/* =========================
   Section 2 (Skills)
   ========================= */

/* =========================
   Section 2 shell
   ========================= */
.s2_container {
    background: #fcfcfd;
}

.s2 {
    width: 100%;
    font-family: "Montserrat", system-ui, sans-serif;
}

#skills {
    margin: auto;
    text-align: center;
    padding: 2rem;
    border-radius: 12px;
    font-size: 2.5rem;
}

#skills-body {
    max-width: 1000px;
    margin: auto;
    margin-bottom: 3rem;
    color: #eee;
    line-height: 1.5rem;
    text-align: justify;
}


.s2__spacer {
    height: 100px;
}


/* =========================
   Responsive
   ========================= */
@media (max-width: 1100px) {
    .grid12 {
        grid-template-columns: repeat(6, 1fr);
    }

    .col-span-7,
    .col-span-8,
    .col-span-9,
    .col-span-10,
    .col-span-11,
    .col-span-12 {
        grid-column: span 6;
    }
}

/* =========================
   Section
   ========================= */
.skills-section {
    padding: 3rem 1rem;
    background: #0f0f0f;
    text-align: center;
}

.skills-title {
    color: white;
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
}

/* =========================
   Container
   ========================= */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    gap: 0.75rem;
    max-width: 800px;
    margin: 0 auto;
    color: #eee
}

/* =========================
   Base Skill Button
   ========================= */
.skill {
    border: 1px solid transparent;
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    margin: 3px;
    font-size: 0.8rem;
    font-weight: 600;

    cursor: pointer;

    background: #1a1a1a;
    color: #ccc;

    transition: all 0.15s ease;
}

/* Hover = real UI feedback */
.skill:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0,0,0,0.4);
    color: white;
}

/* =========================
   Tech Colors (accent border style)
   ========================= */

/* HTML */
.skill.html { border-color: #e34c26; }

/* CSS */
.skill.css { border-color: #264de4; }

/* JS */
.skill.js { border-color: #f7df1e; }

/* Node */
.skill.node { border-color: #3c873a; }

/* MongoDB */
.skill.mongodb { border-color: #4db33d; }

/* Vue */
.skill.vue { border-color: #42b883; }

/* Nuxt */
.skill.nuxt { border-color: #00dc82; }

/* Git */
.skill.git { border-color: #f1502f; }

/* GitHub */
.skill.github { border-color: #ffffff; }

/* Firebase */
.skill.firebase { border-color: #ffca28; }

/* Tailwind */
.skill.tailwind { border-color: #38bdf8; }

/* Vue Router */
.skill.router { border-color: #42b883; }

/* =========================
   Active / focus feel (optional)
   ========================= */
.skill:active {
    transform: scale(0.95);
}

/* =========================
   Section 3 (Projects)
   ========================= */
.s3__outer {
    background: url("../assets/Images/dark-grid.webp");
    background-size: 200px;
}

.s3 {
    height: 100%;
    width: 100%;
    max-width: 800px;
    margin: auto;
}

#projects {
    color: white;
    font-size: 2.5rem;
    text-align: center;
    width: fit-content;
    letter-spacing: 3px;
    font-family: "Montserrat", system-ui, sans-serif;
    margin-left: 1rem;
}

.s3_grid_container {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1em;
    padding: 1em;
}

.s3_grid_container>.s3_card>img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
}

.s3_card {
    border-radius: 20px;
    padding: 1rem;
    position: relative;
    background-color: #fff;
    color: #000;
    border: 1px solid grey;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);

    /* Smooth in/out hover */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#s3-1 {
    grid-column: span 6;
    grid-row: span 6;
    border: 1px solid #ffffff;
    border-radius: 14px;
    padding: 24px;
    cursor: pointer;
    transition: transform 0.15s ease, border-color 0.15s ease;
}

#s3-2 {
    grid-column: span 3;
}

#s3-3 {
    grid-column: span 3;
}

.s3_card:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
    transform: scale(1.025);
    transform: translateY(-5px);

}

.s3_card>h1 {
    padding: 1rem;
    padding-bottom: 0;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
}

.s3_status {
    display: inline-block;
    margin: 12px;
    padding: 6px 10px;
    font-size: 0.7rem;
    border-radius: 8px;
    background: #f3f3f3;
    color: #555;
    border: 1px solid #ddd;
}

.s3_hint {
    font-size: 0.75rem;
    color: #333;
}

.s3_hint:hover {
    text-decoration: underline;
    color: #000;
    cursor: pointer;
}

.s3_card>p {
    margin: 0;
    padding: 1rem;
    line-height: 1.5em;
}

#logo-lv {
    width: 100%;
    height: 250px;
    object-fit: contain;
    margin-bottom: 1rem;
}

/* Buttons container */

.s3_card_outer_container {
    width: 100%;
    text-align: right;
}

.s3_stack {
    font-size: 0.8rem;
    color: #9a9a9a;
    letter-spacing: 0.02em;
    margin-top: 4px;
    margin-bottom: 16px;
}

.s3_card_button_container {
    position: relative;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;

    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 1em;

    transition: all 0.4s ease;
}

.s3_card_button_container::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
}

.s3_card_button_container:hover::before {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
}

.s3_card_button_container:active::before {
    filter: blur(0.2em);
}

.s3_card_button {
    font-size: 1em;
    padding: 0.6em 0.8em;
    border-radius: 1em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
}

/* Application form preview */
.s3_card_application-form {
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
}

.s3_card_application-form>img {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    object-fit: fill;
}

/* S3 projects end */

/* =========================
   CV Button (kept identical behaviour)
   ========================= */
#my_cv {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border: 0;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;
    cursor: pointer;
    color: rgb(37, 37, 37);
    z-index: 0;
    margin-inline: 5px;
    font-weight: bold;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);

    /* smooth in/out */
    transition: background 0.2s ease, color 0.2s ease, transform 0.1s ease;
}

#my_cv:hover {
    background: rgb(193, 228, 248);
    color: rgb(33, 0, 85);
}

#my_cv:active {
    transform: scale(0.97);
}

.hoverEffect {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.hoverEffect div {
    background: linear-gradient(90deg,
            rgba(222, 0, 75, 1) 0%,
            rgba(191, 70, 255, 1) 49%,
            rgba(0, 212, 255, 1) 100%);

    border-radius: 40rem;
    width: 10rem;
    height: 10rem;
    transition: 0.4s;
    filter: blur(20px);
    animation: effect infinite 3s linear;
    opacity: 0.5;
}

#my_cv:hover .hoverEffect div {
    width: 8rem;
    height: 8rem;
}

@keyframes effect {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* =========================
   Footer
   ========================= */
.footer {

    background-color: #000;

    width: 100%;
    padding-top: 1%;
    padding-bottom: 1rem;
    text-align: center;

    transition: opacity 0.3s ease-in-out;
}

.footer:hover {
    opacity: 0.9;
}

.footer__text {
    color: #fff;
    margin: 0;
}

.mediaCard__image {
    padding: 0 !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mediaCard__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
}

/* =========================
   Mobile
   ========================= */
@media (max-width: 768px) {
    .s1 {
        height: auto;
    }

    .content {
        grid-template-columns: 1fr;
        width: auto;
        gap: 1rem;
    }

    .img_section img {
        position: absolute;
        width: 100px;
        height: 100px;
        right: 50px;
        top: 125px;
    }

    .info_section>h1,
    .info_section>h3 {
        margin-left: 2rem;
    }

    .info_section p {
        margin: 2rem;
        margin-bottom: 2rem;
    }

    .info_section>div {
        text-align: center;
        margin-bottom: 0.5rem;
    }

    #info_section_desc {
        height: auto;
    }

    .socials_container {
        justify-content: center;
    }

    #scroll {
        display: none;
    }

    .s2_end_grid {
        grid-template-columns: 1fr;
        padding-bottom: 2rem;
    }

    .s2_end_grid>.card:nth-child(even) {
        margin-top: 0;
    }

    .card {
        margin: 2rem;
        margin-bottom: 0;
    }

    #projects {
        margin: 1rem;
    }

    .s3_card img {
        height: 175px;
    }

    .mongoose-logo-mobile {
        grid-column: span 2;
    }

    .nuxt-logo-mobile {
        grid-column: span 4;
    }

    .s3 {
        height: auto;
    }

}

/* projects */
.projects {
    background-color: #0f0f0f;
    position: relative;

}

.projects__content-outer {
    background-color: black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 5px double white;
}

.projects__content-inner {
    max-width: 800px;
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: middle;
    align-items: center;
    padding-left: 1rem
}

.vertical-line {
    position: absolute;
    /* stays in place while scrolling */
    left: 40px;
    /* distance from left edge */
    top: 0;
    width: 2px;
    height: 100%;
    background: white;
    z-index: 100;
}

#projects__content-title {
    font-size: 2rem;
    letter-spacing: 3px;
    margin-left: 1rem;
    color: white;
}

#projects__content-inner>img {
    -webkit-user-drag: none;
}

/* projects__works */
.projects__works {
    background-color: black;
    position: relative;
    width: 100%;
}

.project__works__grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    max-width: 1200px;
    margin: auto;
}

.projects__works-inner,
.project__works-inner2 {
    display: flex ;
    flex-direction: column ;
    width: 100% ;
    gap: 2rem;
}

.project__works-inner2 {
    margin-top: 4rem;
}

.projects__works-card {
    padding: 1rem;
    background-color: #eee;
    margin-bottom: 0;
    filter: blur(0px) sepia(50%);
    width: 100%;

}

.darker{
    filter: blur(0px) sepia(10%);

}
.projects__works-card>h1 {
    margin-bottom: 0px;
}

.projects__works-card>div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* allow tags to drop, not the badge */

}

.projects__works-card-nav {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
    margin-top: auto;
}

#tag {
    display: inline-block;
    background-color: #c0392b;
    /* strong red */
    color: white;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0.5rem 1rem 1rem 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;

}

.projects__works-card ul {
    list-style: none;
    padding: 0;
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.projects__works-card li {
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    font-size: 0.75rem;
    font-weight: 500;
    background-color: #ddd;
    color: #333;
}

/* Vue */
.projects__works-card li:nth-child(1) {
    background-color: #42b883;
    color: white;
}

/* Vue */
#vue {
    background-color: #42b883;
    color: white;
}

/* Nuxt */
#nuxt {
    background-color: #00dc82;
    color: white;
}

/* MongoDB */
#mongodb {
    background-color: #4db33d;
    color: white;
}

/* Firebase */
#firebase {
    background-color: #ffca28;
    color: #333;
}

/* GitHub */
#github {
    background-color: #24292e;
    color: white;
}

/* HTML */
#html {
    background-color: #e34c26;
    color: white;
}

/* CSS */
#css {
    background-color: #264de4;
    color: white;
}

/* JavaScript */
#javascript {
    background-color: #f7df1e;
    color: #333;
}

/* Tailwind */
#tailwind {
    background-color: #38bdf8;
    color: #0f172a;
}

/* Vue Router */
#vue-router {
    background-color: #35495e;
    color: #42b883;
}

#json {
    background-color: #f0db4f;
    color: #333;
}

.github {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    background-color: #24292e;
    color: #ffffff;

    padding: 0.35rem 0.75rem;
    border: 1px solid #1b1f23;

    font-size: 0.8rem;
    font-weight: 500;

    cursor: pointer;

    transition: background-color 0.15s ease,
        border-color 0.15s ease,
        transform 0.1s ease,
        box-shadow 0.1s ease;
}

.github:hover {
    background-color: #2f363d;
    border-color: #30363d;
}

.github:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
    .project__works__grid {
        grid-template-columns: 1fr;
        max-width: 100%;
        padding: 1rem;
    }
    .vertical-line {
        display: none;
    }

    .project__works-inner2 {
        transform: none;
    }
}

/* Small phones (optional) */
@media (max-width: 480px) {
    .project__works__grid {
        gap: 1rem;
        padding: 0.75rem;
    }
    .vertical-line {
        display: none;
    }
}
</style>
