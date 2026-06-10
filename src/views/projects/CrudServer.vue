<template>
<div class="page">
    <Header />

    <!-- Docs layout -->
    <main class="shell" role="main">
        <div class="layout">
            <!-- Left column: TOC -->
            <aside class="toc" aria-label="Table of contents">
                <div class="toc__inner">
                    <div class="toc__title">Contents</div>
                    <nav class="toc__nav" aria-label="On this page">
                        <a class="toc__link" href="#overview">Overview</a>
                        <a class="toc__link" href="#context">Project Context</a>
                    </nav>
                </div>
            </aside>

            <!-- Right column: Main content -->
            <article class="doc" aria-label="Documentation content">
                <!-- Overview -->
                <section id="overview" class="section">
                    <h1 class="title">Raw Node.js CRUD API (No Frameworks)</h1>
                    <p class="subtitle">A Http server built with vanilla Node.js</p>
                    <a href="https://github.com/Loomverse/Core-Node-Lab/tree/main/http-server" target="_blank" rel="noopener noreferrer">
                        View project on GitHub
                    </a>
                    <br />
                                        <br />


                    <img src="@/assets/Images/crud-server.png" alt="crud-server-code" style="max-width: 100%; height: auto; margin-bottom: 18px;" />

                    <div class="metaCard" role="group" aria-label="Project metadata">
                        <div class="metaRow">
                            <div class="metaLabel">Stack</div>
                            <div class="metaValue">
                                <span class="chip">Node.js</span>
                                <span class="chip">Json</span>
                            </div>
                        </div>

                        <div class="metaRow">
                            <div class="metaLabel">Focus</div>
                            <div class="metaValue">
                                <span class="chip chip--soft">Backend Architecture</span>
                                <span class="chip chip--soft">No Framework/Library Usage</span>
                                <span class="chip chip--soft">Bare-Bones Server</span>
                            </div>
                        </div>

                        <div class="metaRow">
                            <div class="metaLabel">Status</div>
                            <div class="metaValue">
                                <span class="chip chip--status">Completed</span>
                            </div>
                        </div>
                    </div>

                    

                    <p class="muted">
                        Status: Completed · Focus: Backend architecture
                    </p>
                </section>

                <!-- Project Context -->
                <section id="context" class="section">
                    <h2>Project Context</h2>

                   
                    
  <p>
    This project is a fully functional backend server built directly on top of Node.js core modules,
    without relying on frameworks like Express. It demonstrates how HTTP servers actually operate
    under the hood by manually handling every stage of the request lifecycle.
  </p>

  <p>
    The server uses the native <code>http</code> module to accept connections and route requests,
    and the <code>fs</code> module to persist data in a local JSON file acting as a simple database.
    All routing is implemented manually by parsing the request URL and method, including support
    for dynamic routes such as <code>/data/:id</code>.
  </p>

  <p>
    Incoming request bodies are processed using Node’s streaming interface
    (<code>req.on('data')</code>, <code>req.on('end')</code>), allowing raw JSON payloads to be
    received, validated, and transformed into usable JavaScript objects.
  </p>

  <h2>Core Functionality</h2>
  <ul>
    <li><strong>Create (POST /echo):</strong> Parses incoming JSON, assigns a unique ID, and stores it</li>
    <li><strong>Read (GET /data):</strong> Retrieves all stored entries from the JSON file</li>
    <li><strong>Update (PUT /data/:id):</strong> Updates an existing entry while preserving its ID</li>
    <li><strong>Delete (DELETE /data/:id):</strong> Removes an entry with proper existence checks</li>
  </ul>

  <h2>Error Handling</h2>
  <ul>
    <li>Invalid JSON payloads</li>
    <li>Missing resources (404 responses)</li>
    <li>File read/write failures</li>
    <li>Malformed or unexpected data structures</li>
  </ul>

  <h2>Additional Features</h2>
  <ul>
    <li><strong>/ping</strong> route for health checks</li>
    <li>Manual status code and header control</li>
    <li>Unique ID generation without external libraries</li>
  </ul>

  <h2>What This Project Demonstrates</h2>
  <ul>
    <li>How Node.js handles HTTP requests at the runtime level</li>
    <li>Full request → processing → response lifecycle</li>
    <li>Working with streams for data handling</li>
    <li>Manual state management without a database</li>
    <li>Understanding limitations of file-based persistence (e.g. concurrency issues)</li>
  </ul>

  <p>
    This project prioritises understanding over abstraction, exposing the internal mechanics of a backend
    system and forming a solid foundation for more advanced server architectures.
  </p>
                </section>

        
            </article>
        </div>
    </main>
