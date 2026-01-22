<template>
<div class="page">
    <!-- Simple dark header (kept minimal) -->
    <header class="topbar" role="banner">
        <div class="topbar__inner">
            <div class="brand">Loomverse</div>
            <nav class="nav" aria-label="Top navigation">
                <RouterLink class="nav__link" to="/">Home</RouterLink>
            </nav>
        </div>
    </header>

    <!-- Docs layout -->
    <main class="shell" role="main">
        <div class="layout">
            <!-- Left column: TOC -->
            <aside class="toc" aria-label="Table of contents">
                <div class="toc__inner">
                    <div class="toc__title">Contents</div>

                    <!-- Placeholder links for now (we'll replace with real sections later) -->
                    <a class="toc__link" href="#overview">Overview</a>
                    <a class="toc__link" href="#context">Project Context</a>
                    <a class="toc__link" href="#architecture">System Architecture</a>
                    <a class="toc__link" href="#data-model">Data Model</a>
                    <a class="toc__link" href="#api">API Design</a>
                    <a class="toc__link" href="#log">Development Log</a>
                    <a class="toc__link" href="#status">Current Status</a>
                    <a class="toc__link" href="#next">Next Steps</a>
                </div>
            </aside>

            <!-- Right column: Main content -->
            <article class="doc" aria-label="Documentation content">
                <!-- Minimal placeholder sections purely to test layout + anchor scrolling -->
                <section id="overview" class="section">
                    <h1 class="title">Loomverse</h1>
                    <p class="subtitle">Backend-driven interactive storytelling platform</p>

                    <p>
                        Loomverse is a software project focused on modelling branching narrative content as structured data.
                        Rather than embedding story logic directly into frontend views or hardcoded conditionals, Loomverse
                        treats stories as first-class data objects that are resolved by the backend.
                    </p>

                    <p>
                        The project is being developed with an explicit backend-first approach. Frontend code exists primarily
                        to render API responses and validate data flow, not to own narrative logic.
                    </p>

                    <p class="muted">
                        Status: Active development · Focus: Backend architecture, data modelling, API design
                    </p>
                </section>

                <section id="context" class="section">
                    <h2>Project Context</h2>

                    <p>
                        Branching narrative systems often become difficult to maintain as stories grow in size.
                        When narrative paths are hardcoded into application logic or UI components, changes to
                        structure frequently require touching multiple files and duplicating content.
                    </p>

                    <p>
                        This tight coupling between narrative structure and presentation leads to brittle systems:
                        adding a new branch or reorganising sections can introduce unintended side effects elsewhere
                        in the application.
                    </p>

                    <p>
                        Loomverse was started as a response to this problem. The goal is to design a system where
                        narrative structure is expressed declaratively as data, allowing stories to evolve without
                        rewriting control flow logic.
                    </p>
                </section>

                <section id="architecture" class="section">
                    <h2>System Architecture</h2>

                    <p>
                        Loomverse follows a conventional client–server architecture with clear separation of concerns.
                        The backend owns story structure, persistence, and narrative resolution. The frontend is responsible
                        only for presentation and user interaction.
                    </p>

                    <p>
                        Stories are not treated as pages. They are treated as hierarchical data structures that the backend
                        exposes through RESTful APIs.
                    </p>

                    <p>
                        At a conceptual level, narrative content flows through the following hierarchy:
                    </p>

                    <p class="muted">
                        Story → Chapters → Sections → Choices
                    </p>

                    <p>
                        Choices reference other sections by identifier rather than triggering conditional logic.
                        This keeps branching explicit and removes the need for hardcoded transitions.
                    </p>
                </section>

                <section id="data-model" class="section">
                    <h2>Data Model</h2>

                    <p>
                        The data model is intentionally simple and explicit. Relationships between entities are
                        stored directly rather than inferred through application logic.
                    </p>

                    <p class="muted">
                        Conceptual structure (simplified):
                    </p>

                    <p>
                        <strong>Story</strong><br />
                        title<br />
                        metadata<br />
                        chapters[]
                    </p>

                    <p>
                        <strong>Chapter</strong><br />
                        order<br />
                        sections[]
                    </p>

                    <p>
                        <strong>Section</strong><br />
                        content<br />
                        choices[] → references to other sections
                    </p>

                    <p>
                        This structure allows branching without duplicating content and keeps narrative transitions
                        explicit. It is also designed to support future concerns such as draft states, versioning,
                        or alternate story paths without restructuring existing data.
                    </p>
                </section>

                <section id="api" class="section">
                    <h2>API Design</h2>

                    <p>
                        The backend exposes narrative data through a set of REST endpoints that are treated as a stable
                        contract between client and server.
                    </p>

                    <p>
                        The frontend requests story and section resources and renders them as-is. It does not attempt
                        to infer narrative structure or resolve transitions locally.
                    </p>

                    <p class="muted">
                        Example endpoints (illustrative):
                    </p>

                    <p>
                        GET /stories/:id<br />
                        GET /stories/:id/sections/:sectionId<br />
                        POST /stories
                    </p>

                    <p>
                        This approach keeps narrative logic centralised and allows the frontend to remain lightweight
                        and replaceable.
                    </p>
                </section>

                <section id="log" class="section">
                    <h2>Development Log</h2>

                    <p>
                        Loomverse is developed iteratively. This section documents design decisions and implementation
                        milestones as they occur.
                    </p>

                    <p class="muted">
                        Example entry format:
                    </p>

                    <p>
                        <strong>2026-01-XX — Data model foundation</strong><br />
                        Worked on: Initial story / chapter / section relationships<br />
                        Decision: Explicit references over implicit ordering<br />
                        Trade-off: More verbose data in exchange for clarity<br />
                        Next: API routes for section resolution
                    </p>
                </section>

                <section id="status" class="section">
                    <h2>Current Status</h2>

                    <p>
                        The core architecture is under active development.
                    </p>

                    <ul>
                        <li>Core narrative data models defined</li>
                        <li>Backend structure in progress</li>
                        <li>Initial API routes being implemented</li>
                        <li>Frontend used to test rendering and data flow</li>
                    </ul>
                </section>
                <section id="next" class="section">
                    <h2>Next Steps</h2>

                    <ul>
                        <li>Authentication and authorisation for content management</li>
                        <li>Admin tooling for story creation and editing</li>
                        <li>Draft and publish states for narrative content</li>
                        <li>Performance considerations as story size increases</li>
                    </ul>
                </section>

            </article>
        </div>
    </main>
</div>
</template>

<script>
// Layout-only page. No JS required.
</script>

<style scoped>
/* =========
   Base
   ========= */
.page {
    min-height: 100vh;
    background: #ffffff;
    color: #111827;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial;
  font-weight: 420; /* or 400 if Oregan supports it cleanly */
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
.topbar {
    background: #0b0f19;
    color: #ffffff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
p {
  font-weight: 420;  /* 400–450 range */
  line-height: 1.7;
}

.topbar__inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
}

.brand {
    font-weight: 700;
    letter-spacing: 0.2px;
}

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
.toc {
  position: sticky;
  top: 18px;
  align-self: start;
}

/* sticky container */
.toc__inner {
      position: static; /* no need for nested sticky */

    top: 18px;
    /* distance from viewport top */
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 12px;
    background: #ffffff;
}

.toc__title {
    font-weight: 800;
    font-size: 0.95rem;
    color: #111827;
    margin: 0 0 10px;
}

.toc__link {
    display: block;
    text-decoration: none;
    color: #374151;
    padding: 8px 10px;
    border-radius: 10px;
    line-height: 1.25;
    border: 1px solid transparent;
}

.toc__link:hover {
    background: #f9fafb;
    border-color: #e5e7eb;
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
    padding: 18px 0 22px;
    border-bottom: 1px solid #e5e7eb;
}

.title {
    font-size: 2.1rem;
    line-height: 1.15;
    margin: 0 0 10px;
}

.subtitle {
    margin: 0 0 10px;
    color: #374151;
    font-weight: 700;
}

h2 {
    margin: 0 0 10px;
    font-size: 1.15rem;
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
</style>
