<template>
<div class="home">
    <!-- Header -->
    <header class="docHeader" role="banner">
        <div class="docHeader__inner">
            <div class="docHeader__title">
                <a href="https://salihkhan.me" class="docHeader__home">salihkhan.me</a>
            </div>

            <nav class="docHeader__nav" aria-label="Documentation navigation">
                <a href="/projects/loomverse" class="docHeader__link">Loomverse Documentation</a>
            </nav>
        </div>
    </header>

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
                    <h3>Full-Stack Developer</h3>

                    <p id="info_section_desc">
                        A Full-Stack Developer who transforms ideas into interactive digital experiences. What began as a simple curiosity about coding has blossomed into a fulfilling career where creativity meets technical precision. I thrive on crafting solutions that are not only functional but also visually captivating, finding joy in every step of the journey—from brainstorming concepts to delivering the final product.
                    </p>

                    <div class="socials_container">
                        <a href="/Pdf/S.KTechCV.pdf" target="_blank" rel="noopener noreferrer">
                            <button id="my_cv">
                                My CV
                                <div class="hoverEffect">
                                    <div></div>
                                </div>
                            </button>
                        </a>

                        <img src="../assets/Images/github.svg" alt="GitHub" width="50" height="50" id="github" class="socialIcon socialIcon--github" @click="goTo('https://github.com/salih-khan')" />

                        <img src="../assets/Images/ig.webp" alt="Instagram" width="50" height="50" id="instagram" class="socialIcon socialIcon--ig" @click="goTo('https://www.instagram.com/salihkhan1701/')" />
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
                <div class="s2__spacer"></div>
                <h1 id="skills">Skills & Technologies</h1>

                <div class="grid12">
                    <!-- You decide spans per card -->
                    <div class="featureCard col-span-6 row-span-4 featureCard--media">
                        <div class="featureCard__rail">Node.js</div>

                        <div class="featureCard__image featureCard__image--rotated">
                            <img src="../assets/Images/Section 2/node.svg" alt="Node.js" />
                        </div>

                        <div class="featureCard__body">
                            <p>Node.js is the runtime I use to build backend systems and APIs. I work with it beyond surface-level frameworks, focusing on request flow, asynchronous behaviour, file I/O, and API design. My work emphasises backend-first architecture. </p>
                        </div>
                    </div>
                    <div class="featureCard col-span-6 row-span-4 featureCard--media ">
                        <div class="featureCard__rail">MongoDB</div>

                        <div class="featureCard__image featureCard__image--rotated mongo-img">
                            <img src="../assets/Images/Section 2/mongo.png" alt="MongoDB" />
                        </div>

                        <div class="featureCard__body">
                            <p>MongoDB is my primary database for modelling structured, evolving data. Here I design and implement data structures and models that meets the needs of the task and future proof further usage.</p>
                        </div>
                    </div>

                    <div class="mediaCard__image col-span-2 row-span-2">
                        <img src="../assets/Images/Section 2/vue.png" alt="Vue interface" />
                    </div>
                    <div class="mediaCard__image col-span-2 row-span-2">
                        <img src="../assets/Images/Section 2/html.png" alt="Vue interface" />
                    </div>

                    <div class="mediaCard__image col-span-2 row-span-2">
                        <img src="../assets/Images/Section 2/css.png" alt="Vue interface" />
                    </div>

                    <div class="mediaCard__image col-span-6 row-span-2 mongoose-logo-mobile">
                        <img src="../assets/Images/Section 2/mongoose.png" alt="Vue interface" />
                    </div>

                    <div class="mediaCard__image col-span-6 row-span-2 nuxt-logo-mobile">
                        <img src="../assets/Images/Section 2/nuxt.png" alt="Vue interface" />

                    </div>
                    <div class="mediaCard__image col-span-2 row-span-2">
                        <img src="../assets/Images/Section 2/firebase.png" alt="Vue interface" />
                    </div>
                    <div class="mediaCard__image col-span-2 row-span-2">
                        <img src="../assets/Images/Section 2/js.webp" alt="Vue interface" />
                    </div>

                    <!-- Add more cards whenever, just set spans -->
                    <!-- <div class="skillCard col-span-4 row-span-2">...</div> -->
                </div>

                <div class="s2__spacer"></div>
            </div>
        </div>

        <div class="padd" style="width: 100%; height: 100px; background-color: #fcfcfd;"></div>
        <!-- Section 3 -->
        <div class="s3__outer snap-section">
            <div class="s3">
                <div class="s2__spacer"></div>

                <h1 id="projects"><u>Projects</u></h1>

                <div class="s3_grid_container">
                    <div class="s3_card" @click="goToSite('/projects/loomverse')" id="s3-1">
                        <img src="../assets/Images/logo.png" alt="Loomverse Preview" id="logo-lv" />
                        <hr />

                        <p>
                            Backend-driven interactive storytelling platform focused on structured data models
                            and API-driven narrative flow. Designed to manage branching stories using server-side
                            logic rather than hardcoded paths.
                        </p>
                        <p class="s3_stack">
                            Node.js · Express · MongoDB · Nuxt
                        </p>

                        <div>
                            <span class="s3_status">In active development</span>
                            <span class="s3_hint">View project →</span>
                        </div>

                    </div>

                    <div class="s3_card" id="s3-2">
                        <h1>Connect2Deen</h1>

                        <p class="s3_desc">
                            Content platform for publishing sermons and written material with an admin workflow.
                            Built around backend APIs and structured data to manage uploads and public viewing.
                        </p>

                        <p class="s3_stack">Vue.js (vue-router) · Firebase · Firebase Storage</p>

                        <span class="s3_hint" @click="goTo('https://connect2deen.com')">View Site →</span>

                    </div>

                    <div class="s3_card" id="s3-3">

                        <h1>Application Form</h1>

                        <p>
                            An application form designed and made for a local organization in a modern format.
                        </p>
                        <p class="s3_stack">Adobe Photoshop</p>

                        <a href="Pdf/Application form.png" target="_blank">
                            <span class="s3_hint">View Form →</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p class="footer__text">&copy; copyright 2026</p>
            </div>
        </div>

    </div>

    <!-- Footer -->

