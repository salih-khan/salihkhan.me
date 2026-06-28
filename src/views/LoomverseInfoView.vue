<template>
  <div class="lv-page">
    <Header />

    <!-- ============ HERO ============ -->
    <section class="hero" aria-label="Loomverse overview">
      <div class="hero__inner">
        <div class="hero__copy">
          <span class="eyebrow">Interactive storytelling platform</span>
          <h1 class="hero__title">Loomverse</h1>
          <p class="hero__lede">
            A web-based platform for building and reading <strong>branching visual stories</strong> —
            narratives where the reader's choices shape the path through the plot. No code, no game engine:
            just a creator, a canvas, and a story that forks.
          </p>

          <div class="hero__meta">
            <span class="pill pill--status"><span class="dot"></span> In active development</span>
            <span class="pill">MVP targeted 2026</span>
            <span class="pill">Solo-built</span>
          </div>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#product">See the editor</a>
            <a class="btn btn--ghost" href="#vision">The vision</a>
          </div>
        </div>

        <div class="hero__shot">
          <img
            :src="editorImg"
            alt="The Loomverse editor — scene canvas with section navigator and inspector"
            class="hero__img"
          />
          <div class="hero__shotcaption">The Loomverse editor — scene canvas, section index, and inspector</div>
        </div>
      </div>
    </section>

    <!-- ============ BODY ============ -->
    <main class="shell" role="main">
      <div class="layout">

        <!-- TOC -->
        <aside class="toc" aria-label="Table of contents">
          <div class="toc__inner">
            <div class="toc__title">On this page</div>
            <nav class="toc__nav">
              <a class="toc__link" href="#what">What it is</a>
              <a class="toc__link" href="#problem">The problem</a>
              <a class="toc__link" href="#product">The product</a>
              <a class="toc__link" href="#architecture">How it works</a>
              <a class="toc__link" href="#vision">Vision &amp; status</a>
              <a class="toc__link" href="#log">Build log</a>
              <a class="toc__link" href="#next">What's next</a>
            </nav>

            <a class="toc__cta" :href="'/assets/documentation_loomverse/Loomverse_Business_Plan.pdf'" target="_blank" rel="noopener">
              <span class="toc__cta-icon" aria-hidden="true">↓</span>
              <span>
                <span class="toc__cta-title">Business plan</span>
                <span class="toc__cta-sub">PDF · vision, market &amp; plan</span>
              </span>
            </a>
          </div>
        </aside>

        <!-- CONTENT -->
        <article class="doc">

          <!-- What it is -->
          <section id="what" class="section">
            <span class="kicker">Overview</span>
            <h2 class="h2">A home for stories that branch</h2>
            <p>
              Loomverse lets creators assemble images, animation and choice points into interactive,
              multi-path stories, then publish them for readers. Each reader moves through the story by
              the decisions they make — the same story can unfold a dozen different ways.
            </p>
            <p>
              It sits deliberately between two worlds that don't serve branching storytellers well today:
              static publishing platforms (great for linear comics and fiction, but with no real branching)
              and full game engines (powerful, but demanding serious technical skill). Loomverse offers the
              middle ground — accessible, no-code branching built specifically for visual creators.
            </p>

            <div class="cardgrid">
              <div class="featurecard">
                <div class="featurecard__h">Visual-first</div>
                <p>Compose each scene on a canvas — place media, set choices, see what the reader sees.</p>
              </div>
              <div class="featurecard">
                <div class="featurecard__h">No code</div>
                <p>Branching is authored visually as connected scenes, not written as logic.</p>
              </div>
              <div class="featurecard">
                <div class="featurecard__h">Built to publish</div>
                <p>Stories live on the platform with hosting and an audience built in.</p>
              </div>
            </div>
          </section>

          <!-- The problem -->
          <section id="problem" class="section">
            <span class="kicker">Why it exists</span>
            <h2 class="h2">Branching stories break when you code them like apps</h2>
            <p>
              Most branching narrative tools collapse under their own complexity as a story grows. The story
              logic ends up scattered across UI components and conditional code, so a small narrative edit
              means changing code in several places. It works for a short demo; it falls apart at a hundred
              sections, where reordering breaks links and references get lost.
            </p>
            <p>
              Loomverse starts from a different assumption: <strong>a story is data, not code.</strong> The
              structure of a story — its scenes, choices, paths and endings — is modelled explicitly and owned
              by the backend. The editor is a structured view onto that data, so the tool and the story can
              never quietly drift out of sync. Authoring a branch is a data edit, not a refactor.
            </p>
            <blockquote class="pullquote">
              The core idea is simple: model branching stories like documents with explicit links, then expose
              them through a stable interface anyone can build on.
            </blockquote>
          </section>

          <!-- The product -->
          <section id="product" class="section">
            <span class="kicker">The product</span>
            <h2 class="h2">A real editor, not a toy</h2>
            <p>
              The heart of Loomverse is its browser-based editor — a docked, game-engine-style workspace where
              side panels stay put while the centre switches between composing a scene and seeing the whole
              story's shape.
            </p>

            <figure class="shotframe">
              <img :src="dashboardImg" alt="Loomverse editor layout with docked panels" />
              <figcaption>Docked panels — section index on the left, scene canvas in the centre, contextual inspector on the right.</figcaption>
            </figure>

            <div class="splitfeatures">
              <div class="splitfeature">
                <h3 class="h3">Scene canvas</h3>
                <p>
                  Place and arrange the elements of a moment — images, animation, choice boxes — visually, and
                  edit any element's properties live. What you build is what the reader experiences.
                </p>
              </div>
              <div class="splitfeature">
                <h3 class="h3">Story map</h3>
                <p>
                  A node-graph view of the narrative, where scenes are nodes and choices are the connections
                  between them. The shape of the story becomes something you can see and shape directly.
                </p>
              </div>
              <div class="splitfeature">
                <h3 class="h3">Searchable index</h3>
                <p>
                  Find any scene by title, filter by endings or orphans, and read live status badges —
                  start, ending, unreachable — derived automatically from the actual story data.
                </p>
              </div>
              <div class="splitfeature">
                <h3 class="h3">Contextual inspector</h3>
                <p>
                  One panel that adapts to whatever's selected — a scene, an element, a choice, a file — so
                  properties are always one click away, never buried.
                </p>
              </div>
            </div>

            <figure class="shotframe">
              <img :src="filesImg" alt="Loomverse asset and file handling" />
              <figcaption>Creators upload their own visual and animated assets to use across a story.</figcaption>
            </figure>
          </section>

          <!-- How it works -->
          <section id="architecture" class="section">
            <span class="kicker">Under the hood</span>
            <h2 class="h2">How it works</h2>
            <p>
              Loomverse follows a clean client–server split with strict ownership: the backend owns narrative
              truth — structure, persistence, validation — and the frontend renders and authors it. The
              frontend is intentionally kept from "inventing" story state, so it can't fall out of sync.
            </p>

            <p class="muted">Narrative content flows through a clear hierarchy:</p>

            <div class="flowchain" role="img" aria-label="Story to Chapters to Sections to Choices">
              <span class="flownode">Story</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Chapters</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Sections</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Choices</span>
            </div>

            <p>
              Crucially, branching is modelled as a <strong>graph, not a tree</strong>. Choices reference other
              sections by identifier, so paths can merge, loop back, or dead-end into endings — and structural
              facts like a story's start, its endings, and any unreachable scenes are <em>computed</em> from how
              choices connect, never manually tracked. Chapters chain in sequence and keep each graph
              manageable, so a large story stays navigable instead of becoming one impossible tangle.
            </p>

            <div class="stackrow">
              <span class="tech">Nuxt 3</span>
              <span class="tech">Vue 3</span>
              <span class="tech">Node.js</span>
              <span class="tech">MongoDB</span>
              <span class="tech">REST</span>
              <span class="tech">DigitalOcean</span>
            </div>
          </section>

          <!-- Vision & status -->
          <section id="vision" class="section">
            <span class="kicker">Where it's going</span>
            <h2 class="h2">Vision &amp; status</h2>
            <p>
              The long-term aim is for Loomverse to become a natural home for interactive fiction — created,
              published and read in one place — the way other platforms became home for newsletters or
              serialised comics. Branching narrative is an underexplored medium, held back not by a lack of
              creative appetite but by the absence of tools built for it.
            </p>

            <div class="statusboard">
              <div class="statuscol">
                <div class="statuscol__h done">Built</div>
                <ul class="ticks">
                  <li>Accounts, ownership &amp; project dashboard</li>
                  <li>Browser-based editor with docked panels</li>
                  <li>Scene canvas with live element editing</li>
                  <li>Searchable section index with computed badges</li>
                  <li>Contextual inspector system</li>
                  <li>Full light-theme design system</li>
                </ul>
              </div>
              <div class="statuscol">
                <div class="statuscol__h wip">In progress</div>
                <ul class="ticks ticks--wip">
                  <li>Story-map node graph (drag-to-connect)</li>
                  <li>Cross-chapter branching</li>
                  <li>Chapter management &amp; navigation</li>
                  <li>Schema for tags, audio &amp; sequencing</li>
                </ul>
              </div>
            </div>

            <p class="muted">
              Current priority: a correct, stable authoring loop — create a story, build scenes, connect
              choices, preview, publish — before broader feature work.
            </p>
          </section>

          <!-- Build log -->
          <section id="log" class="section">
            <span class="kicker">The honest version</span>
            <h2 class="h2">Build log</h2>
            <p>
              Loomverse has gone through false starts and full rewrites. This log records how it actually
              developed — intent, decisions and trade-offs — rather than a tidied-up story.
            </p>

            <ol class="timeline">
              <li class="tl">
                <div class="tl__when">2024</div>
                <div class="tl__body">
                  <div class="tl__title">Early experimentation — "Branching Tales"</div>
                  <p>First attempt at branching stories, with logic tightly coupled to the UI. It proved the
                  idea was interesting but didn't scale past simple stories. Paused, then restarted clean.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jun 2025</div>
                <div class="tl__body">
                  <div class="tl__title">Platform reboot &amp; foundation</div>
                  <p>Fresh start: authentication, user accounts, project ownership, a dashboard of owned
                  projects. The decision that set everything after it — treat Loomverse as a platform, not a
                  single story app.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jul 2025</div>
                <div class="tl__body">
                  <div class="tl__title">Editor expansion &amp; infrastructure</div>
                  <p>Major editor work, file uploads, and deployment experiments. Editor complexity surfaced
                  weaknesses in the narrative hierarchy — proof that good authoring UX forces a clean data
                  model.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Dec 2025</div>
                <div class="tl__body">
                  <div class="tl__title">Hierarchy redesign &amp; inspector system</div>
                  <p>Narrative hierarchy redesigned to be explicit and inspectable; the inspector became the
                  primary way to reason about structure while editing — promoted to a first-class tool.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">2026</div>
                <div class="tl__body">
                  <div class="tl__title">Consolidation, theme &amp; product polish</div>
                  <p>Backend-first contract formalised; the editor re-themed end-to-end into a coherent light
                  design system, restructured into a docked game-engine layout, and refined toward a creator-ready
                  MVP.</p>
                </div>
              </li>
            </ol>
          </section>

          <!-- What's next -->
          <section id="next" class="section">
            <span class="kicker">Roadmap</span>
            <h2 class="h2">What's next</h2>
            <ul class="nextlist">
              <li><strong>Story-map graph</strong> — drag-to-connect node view for authoring branches visually.</li>
              <li><strong>Cross-chapter branching</strong> — choices that route between chapters, not just within them.</li>
              <li><strong>Backend invariants</strong> — server-side validation that prevents broken graphs and invalid references.</li>
              <li><strong>Reader experience</strong> — a dedicated player for consuming stories on web and mobile.</li>
              <li><strong>Media &amp; audio</strong> — richer scene composition with sound and sequencing.</li>
              <li><strong>Creator base</strong> — onboard founding creators and build a starting library of stories.</li>
            </ul>

            <div class="endcta">
              <div>
                <div class="endcta__title">Want the full picture?</div>
                <div class="endcta__sub">The business plan covers the vision, market, and roadmap in depth.</div>
              </div>
              <a class="btn btn--primary" :href="'/assets/documentation_loomverse/Loomverse_Business_Plan.pdf'" target="_blank" rel="noopener">Read the business plan</a>
            </div>
          </section>

        </article>
      </div>
    </main>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
