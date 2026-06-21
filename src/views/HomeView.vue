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
            I'm a self-taught software developer, starting since 4 years and primarily focused on backend and server-side systems.

            While I've built frontend projects in the past, my core interest lies in designing and implementing reliable backend architectures, APIs, and data-driven systems.

            You can see this focus clearly in Loomverse, an actively developed project where I document architectural decisions, server logic, and platform design as they evolve.

            Loomverse is an ongoing startup project and serves as a practical record of how I think, design, and build systems over time.
          </p>

          <div class="socials_container">
            <!-- CV Button → links to /cv page -->
            <a href="/cv" target="_blank" rel="noopener noreferrer">
              <button id="my_cv">
                My CV
                <div class="hoverEffect">
                  <div></div>
                </div>
              </button>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/salih-khan" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <img src="../assets/Images/github.svg" alt="GitHub" width="44" height="44" class="socialIcon socialIcon--github" />
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/salih.jpg__/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
              <img src="../assets/Images/ig.webp" alt="Instagram" width="44" height="44" class="socialIcon socialIcon--ig" />
            </a>
          </div>
        </div>

        <h1 id="scroll">I think you should scroll</h1>
      </div>
    </div>

    <div class="s1_end"></div>
    <!-- ... rest of your sections ... -->
  </div>
</div>
        <!-- Section 2 -->

        <!-- Section 2 -->
        <div class="container-fluid s2_container snap-section">
            <div class="s2">
                
                <div class="skills-section">
    <h2 class="skills-title">Skills and Technologies</h2>

<div class="skills-container">

  <!-- Core Backend -->
  <div class="skills-group">
    <h3>Core Backend</h3>
    <button class="skill featured">Node.js</button>
    <button class="skill">Express.js</button>
    <button class="skill">REST APIs</button>
    <button class="skill">CRUD Operations</button>
    <button class="skill">HTTP Protocol</button>
    <button class="skill">Async/Await</button>
    <button class="skill">Middleware</button>
    <button class="skill">Routing</button>
  </div>

  <!-- Databases -->
  <div class="skills-group">
    <h3>Databases</h3>
    <button class="skill featured">MongoDB</button>
    <button class="skill featured">Firebase</button>
    <button class="skill">FireStore</button>
    <button class="skill">Data Modeling</button>
    <button class="skill">Query Design</button>
    <button class="skill">JSON Handling</button>
    <button class="skill learning">PostgreSQL <span class="badge">Learning</span></button>
    <button class="skill learning">Redis <span class="badge">Learning</span></button>
  </div>

  <!-- Authentication & Security -->
  <div class="skills-group">
    <h3>Authentication & Security</h3>
    <button class="skill">Authentication</button>
    <button class="skill">JWT</button>
    <button class="skill">OAuth2</button>
    <button class="skill">Authorization</button>
    <button class="skill">Session Management</button>
  </div>

  <!-- API & System Architecture -->
  <div class="skills-group">
    <h3>API & System Design</h3>
    <button class="skill">REST Architecture</button>
    <button class="skill">Validation</button>
    <button class="skill">Error Handling</button>
    <button class="skill">State Management</button>
    <button class="skill">Logging</button>
    <button class="skill">Environment Config</button>
    <button class="skill learning">CI/CD <span class="badge">Learning</span></button>
  </div>

  <!-- Testing & Dev Tools -->
  <div class="skills-group">
    <h3>Testing & Development</h3>
    <button class="skill">Postman</button>
    <button class="skill">Jest</button>
    <button class="skill">Unit Testing</button>
    <button class="skill">Integration Testing</button>
    <button class="skill">Debugging</button>
  </div>

  <!-- Frontend -->
  <div class="skills-group">
    <h3>Frontend</h3>
    <button class="skill">HTML5</button>
    <button class="skill">CSS3</button>
    <button class="skill">JavaScript (ES6+)</button>
    <button class="skill featured">Vue.js</button>
    <button class="skill featured">Nuxt</button>
    <button class="skill">Vue Router</button>
    <button class="skill">Tailwind CSS</button>
  </div>

  <!-- Tools -->
  <div class="skills-group">
    <h3>Tools & Version Control</h3>
    <button class="skill">Git</button>
    <button class="skill">GitHub</button>
    <button class="skill">CLI</button>
    <button class="skill">npm / yarn</button>
    <button class="skill learning">Docker <span class="badge">Learning</span></button>
  </div>

  <!-- Professional Skills -->
  <div class="skills-group">
    <h3>Professional</h3>
    <button class="skill">System Design</button>
    <button class="skill">Technical Documentation</button>
    <button class="skill">Code Review</button>
    <button class="skill">Problem Solving</button>
    <button class="skill">Self-Taught</button>
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