</div>
</template>

<script>
export default {
    setup() {
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

        return {
            goTo,
            goToPdf,
            goToSite
        };
    },
};
</script>

<style scoped>
/* =========================
   Base
   ========================= */

.home {
    width: 100%;
    height: 100%;
    font-family: "Oregan", Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

/* =========================
   Header (docs style)
   ========================= */
.docHeader {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 1000;
}

.docHeader__inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.docHeader__home {
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: 0.2px;
    color: #000;
    text-decoration: none;
}

.docHeader__home:hover {
    text-decoration: underline;
}

.docHeader__nav {
    display: flex;
    gap: 14px;
}

.docHeader__link {
    font-weight: 500;
    font-size: 0.9rem;
    color: #6b7280;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 8px;
    transition: background 0.2s ease, color 0.2s ease;
}

.docHeader__link:hover {
    background: #f3f4f6;
    color: #111827;
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

.s2__spacer {
    height: 100px;
}

/* =========================
   Dynamic 12-column grid
   ========================= */
.grid12 {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0 18px;

    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 16px;

    grid-auto-flow: row dense;
    grid-auto-rows: 80px;
}

/* Tablet */
@media (max-width: 1100px) {
    .grid12 {
        grid-template-columns: repeat(6, minmax(0, 1fr));
        gap: 14px;
        grid-auto-rows: 72px;
    }

    /* Any “big” spans collapse to full width on 6-col */
    .col-span-7,
    .col-span-8,
    .col-span-9,
    .col-span-10,
    .col-span-11,
    .col-span-12 {
        grid-column: span 6;
    }
}

/* Mobile */
@media (max-width: 700px) {
    .grid12 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        grid-auto-rows: 64px;
        /* keeps “card rhythm” */
        grid-auto-flow: row dense;
    }

    /* Make anything 3+ span full width (2 columns) */

    .col-span-4,
    .col-span-5,
    .col-span-6,
    .col-span-7,
    .col-span-8,
    .col-span-9,
    .col-span-10,
    .col-span-11,
    .col-span-12 {
        grid-column: span 2;
    }

    /* Small cards can stay half width */
    .col-span-2,
    .col-span-1 {
        grid-column: span 1;
    }

    /* Row mapping: row-span-2 becomes 1, others cap down */
    .row-span-2 {
        grid-row: span 1;
    }

    .row-span-3 {
        grid-row: span 2;
    }

    .row-span-4 {
        grid-row: span 2;
    }

    .row-span-5,
    .row-span-6 {
        grid-row: span 3;
    }

    /* Feature cards should stack internally on mobile */
    .featureCard--media {
        grid-template-columns: 1fr;
    }

    .featureCard__rail {
        writing-mode: horizontal-tb;
        transform: none;
        border-right: 0;
        border-bottom: 1px solid #eef2f7;
        padding: 0 0 8px;
        justify-content: flex-start;
        font-size: 1.2rem;
    }

    .featureCard__image {
        height: 160px !important;

    }

    .featureCard__rail {
        display: none !important;
    }

    .featureCard__image img {
        transform: translate(-50%, -50%) rotate(-90deg) !important;
        height: auto !important;
        width: 100px !important;
    }

    .featureCard--media {
        grid-template-columns: 56px auto !important;
    }
}

/* Span utilities */
.col-span-1 {
    grid-column: span 1;
}

.col-span-2 {
    grid-column: span 2;
}

.col-span-3 {
    grid-column: span 3;
}

.col-span-4 {
    grid-column: span 4;
}

.col-span-5 {
    grid-column: span 5;
}

.col-span-6 {
    grid-column: span 6;
}

.col-span-7 {
    grid-column: span 7;
}

.col-span-8 {
    grid-column: span 8;
}

.col-span-9 {
    grid-column: span 9;
}

.col-span-10 {
    grid-column: span 10;
}

.col-span-11 {
    grid-column: span 11;
}

.col-span-12 {
    grid-column: span 12;
}

.row-span-1 {
    grid-row: span 1;
}

.row-span-2 {
    grid-row: span 2;
}

.row-span-3 {
    grid-row: span 3;
}

.row-span-4 {
    grid-row: span 4;
}

.row-span-5 {
    grid-row: span 5;
}

.row-span-6 {
    grid-row: span 6;
}

/* Make every grid child look like a card by default */
.grid12>* {
    background: #ffffff;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    padding: 18px;
    box-shadow: rgba(149, 157, 165, 0.16) 0px 8px 24px;
    height: 100%;
}

/* =========================
   Card internals (your custom components)
   ========================= */
/* =========================
   Feature card with vertical image
   ========================= */

/* Left rail stays the same */
.featureCard__rail {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    letter-spacing: 0.12em;
    font-weight: 700;
    font-size: 2rem;
    color: #111827;
    opacity: 0.75;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eef2f7;
    padding-right: 8px;
}

.featureCard--media {
    display: grid;
    grid-template-columns: 56px 110px 1fr;
    gap: 16px;
    height: 100%;
}

/* wrapper must be relative so absolute img stays inside */
.featureCard__image {
    position: relative;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
}

/* rotate the image inside the wrapper */
.featureCard__image--rotated img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-20%, -50%) rotate(-90deg);
    transform-origin: center;

    /* size rules: choose ONE strategy */
    height: 85%;
    width: auto;

    /* prevent huge surprises */
    max-width: 200%;
    max-height: 200%;

    display: block;
}