import editorImg from '@/assets/documentation_loomverse/editor.png';
import dashboardImg from '@/assets/documentation_loomverse/dashboard.png';
import filesImg from '@/assets/documentation_loomverse/files.png';
</script>

<style scoped>
/* ===========================================================
   Design tokens — aligned with the Loomverse light aesthetic
   =========================================================== */
.lv-page {
  --surface-0: #f7f7f5;
  --surface-1: #ffffff;
  --surface-2: #f1efe9;
  --ink:       #20242b;
  --ink-2:     #52606d;
  --muted:     #8a8f98;
  --line:      rgba(0,0,0,0.10);
  --line-2:    rgba(0,0,0,0.16);
  --accent:    #185fa5;
  --accent-2:  #378add;
  --accent-bg: #e6f1fb;
  --ok-bg:     #e1f5ee;
  --ok-tx:     #0f6e56;
  --warn-bg:   #faeeda;
  --warn-tx:   #854f0b;
  --radius:    10px;
  --radius-lg: 16px;

  min-height: 100vh;
  background: var(--surface-0);
  color: var(--ink);
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  font-weight: 420;
  -webkit-font-smoothing: antialiased;
}

:global(html) { scroll-behavior: smooth; }
:global(:target) { scroll-margin-top: 90px; }

.lv-page strong { font-weight: 650; color: var(--ink); }
.lv-page em { font-style: italic; color: var(--ink-2); }

