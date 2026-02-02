<template>
<div class="page">
    <header class="docHeader" role="banner">
        <div class="docHeader__inner">
            <div class="docHeader__title">
                <a href="https://salihkhan.me" class="docHeader__home">
                    salihkhan.me
                </a>
            </div>

            <nav class="docHeader__nav" aria-label="Documentation navigation">
                <a href="/projects/loomverse" class="docHeader__link">
                    Loomverse Documentation
                </a>
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
                    <nav class="toc__nav" aria-label="On this page">
                        <a class="toc__link" href="#overview">Overview</a>
                        <a class="toc__link" href="#context">Project Context</a>
                        <a class="toc__link" href="#architecture">System Architecture</a>
                        <a class="toc__link" href="#data-model">Data Model</a>
                        <a class="toc__link" href="#api">API Design</a>
                        <a class="toc__link" href="#log">Development Log</a>
                        <a class="toc__link" href="#status">Current Status</a>
                        <a class="toc__link" href="#next">Next Steps</a>
                    </nav>
                </div>
            </aside>

            <!-- Right column: Main content -->
            <article class="doc" aria-label="Documentation content">
                <!-- Overview -->
                <section id="overview" class="section">
                    <h1 class="title">Loomverse</h1>
                    <p class="subtitle">Backend-driven interactive storytelling platform</p>

                    <img src="@/assets/documentation_loomverse/files.png" alt="Loomverse system architecture diagram" style="max-width: 100%; height: auto; margin-bottom: 18px;" />

                    <div class="metaCard" role="group" aria-label="Project metadata">
                        <div class="metaRow">
                            <div class="metaLabel">Stack</div>
                            <div class="metaValue">
                                <span class="chip">Node.js</span>
                                <span class="chip">Express</span>
                                <span class="chip">MongoDB</span>
                                <span class="chip">Nuxt (Vue)</span>
                                <span class="chip">REST</span>
                            </div>
                        </div>

                        <div class="metaRow">
                            <div class="metaLabel">Focus</div>
                            <div class="metaValue">
                                <span class="chip chip--soft">Backend architecture</span>
                                <span class="chip chip--soft">Data modelling</span>
                                <span class="chip chip--soft">Editor tooling</span>
                            </div>
                        </div>

                        <div class="metaRow">
                            <div class="metaLabel">Status</div>
                            <div class="metaValue">
                                <span class="chip chip--status">Active development</span>
                            </div>
                        </div>
                    </div>

                    <p>
                        Loomverse is a system for creating and consuming interactive, multi-choice stories where branching
                        is expressed as data. Instead of embedding narrative logic inside UI components or hardcoded
                        control flow, Loomverse treats stories as structured objects resolved by the backend.
                    </p>

                    <p>
                        The design is deliberately backend-first: the server owns narrative structure, persistence,
                        validation, and resolution. The frontend is a client for rendering and authoring — it should remain
                        lightweight, replaceable, and incapable of “inventing” story truth.
                    </p>

                    <p>
                        The core idea is simple: branching stories become brittle when they are coded like apps.
                        Loomverse aims to model them like documents with explicit links — then expose them through a stable API.
                    </p>

                    <p class="muted">
                        Status: Active development · Focus: Backend architecture, data modelling, API design, editor tooling
                    </p>
                </section>

                <!-- Project Context -->
                <section id="context" class="section">
                    <h2>Project Context</h2>

                    <p>
                        Branching narrative systems often collapse under their own complexity as they grow.
                        The common failure mode is tight coupling: story structure gets spread across UI routes,
                        components, and conditional logic. Small narrative edits then require code edits in multiple places.
                    </p>

                    <p>
                        This is manageable for short demos, but it does not scale to real authoring. Once you add
                        dozens or hundreds of sections, the “hardcode it in the UI” approach becomes brittle:
                        reordering content breaks things, references get lost, and tooling is painful because the story
                        is not a first-class object.
                    </p>

                    <p>
                        Loomverse starts from a different assumption: stories must be editable as data. If the platform
                        is meant for creators (not just a single hardcoded story), an editor is not a luxury — it’s the
                        mechanism that makes the platform usable. Without authoring tools, the project is just a story app.
                    </p>

                    <p>
                        For that reason, Loomverse treats the editor as a core product requirement. The MVP is not “a playable story”
                        — it’s “a creator can build a branching story without touching code.”
                    </p>
                </section>

                <!-- System Architecture -->
                <section id="architecture" class="section">
                    <h2>System Architecture</h2>

                    <img src="@/assets/documentation_loomverse/dashboard.png" alt="Loomverse system architecture diagram" style="max-width: 100%; height: auto; margin-bottom: 18px;" />

                    <p>
                        Loomverse follows a conventional client–server split with strict ownership boundaries.
                        The backend owns truth: narrative structure, persistence, and resolution. The frontend owns presentation:
                        rendering content, capturing user input, and providing authoring UI.
                    </p>

                    <p class="muted">
                        Core rule: narrative truth lives on the backend. The frontend should be dumb enough that it cannot
                        silently drift out of sync with story structure.
                    </p>

                    <p>
                        Stories are not treated as “pages” or “routes”. They are hierarchical structures that the backend exposes
                        through REST APIs. The frontend requests story resources and renders them as returned.
                    </p>

                    <p>
                        At a conceptual level, narrative content flows through this hierarchy:
                    </p>

                    <p class="muted">
                        Story → Chapters → Sections → Choices
                    </p>

                    <p>
                        Choices reference other sections by identifier. This means branching is explicit and inspectable
                        (a graph), not hidden in UI code. Narrative changes are data edits, not refactors.
                    </p>

                    <p>
                        This architecture also keeps editor tooling consistent: the editor is essentially a structured data editor
                        with guardrails, not a UI that “encodes” story logic.
                    </p>
                </section>

                <!-- Data Model -->
                <section id="data-model" class="section">
                    <h2>Data Model</h2>

                    <p>
                        The data model is intentionally explicit and boring. Boring is good here: it makes authoring predictable,
                        validation simpler, and debugging realistic when stories grow.
                    </p>

                    <p>
                        Relationships between entities are stored directly rather than inferred through UI ordering or hidden logic.
                        Where possible, references are identifiers, not “position in an array” hacks.
                    </p>

                    <p class="muted">
                        Conceptual structure (simplified):
                    </p>

                    <p>
                        <strong>Story</strong><br />
                        id<br />
                        title<br />
                        metadata (author, tags, cover, etc.)<br />
                        chapters[] (ordered list / references)<br />
                        entrySectionId (starting point)
                    </p>

                    <p>
                        <strong>Chapter</strong><br />
                        id<br />
                        order / title<br />
                        sections[] (references)
                    </p>

                    <p>
                        <strong>Section</strong><br />
                        id<br />
                        content (text blocks / rich content pointers)<br />
                        choices[] (label + targetSectionId)<br />
                        optional flags (draft, locked, etc.)
                    </p>

                    <p>
                        <strong>Choice</strong><br />
                        label<br />
                        targetSectionId<br />
                        optional requirements (future)
                    </p>

                    <p>
                        This structure supports branching without duplicating content. It also cleanly supports authoring operations:
                        insert section, move section, add choice, rewire branch — all as data edits.
                    </p>

                    <p class="muted">
                        Note: versioning can exist later, but it is not a core requirement for the current documentation/MVP.
                        The priority is correctness and a stable authoring loop.
                    </p>
                </section>

                <!-- API Design -->
                <section id="api" class="section">
                    <h2>API Design</h2>

                    <img src="@/assets/documentation_loomverse/cover.png" alt="Loomverse API and platform overview" style="max-width: 100%; height: auto; margin-bottom: 18px;" />

                    <p>
                        The backend exposes narrative data through REST endpoints treated as a stable contract.
                        The frontend is a client of that contract. It should not need to know internal storage details,
                        only how to request and render story resources.
                    </p>

                    <p>
                        The backend should handle validation and enforce invariants:
                        missing targets, broken graphs, invalid references, and unsafe edits should be blocked server-side,
                        not “best-effort corrected” in the UI.
                    </p>

                    <p class="muted">
                        Example endpoints (illustrative):
                    </p>

                    <p>
                        GET /stories<br />
                        GET /stories/:id<br />
                        POST /stories<br />
                        PATCH /stories/:id<br />
                        <br />
                        GET /stories/:id/sections/:sectionId<br />
                        POST /stories/:id/sections<br />
                        PATCH /stories/:id/sections/:sectionId<br />
                        <br />
                        POST /stories/:id/choices (or PATCH section choices)
                    </p>

                    <p>
                        The frontend requests story/section resources and renders them as returned.
                        Narrative progression (which section comes next) is determined by following explicit choice references.
                    </p>

                    <p>
                        Authentication and authorisation will gate authoring routes (create/edit), but reading endpoints can remain
                        open or public depending on product direction. That policy is a later decision; the structure should allow both.
                    </p>
                </section>

                <!-- Development Log -->
                <section id="log" class="section">
                    <h2>Development Log</h2>

                    <img src="@/assets/documentation_loomverse/editor.png" alt="Loomverse editor tooling" style="max-width: 100%; height: auto; margin-bottom: 18px;" />

                    <p>
                        Loomverse has evolved through multiple phases, including false starts and structural rewrites.
                        This log documents the project as it actually developed — not as a retroactively “clean” story.
                        Earlier experimentation directly informed the current backend-first architecture.
                    </p>

                    <p class="muted">
                        Entries focus on intent, decisions, and trade-offs rather than surface-level feature lists.
                    </p>

                    <p>
                        <strong>2024 — Early experimentation (“Branching Tales”)</strong><br />
                        Worked on: Initial idea for branching interactive stories under the name <em>Branching Tales</em><br />
                        Approach: Frontend-first, story logic tightly coupled to UI and routes<br />
                        Outcome: Prototype confirmed interest, but structure did not scale beyond simple stories<br />
                        Lesson: Hardcoding narrative flow makes tooling, reuse, and extension impractical<br />
                        Result: Project paused and later restarted with a clean slate
                    </p>

                    <p>
                        <strong>2025-06 — Platform reboot and foundation</strong><br />
                        Worked on: Fresh repository, authentication, user accounts, project ownership<br />
                        Key changes: Stable login/register flow, Mongo-backed sessions, dashboard listing owned projects<br />
                        Decision: Treat Loomverse as a platform, not a single story app<br />
                        Trade-off: Delayed story “playability” in exchange for a real multi-project foundation
                    </p>

                    <p>
                        <strong>2025-06 to 2025-07 — Story creation and dashboard stabilisation</strong><br />
                        Worked on: Story creation with metadata, dashboard UI refinements, editor page scaffolding<br />
                        Milestone: “Main stable” state reached; dashboard + auth considered reliable<br />
                        Decision: Move focus from general UI to dedicated editor tooling<br />
                        Next: Build an editor capable of manipulating story structure directly
                    </p>

                    <p>
                        <strong>2025-07 — Editor expansion and infrastructure experiments</strong><br />
                        Worked on: Major editor additions, file upload handling, deployment experiments (DigitalOcean)<br />
                        Outcome: Confirmed feasibility of richer editor interactions and media handling<br />
                        Constraint discovered: Editor complexity exposes weaknesses in unclear narrative hierarchy<br />
                        Insight: Editor UX forces clarity in data model — ambiguity becomes immediately visible
                    </p>

                    <p>
                        <strong>2025-12 — Editor consolidation and hierarchy redesign</strong><br />
                        Worked on: Canvas editor maturation, split-pane usability, inspector system, viewport updates<br />
                        Major change: Narrative hierarchy redesigned; inspector fully wired into editor workflow<br />
                        Decision: Make hierarchy explicit and inspectable rather than inferred or positional<br />
                        Trade-off: Significant refactor cost in exchange for long-term maintainability<br />
                        Result: Editor reached a “coherent but unfinished” state with clear structural direction
                    </p>

                    <p>
                        <strong>2025-12 — Inspector system as structural anchor</strong><br />
                        Worked on: Modular inspector root, project overview panel, complete inspector functionality<br />
                        Insight: Inspector became the primary way to reason about story structure during editing<br />
                        Decision: Treat inspector as a first-class tool, not a secondary UI panel<br />
                        Outcome: Stronger alignment between editor UX and underlying data model
                    </p>

                    <p>
                        <strong>2026-01 — Documentation and architectural consolidation</strong><br />
                        Worked on: Formalising backend-first contract, narrative hierarchy, and editor’s role<br />
                        Decision: Editor is a core MVP requirement, not optional polish<br />
                        Trade-off: Slower visible progress in exchange for architectural clarity<br />
                        Next: Lock down backend invariants and API responsibilities
                    </p>

                    <p>
                        <strong>2026-02 — Backend fundamentals feeding platform design</strong><br />
                        Worked on: Deepening understanding of Node.js HTTP, streams, and request/response flow<br />
                        Motivation: Avoid reliance on framework “magic” and unclear data paths<br />
                        Decision: API behaviour must be explainable from first principles<br />
                        Result: Clearer mental model for Loomverse API design and future performance constraints
                    </p>
                </section>

                <!-- Current Status -->
                <section id="status" class="section">
                    <h2>Current Status</h2>

                    <p>
                        The project is in active development with the architecture and documentation being stabilised in parallel.
                        The focus remains backend architecture and explicit narrative modelling.
                    </p>

                    <ul>
                        <li>Documentation layout implemented (TOC + anchored sections + structured project overview)</li>
                        <li>Core narrative hierarchy defined (Story → Chapters → Sections → Choices)</li>
                        <li>Backend-first design principle established (frontend renders, backend owns truth)</li>
                        <li>Editor confirmed as necessary for platform MVP (creator workflow, not hardcoded stories)</li>
                        <li>Initial API direction defined (REST contract for stories/sections/choices)</li>
                    </ul>

                    <p class="muted">
                        Current priority is correctness of the data model and clarity of the API contract. UI polish comes later.
                    </p>
                </section>

                <!-- Next Steps -->
                <section id="next" class="section">
                    <h2>Next Steps</h2>

                    <ul>
                        <li><strong>Backend invariants:</strong> enforce valid references, prevent broken graphs, validate edits server-side</li>
                        <li><strong>Core CRUD routes:</strong> stories, chapters/ordering, sections, choices (create/edit/delete safely)</li>
                        <li><strong>Story resolution API:</strong> consistent section retrieval and traversal rules</li>
                        <li><strong>Authentication/authorisation:</strong> gate authoring endpoints, define roles (owner/editor/viewer)</li>
                        <li><strong>Editor MVP loop:</strong> create story → add sections → add choices → preview traversal → publish</li>
                        <li><strong>Media handling (future):</strong> decide how images/assets attach to sections (file storage vs external)</li>
                        <li><strong>Performance:</strong> plan for large stories (payload size, selective section fetching, caching strategy)</li>
                    </ul>

                    <p class="muted">
                        Versioning is intentionally not included here yet. It’s a real feature, but it is not needed to prove the model,
                        the API contract, and the creator workflow.
                    </p>
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

/* header */
/* =========================
   Documentation header
   ========================= */
.docHeader {
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
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
    color: #111827;
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
    color: #374151;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 8px;
}

.docHeader__link:hover {
    background: #f3f4f6;
    color: #111827;
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