</div>
</template>

<script setup>
// Layout-only page. No JS required.
import Header from '@/components/Header.vue';
</script>

<style scoped>
/* =========
   Base
   ========= */
.page {
    min-height: 100vh;
    background: #fcfcfd;
    color: #111827;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
    font-weight: 420;
    /* or 400 if Oregan supports it cleanly */
}

/* Make anchor scrolling land nicely below the header */
:global(html) {
    scroll-behavior: smooth;
}

:global(:target) {
    scroll-margin-top: 78px;
    /* header height-ish */
}

/* =========
   Header
   ========= */

.nav {
    display: flex;
    gap: 12px;
}

.nav__link {
    color: rgba(255, 255, 255, 0.88);
    text-decoration: none;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: 8px;
}

.nav__link:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
}

/* =========
   Layout shell
   ========= */
.shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 22px 18px 56px;
}

/* Two-column docs layout */
.layout {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 26px;
    align-items: start;
}

/* =========
   TOC
   ========= */
/* =========
   TOC
   ========= */
.toc {
    position: sticky;
    top: 18px;
    align-self: start;
}

.toc__inner {
    background: #ffffff;
    border-radius: 14px;
    border: 1px solid #e5e7eb;
    padding: 12px;
}

.toc__title {
    font-weight: 650;
    font-size: 0.95rem;
    color: #111827;
    margin: 0 0 10px;
    letter-spacing: 0.2px;
}

.toc__nav {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.toc__link {
    display: block;
    padding: 9px 10px;
    border-radius: 10px;
    font-weight: 480;
    color: #374151;
    text-decoration: none;
    border: 1px solid transparent;
}

.toc__link:hover {
    background: #f3f4f6;
    color: #111827;
}

/* =========
   Doc content
   ========= */
.doc {
    max-width: 860px;
    /* keeps reading comfortable */
    min-width: 0;
    /* prevents overflow in grid */
}

.section {
    padding: 22px 0 26px;
    border-bottom: 1px solid #e5e7eb;
}

.section--hero {
    padding: 18px 18px 16px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
}

.title {
    font-size: 2.2rem;
    margin-bottom: 8px;
}

.subtitle {
    margin-bottom: 12px;
    color: #4b5563;
    font-weight: 600;
}

h2 {
    margin-bottom: 10px;
    padding-top: 6px;
}

p {
    margin: 0 0 12px;
    line-height: 1.7;
}

.muted {
    color: #6b7280;
}

/* =========
   Mobile: TOC collapses to top
   ========= */
@media (max-width: 980px) {
    .layout {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    /* When stacked, sticky is unnecessary and sometimes annoying */
    .toc__inner {
        position: static;
    }

    /* Optional: make TOC feel compact on mobile */
    .toc__link {
        display: inline-block;
        margin: 6px 6px 0 0;
        padding: 7px 10px;
    }
}

/* metacard */

.metaCard {
    margin-top: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 14px;
    background: #ffffff;
    padding: 12px 12px;
}

.metaRow {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 12px;
    padding: 10px 8px;
    border-radius: 12px;
}

.metaRow+.metaRow {
    margin-top: 6px;
    border-top: 1px dashed #eef2f7;
    padding-top: 12px;
}

.metaLabel {
    font-weight: 650;
    color: #111827;
    letter-spacing: 0.15px;
}

.metaValue {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
}

/* Chips are “docs badges”, not marketing badges */
.chip {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    color: #111827;
    font-weight: 520;
    font-size: 0.92rem;
    line-height: 1;
}

.chip--soft {
    background: #ffffff;
    color: #374151;
    font-weight: 500;
}

.chip--status {
    background: #111827;
    border-color: #111827;
    color: #ffffff;
    font-weight: 600;
}



/* Mobile meta layout */
@media (max-width: 786px) {
    .metaRow {
        grid-template-columns: 1fr;
        gap: 8px;
    }

    .metaLabel {
        color: #374151;
    }
}

@media (max-width: 560px) {

    .toc,
    .toc__inner {
        top: auto !important;
        position: static !important;
    }
}


</style>