<div class="s1_end"></div>

<!-- ========== PROJECTS SECTION ========== -->
<div class="projects-section">
  <div class="projects-header">
    <div class="projects-header__inner">
      <h1>Projects</h1>
    </div>
  </div>

  <div class="projects-grid">
    <!-- LEFT COLUMN -->
    <div class="projects-grid__col-left">
      <FeatureCard
        :image="surmaLogo"
        title="Photography Portfolio"
        status="Completed"
        description="A dedicated photography portfolio built for a client to showcase their work professionally, focusing on clean presentation, performance, and a strong visual layout."
        :skills="['Html', 'Css', 'Javascript', 'Vue.js', 'Firebase', 'Vue Router', 'Firebase Storage', 'FireStore']"
        githubUrl="https://github.com/salih-khan"
        siteUrl="https://surmastudio.com"
      />
      <FeatureCard
        :image="salihkhanLogo"
        title="My Portfolio"
        status="Completed"
        description="My personal portfolio website, designed to present projects, skills, and ongoing work with a focus on clarity, structure, and practical frontend design."
        :skills="['Html', 'Css', 'Javascript', 'Vue.js', 'Nuxt', 'Vue Router']"
        githubUrl="https://github.com/salih-khan"
        siteUrl="https://salihkhan.me"
      />
      <FeatureCard
        :image="c2d_logo"
        title="Connect2Deen"
        status="To be re-developed"
        description="A platform originally built to host a local scholar's sermons, now being redeveloped into a modern, well-designed system with plans to expand into a full mobile app."
        :skills="['Html', 'Css', 'Javascript', 'Vue.js', 'Firebase', 'Vue Router', 'Firebase Storage', 'FireStore']"
        githubUrl="https://github.com/salih-khan"
        siteUrl="https://connect2deen.com"
      />
      <FeatureCard
        title="Loomverse"
        status="In Development"
        description="An ongoing backend-focused project centered on building and experimenting with systems from first principles, including message processing, automation, and real-world integrations; designed to be a practical record of how I think, design, and build systems over time."
        :skills="['Vue.js', 'Nuxt', 'MongoDB']"
        siteUrl="https://salihkhan.me/projects/loomverse"
      />
    </div>

    <!-- RIGHT COLUMN -->
    <div class="projects-grid__col-right">
      <ProjectCard
        title="Node.js File-Based CRUD Server"
        status="Completed"
        description="A minimal HTTP server built with Node.js core modules that handles routing, request parsing, and full CRUD operations using a JSON file as storage. No frameworks — just raw request/response handling and file persistence."
        :skills="['Node.js', 'Json']"
        docUrl="/projects/crud-server"
      />
    </div>
  </div>
</div>


<div class="footer">
  <p class="footer__text">
    &copy; {{ year }} Salih Khan &bull; Built with Vue.js &amp; ☕
  </p>
</div>

<!-- Footer -->
</template>

<script setup>
import Header from '../components/Header.vue';
import '../assets/styles/HomeView.css';
import FeatureCard from '../components/FeatureCard.vue';
import ProjectCard from '../components/ProjectCard.vue'; // ✅ New import

import surmaLogo from '@/assets/Images/SurmaStudio_Logo.jpeg';
import salihkhanLogo from '@/assets/Images/salihkhan_Logo.jpg';
import c2d_logo from '@/assets/Images/c2d_logo.png';

const year = new Date().getFullYear();

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


</style>
