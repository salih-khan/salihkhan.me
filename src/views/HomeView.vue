<template>
    <div class="home">
        <div class="container">
            <div class="s1">
                <div class="content">
                    <div class="img_section">
                        <img src="../assets/Images/20241112_192110.jpg" alt="" width="400" height="400" style="object-fit:contain;" />
                    </div>
                    <div class="info_section">
                        <h1>Hi, I'm Salih</h1>
                        <h3>Fullstack Developer ✨</h3>
                        <p id="info_section_desc">
                            A Full-Stack Developer who transforms ideas into interactive digital experiences. What began as a simple curiosity about coding has blossomed into a fulfilling career where creativity meets technical precision. I thrive on crafting solutions that are not only functional but also visually captivating, finding joy in every step of the journey—from brainstorming concepts to delivering the final product.
                        </p>
                        <div style="display: flex;" class="socials_container">
                            <a href="/Pdf/S.KTechCV.pdf" target="_blank" rel="noopener noreferrer">
                                <button id="my_cv">
                                    My CV
                                    <div class="hoverEffect">
                                        <div></div>
                                    </div>
                                </button>
                            </a>
                            <img src="../assets/Images/github.svg" alt="GitHub" width="50" height="50" id="github" @click="goTo('https://github.com/salih-khan')" style="margin-inline: 5px; background: white; border-radius: 50%; box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.5);" />
                            <img src="../assets/Images/ig.webp" alt="Instagram" width="50" height="50" id="instagram" @click="goTo('https://www.instagram.com/salihkhan1701/')" style="margin-inline: 5px; border-radius: 50%; box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.5);" />
                        </div>
                    </div>
                </div>
                <h1 id="scroll">I think you should scroll</h1>
            </div>
            <div class="s1_end"></div>

            <div class="container s2_container">
                <div class="s2">
                    <div class="s2_inner">
                        <div class="s2_inner_content">
                            <h1><span class="s2_title_highlight">Professional</span> Qualifications</h1>
                            <!-- Spline viewer for larger screens -->
                            <video src="../assets/Images/my-skills-logo.mp4" autoplay muted loop playsinline class="spline-viewer-video" width="100%" height="300px" style="border-radius: 20px;"></video>
                            <!-- Fallback image for smaller screens -->
                            <img class="spline-fallback-image" src="../assets/Images/my_skills_spline_mobile.jpg" alt="Professional Qualifications Image" width="100%" />
                        </div>
                    </div>
                </div>

                <div class="s2_end">
                    <div class="s2_end_grid">
                        <div class="card">
                            <h5>HTML5 and CSS3 (frontend design with frameworks)</h5>
                            <p>
                                Needing no introduction, I utilize these two languages daily for all frontend work. I use them with Vue.js for frontend design as well as utilizing different frameworks such as Bootstrap, TailwindCSS, and SASS.
                            </p>
                        </div>
                        <div class="card">
                            <h5>JavaScript (used with libraries and frameworks)</h5>
                            <p>
                                I utilize JavaScript primarily with Vue.js in the script to make the website alive and functional with calls to the API and by making data available across the site.
                            </p>
                        </div>
                        <div class="card">
                            <h5>Node.js (Backend and server-side)</h5>
                            <p>
                                I have many big projects in Node.js as well as continuing to utilize it for its capabilities to apply complex logic and create complex server-side configurations and systems to make your website work, be it e-commerce or blogs
                                and dashboards.
                            </p>
                        </div>
                        <div class="card">
                            <h5>Vue.js (Frontend)</h5>
                            <p>
                                Used in every project for its simplicity and ease of use to quickly make mockups of a project and allow for quicker development. As it is for frontend, I find it a great use as part of the tech stack I use.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="padd" style="width: 100%; height: 100px;"></div>

                <!-- Section 3 on my skills -->
                <div class="s3">
                    <h1 id="projects">Projects</h1>

                    <div class="s3_grid_container">
                        <div class="s3_card">
                            <img src="../assets/Images/bt.png" alt="">
                            <h1>Branching Tales</h1>
                            <p>A design created by me to showcase some design skills</p>
                        </div>
                        <div class="s3_card">
                            <img src="../assets/Images/bmg.png" alt="">
                            <h1>Barden Motor Group LTD</h1>
                            <p>A website to browse available stock from a motor trader, utilizing a dynamic system to update stock.</p>
                            <div class="s3_card_outer_container">
                                <div class="s3_card_button_container">
                                    <button class="s3_card_button" @click="goTo('https://bardenmotorgroup.co.uk')">Website</button>
                                </div>
                            </div>
                        </div>

                        <div class="s3_card">
                            <img src="../assets/Images/c2d.png" alt="">
                            <h1>Connect2Deen</h1>
                            <p>A website for a local scholar to upload his sermons and exegesis for the benefit of the community.</p>
                            <div class="s3_card_outer_container">
                                <div class="s3_card_button_container">
                                    <button class="s3_card_button" @click="goTo('https://connect2deen.com')">Website</button>
                                </div>
                            </div>
                        </div>
                        <div class="s3_card">
                            <div class="s3_card_application-form">
                                <img src="../../public/Pdf/Screenshot 2024-12-20 221441.png" alt="">
                            </div>
                            <h1>Application for an Organization</h1>
                            <p>An application form designed and made for a local organization in a modern format.</p>
                            <div class="s3_card_outer_container">
                                <div class="s3_card_button_container">
                                    <a href="Pdf/Application1 updated_merged.pdf" target="_blank">
                                        <button class="s3_card_button">Form</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p style="color: white;">&copy; salihkhan.me</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    setup() {
        const goTo = (url) => {
            window.open(url, '_blank'); // Opens the URL in a new tab
        }

        const goToPdf = () => {
            window.open('https://drive.google.com/file/d/1ott2Rj65i8-7poazC7nPi9-5bsBt_oIa/view?usp=sharing', '_blank');

        }


        return {
            goTo,
            goToPdf,
        }
    }
}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
    background-color: black;
}