/* ===========================================================
   Hero
   =========================================================== */
.hero {
  border-bottom: 0.5px solid var(--line);
  background:
    radial-gradient(1200px 400px at 78% -10%, var(--accent-bg) 0%, transparent 60%),
    var(--surface-1);
}
.hero__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 22px 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
  align-items: center;
}
.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
}
.hero__title {
  font-size: clamp(2.6rem, 5vw, 3.6rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  font-weight: 720;
  margin: 0 0 16px;
  color: var(--ink);
}
.hero__lede {
  font-size: 1.12rem;
  line-height: 1.62;
  color: var(--ink-2);
  margin: 0 0 22px;
  max-width: 36ch;
}
.hero__meta { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.hero__actions { display: flex; gap: 12px; flex-wrap: wrap; }

.hero__shot { position: relative; }
.hero__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-lg);
  border: 0.5px solid var(--line-2);
  box-shadow: 0 20px 50px -24px rgba(20,40,70,0.30);
}
.hero__shotcaption {
  margin-top: 10px;
  font-size: 0.82rem;
  color: var(--muted);
  text-align: center;
}

/* ===========================================================
   Buttons & pills
   =========================================================== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 18px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 0.5px solid transparent;
  transition: transform .12s ease, background .12s ease, border-color .12s ease;
}
.btn--primary { background: var(--accent); color: #fff; }
.btn--primary:hover { background: var(--accent-2); transform: translateY(-1px); }
.btn--ghost { background: var(--surface-1); color: var(--ink); border-color: var(--line-2); }
.btn--ghost:hover { background: var(--surface-2); }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  color: var(--ink-2);
  font-size: 0.85rem;
  font-weight: 520;
}
.pill--status { background: var(--accent-bg); border-color: transparent; color: var(--accent); font-weight: 600; }
.dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent-2); box-shadow: 0 0 0 3px rgba(55,138,221,0.18); }

/* ===========================================================
   Layout shell
   =========================================================== */