.mongo-img img {
    transform: translate(-50%, -50%) rotate(-90deg);
    height: 15%;

}

.featureCard__body h4 {
    margin: 0 0 8px;
    font-size: 1.05rem;
    font-weight: 650;
    color: #111827;
}

.featureCard__body p {
    margin: 0 0 10px;
    line-height: 1.65;
    color: #374151;
    font-weight: 420;
}

.mediaCard {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 16px;
    padding: 18px;
}

.mediaCard__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
}

.mediaCard__content h3 {
    margin: 0 0 8px;
    font-weight: 650;
}

.mediaCard__content p {
    margin: 0 0 10px;
    line-height: 1.65;
    color: #374151;
    font-weight: 420;
}

.skillCard h5 {
    margin: 0 0 10px;
    font-weight: 650;
}

.skillCard p {
    margin: 0;
    line-height: 1.65;
    color: #374151;
    font-weight: 420;
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
   Section 3 (Projects)
   ========================= */
.s3__outer {
    background: url("../assets/Images/dark-grid.webp");
    background-size: 200px;
}

.s3 {
    height: 100vh;
    width: 100%;
    max-width: 1200px;
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
    position: absolute;
    bottom: 20px;
    right: 24px;
    font-size: 0.75rem;
    color: #aaa;
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
    background: url("../assets/Images/dark-grid.webp");
    background-size: 200px;
    background-color: #000;

    width: 100%;
    padding-top: 1%;
    padding-bottom: 1rem;
    text-align: center;
    font-family: "Montserrat", system-ui, sans-serif;

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
</style>