.container {
    max-width: 1200px;
    margin: auto;
}

.s1 {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    position: relative;
    background-color: black;
}

#scroll {
    position: absolute;
    bottom: 0px;
    width: auto;
    margin: auto;
    color: black;
    font-size: 1rem;
    left: 50%;
    transform: translate(-50%, 2.5rem);
    font-family: 'Oregan';
    background-color: gold;
    border-radius: 0.5rem;
    padding: 1rem;
}

.content {
    width: 1000px;
    text-align: center;
    justify-content: center;
    margin: auto;
    padding-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.info_section {
    text-align: left;
    font-weight: lighter;
    color: white;
    font-family: "Oregan";
}

.info_section h1 {
    border-left: 5px solid yellow;
    color: white;
    padding-left: 1rem;
}

/* .img_section img {
     box-shadow: 10px 10px 0px black;
} */

.s1_end {
    height: 10vh;
    width: 100%;
    background-color: white;
    background-image: url("../assets/Images/grid_black.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: repeat;
    background-size: 200px;
}

.s2 {
    height: 100%;
    width: 100%;
    position: relative;
    /* background-image: url("../assets/Images/darkbg.webp");
  background-size: 500px; */
    justify-content: center;
    background: black;
    align-items: center;
}

.s2_inner {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1.25rem;
    border-bottom: 0px;
    background: radial-gradient(circle at top, rgba(20, 0, 34, 0.5), rgba(0, 0, 0, 0.2));
    /* Slight white background with transparency */
    color: white;
    margin-block: 5em;
    /* Text color */
}

.s2_inner_content {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat';
    font-size: 2.5rem;
    word-spacing: 0rem;
    letter-spacing: 0px;
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    justify-content: center;
    align-items: center
}

#projects {
    width: 10rem;
    color: black;
    font-size: 1rem;
    font-family: 'Oregan';
    background-color: gold;
    border-radius: 1rem;
    padding: 1rem;
}

.s2_title_highlight {
    color: gold;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(38, 38, 38, 0.6);
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
}

/* SECTION 2 END */

.s2_end {
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 50rem;
    border-radius: 50px;
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 8px rgba(19, 3, 31, 0.5);
    background-image: url("../assets/Images/purple pattern.jpg");
}

.spline-fallback-image {
    display: none;
}

.s2_end_grid {
    max-width: 800px;
    align-items: center;
    display: grid;
    font-family: 'Montserrat';
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    margin: auto;
}

/* MY CV EFFECT */

#my_cv {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 15px 30px;
    border: 0;
    position: relative;
    overflow: hidden;
    border-radius: 10rem;
    transition: all 0.02s;
    font-weight: bold;
    cursor: pointer;
    color: rgb(37, 37, 37);
    z-index: 0;
    margin-inline: 5px;
    box-shadow: 0 0px 7px -5px rgba(0, 0, 0, 0.5);
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
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.hoverEffect div {
    background: rgb(222, 0, 75);
    background: linear-gradient( 90deg, rgba(222, 0, 75, 1) 0%, rgba(191, 70, 255, 1) 49%, rgba(0, 212, 255, 1) 100%);
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

/* END OF MY CV CSS */

.card {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, .25);
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(15px);
}

.card h5 {
    font-size: 1em;
    line-height: 1em;
    letter-spacing: 0px;
}

.card>p {
    line-height: 1.5em;
    letter-spacing: 0.5px;
}

/* Stagger effect */

.s2_end_grid>.card:nth-child(even) {
    margin-top: 2em;
    /* Slight offset for every second card */
}

/* SECTION 3 STARING HERE */

.s3 {
    height: auto;
    width: 100%;
    max-width: 800px;
    margin: auto;
    background-color: black;
}

#info_section_desc {
    border: 1px solid #1f1f1f;
    border-radius: 1rem;
    height: 50%;
    padding: 1rem;
    line-height: 1.5rem;
    word-spacing: 0.25rem;
    letter-spacing: 1px;
}