.shell { max-width: 1180px; margin: 0 auto; padding: 8px 22px 72px; }
.layout {
  display: grid;
  grid-template-columns: 232px minmax(0, 1fr);
  gap: 40px;
  align-items: start;
}

/* ===========================================================
   TOC
   =========================================================== */
.toc { position: sticky; top: 22px; align-self: start; }
.toc__inner {
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 14px;
}
.toc__title {
  font-size: 0.74rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 4px 6px 10px;
}
.toc__nav { display: flex; flex-direction: column; gap: 2px; }
.toc__link {
  display: block;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--ink-2);
  text-decoration: none;
  transition: background .12s ease, color .12s ease;
}
.toc__link:hover { background: var(--accent-bg); color: var(--accent); }

.toc__cta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  padding: 11px 12px;
  border-radius: var(--radius);
  background: var(--surface-2);
  border: 0.5px solid var(--line);
  text-decoration: none;
  transition: border-color .12s ease, background .12s ease;
}
.toc__cta:hover { border-color: var(--accent-2); background: var(--accent-bg); }
.toc__cta-icon {
  flex-shrink: 0;
  width: 30px; height: 30px;
  display: grid; place-items: center;
  border-radius: 8px;
  background: var(--accent); color: #fff;
  font-weight: 700;
}
.toc__cta-title { display: block; font-size: 0.88rem; font-weight: 650; color: var(--ink); }
.toc__cta-sub { display: block; font-size: 0.74rem; color: var(--muted); margin-top: 1px; }

/* ===========================================================
   Doc content
   =========================================================== */
.doc { max-width: 800px; min-width: 0; }
.section { padding: 36px 0; border-bottom: 0.5px solid var(--line); }
.section:last-child { border-bottom: none; }

.kicker {
  display: inline-block;
  font-size: 0.74rem;
  font-weight: 650;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}
.h2 {
  font-size: clamp(1.5rem, 2.4vw, 1.9rem);
  line-height: 1.18;
  letter-spacing: -0.015em;
  font-weight: 680;
  margin: 0 0 14px;
  color: var(--ink);
}
.h3 { font-size: 1.05rem; font-weight: 650; margin: 0 0 6px; color: var(--ink); }
.doc p { margin: 0 0 14px; line-height: 1.72; font-size: 1.0rem; color: var(--ink-2); }
.muted { color: var(--muted) !important; }

/* feature cards */
.cardgrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 22px;
}
.featurecard {
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  border-radius: var(--radius);
  padding: 16px;
}
.featurecard__h { font-weight: 650; color: var(--ink); margin-bottom: 6px; font-size: 0.98rem; }
.featurecard p { margin: 0; font-size: 0.9rem; line-height: 1.55; }

/* pullquote */
.pullquote {
  margin: 22px 0 4px;
  padding: 4px 0 4px 18px;
  border-left: 3px solid var(--accent-2);
  color: var(--accent);
  font-size: 1.1rem;
  line-height: 1.55;
  font-style: italic;
}

/* screenshot frames */
.shotframe {
  margin: 24px 0;
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 12px;
}
.shotframe img {
  width: 100%; height: auto; display: block;
  border-radius: var(--radius);
  border: 0.5px solid var(--line);
}
.shotframe figcaption {
  margin-top: 10px;
  font-size: 0.82rem;
  color: var(--muted);
  text-align: center;
}

/* split features */
.splitfeatures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px 28px;
  margin-top: 22px;
}
.splitfeature p { margin: 0; font-size: 0.94rem; }

/* flow chain */
.flowchain {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  margin: 14px 0 18px;
}
.flownode {
  padding: 8px 16px;
  border-radius: var(--radius);
  background: var(--accent-bg);
  color: var(--accent);
  font-weight: 650;
  font-size: 0.95rem;
}
.flowarrow { color: var(--muted); font-size: 1.1rem; }