spline-viewer {
    aspect-ratio: 16 / 9;
    /* Maintain aspect ratio */
    width: 100%;
    height: 400px;
}

#s3_title {
    text-align: left;
    background-color: cadetblue;
    color: white;
    border-radius: 2rem;
    padding: 1rem;
    width: 10rem;
    margin: 0px;
}

.s3_grid_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 1em;
}

.s3_grid_container>.s3_card>img {
    width: 100%;
    height: 200px;
    border-radius: 10px;
}

.s3_card {
    border-radius: 20px;
    font-family: 'Oregan';
    padding: 1rem;
    position: relative;
    background-color: black;
    color: white;
    border: 1px solid grey;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
}

.s3_card>h1 {
    font-size: 1.5rem;
    padding: 1rem;
    padding-bottom: 0;
    margin: 0;
}

.s3_card>p {
    margin: 0;
    padding: 1rem;
    line-height: 1.5em;
}

/* S£ button fro ui verses */

/* From Uiverse.io by Spacious74 .*/

.s3_card_outer_container {
    width: 100%;
    text-align: right;
    justify-content: right;
}

.s3_card_button_container {
    position: relative;
    display: inline-flex;
    /* Shrink-wrap the content */
    justify-content: flex-end;
    /* Ensure the container aligns correctly inside the card */
    align-items: center;
    /* Center the button vertically */
    margin-left: auto;
    /* Push the container to the right */
    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 1em;
    transition: all 0.4s ease;
}

.s3_card_application-form {
    text-align: center;
    background-color: white;
    border-radius: 20px;
}

.s3_card_application-form>img {
    width: 300px;
    border-radius: 20px;
    height: 200px;
    object-fit: fill;
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

#ig:hover {
    cursor: pointer;
    scale: 1.05;
    transition: 0.2s ease-in-out;
}

/* FOOTER */

.footer {
    width: 100%;
    padding-top: 1%;
    border-top: 1px solid grey;
    padding-bottom: 1rem;
    text-align: center;
    font-family: 'Montserrat';
}

@media (max-width: 768px) {
    .s1 {
        width: 100%;
        height: auto;
    }
    .content {
        grid-template-columns: 1fr;
        width: auto;
    }
    .img_section img {
        position: absolute;
        width: 100px;
        height: 100px;
        right: 50px;
    }
    .info_section>h1,
    h3 {
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
    .socials_container{
        justify-content: center
    }

    .s2{
        height: 400px !important;
    }

    .s2_inner{
        height: auto;
    }
    .s2_inner_content {
        font-size: 1.5rem;
    }
    #scroll {
        display: none;
    }
    spline-viewer {
        aspect-ratio: 4 / 3;
        /* Change aspect ratio for smaller screens */
        transform: scale(0.5);
        /* Scale down for smaller screens */
        width: 100vw;
        /* Reduce the height on smaller devices */
    }
    .spline-viewer-video {
        display: none;
    }
    .spline-fallback-image {
        display: block;
    }
    .s2_end {
        border-radius: 0px;
        position: relative;
    }
    .s2_end_grid {
        grid-template-columns: repeat(1, 1fr);
        padding-bottom: 2rem
    }
    .s2_end_grid>.card:nth-child(even) {
        margin-top: 0em;
        /* Slight offset for every second card */
    }
    .s2_end_grid>.card:nth-child(3) {
        margin-top: 0;
    }
    .card {
        margin: 2rem;
        margin-bottom: 0;
    }
    #projects {
        margin: 1rem;
    }
    .s3_grid_container {
        grid-template-columns: repeat(1, 1fr);
    }
    .s3_card img {
        height: 175px;
    }
    .s2 {
        height: 50vh;
    }
}
</style>