/* tech stack */
.stackrow { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
.tech {
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  color: var(--ink-2);
  font-size: 0.85rem;
  font-weight: 540;
}

/* status board */
.statusboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 22px 0 8px;
}
.statuscol {
  background: var(--surface-1);
  border: 0.5px solid var(--line);
  border-radius: var(--radius-lg);
  padding: 16px 18px;
}
.statuscol__h {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
  display: inline-flex; align-items: center; gap: 7px;
  padding: 3px 10px;
  border-radius: 999px;
}
.statuscol__h.done { background: var(--ok-bg); color: var(--ok-tx); }
.statuscol__h.wip  { background: var(--warn-bg); color: var(--warn-tx); }
.ticks { list-style: none; padding: 0; margin: 0; }
.ticks li {
  position: relative;
  padding: 5px 0 5px 24px;
  font-size: 0.92rem;
  color: var(--ink-2);
  line-height: 1.45;
}
.ticks li::before {
  content: "✓";
  position: absolute; left: 0; top: 5px;
  color: var(--ok-tx);
  font-weight: 700;
  font-size: 0.85rem;
}
.ticks--wip li::before { content: "○"; color: var(--warn-tx); }

/* timeline */
.timeline { list-style: none; padding: 0; margin: 20px 0 0; }
.tl {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 18px;
  padding: 0 0 22px 0;
  position: relative;
}
.tl::before {
  content: "";
  position: absolute;
  left: 91px; top: 22px; bottom: -4px;
  width: 1.5px;
  background: var(--line);
}
.tl:last-child::before { display: none; }
.tl__when {
  font-size: 0.8rem;
  font-weight: 650;
  color: var(--accent);
  padding-top: 1px;
  text-align: right;
  position: relative;
}
.tl__when::after {
  content: "";
  position: absolute;
  right: -11px; top: 5px;
  width: 9px; height: 9px;
  border-radius: 50%;
  background: var(--surface-1);
  border: 2px solid var(--accent-2);
}
.tl__title { font-weight: 650; color: var(--ink); margin-bottom: 4px; font-size: 1.0rem; }
.tl__body p { margin: 0; font-size: 0.92rem; line-height: 1.6; }

/* next list */
.nextlist { list-style: none; padding: 0; margin: 18px 0 0; }
.nextlist li {
  padding: 11px 0 11px 22px;
  border-bottom: 0.5px solid var(--line);
  position: relative;
  font-size: 0.96rem;
  color: var(--ink-2);
  line-height: 1.5;
}
.nextlist li:last-child { border-bottom: none; }
.nextlist li::before {
  content: "→";
  position: absolute; left: 0; top: 11px;
  color: var(--accent-2);
  font-weight: 700;
}

/* end cta */
.endcta {
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding: 20px 22px;
  border-radius: var(--radius-lg);
  background: linear-gradient(120deg, var(--accent-bg), var(--surface-1));
  border: 0.5px solid var(--line);
}
.endcta__title { font-weight: 680; color: var(--ink); font-size: 1.05rem; }
.endcta__sub { color: var(--ink-2); font-size: 0.9rem; margin-top: 2px; }

/* ===========================================================
   Responsive
   =========================================================== */
@media (max-width: 980px) {
  .hero__inner { grid-template-columns: 1fr; gap: 30px; padding: 40px 20px; }
  .hero__shot { order: -1; }
  .hero__lede { max-width: none; }
  .layout { grid-template-columns: 1fr; gap: 18px; }
  .toc { position: static; }
  .toc__nav { flex-direction: row; flex-wrap: wrap; }
  .toc__link { padding: 7px 11px; }
  .cardgrid { grid-template-columns: 1fr; }
  .splitfeatures { grid-template-columns: 1fr; }
  .statusboard { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .hero__title { font-size: 2.3rem; }
  .section { padding: 28px 0; }
  .tl { grid-template-columns: 64px 1fr; gap: 12px; }
  .tl::before { left: 71px; }
  .tl__when::after { right: -9px; }
  .endcta { flex-direction: column; align-items: flex-start; }
}

@media (prefers-reduced-motion: reduce) {
  :global(html) { scroll-behavior: auto; }
  .btn { transition: none; }
}
</style>