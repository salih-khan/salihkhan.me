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
            <span class="pill">Loomverse Ltd — UK registered company</span>
            <span class="pill">£5,000 Santander X grant</span>
            <span class="pill">MVP targeted 2026</span>
            <span class="pill">Solo-built</span>
          </div>

          <div class="hero__actions">
            <a class="btn btn--primary unselect" href="#product">See the editor</a>
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
              <a class="toc__link" href="#demo">Live demo</a>
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
                  A node-graph view where scenes are nodes and choices are the connections between them.
                  Branches are wired by dragging from a choice to its destination, so the shape of the story
                  is something you author directly rather than describe in a form.
                </p>
              </div>
              <div class="splitfeature">
                <h3 class="h3">Searchable index</h3>
                <p>
                  Find any scene by title, filter to endings or dead ends, and read live status badges —
                  start, ending, dead end, unreachable — so structural problems surface while you write
                  instead of at the end.
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

          <!-- Live demo -->
          <section id="demo" class="section">
            <span class="kicker">Try it</span>
            <h2 class="h2">Live demo</h2>
            <p>
              There are two demos: one you can open today, and the one being built to represent the
              platform properly.
            </p>

            <div class="endcta">
              <div>
                <div class="endcta__title">Early proof of concept — available now</div>
                <div class="endcta__sub">A single playable branching story with audio. Reader experience only.</div>
              </div>
              <a class="btn btn--ghost" href="https://loomverse.github.io/loomverse-demo/" target="_blank" rel="noopener">Open demo</a>
            </div>

            <p>
              That build is deliberately basic. It exists to prove the reading loop — choices, branch
              resolution, media playback — and nothing beyond it. It doesn't show the editor, and it
              predates the current architecture, so it under-represents where the platform actually is.
            </p>

            <h3 class="h3">The full demo is in active development</h3>
            <p>
              The demo that will properly represent Loomverse is being built now, and it covers both halves
              of the platform: the <strong>editor</strong> — scene canvas, story map, inspectors — and a
              <strong>complete story</strong> read end to end. The point is to show the whole pipeline, from
              a creator wiring branches on a node graph through to a reader moving along the finished result.
            </p>
            <p>
              It's being built to speak to everyone the platform is for — <strong>developers, animators,
              writers and general readers alike</strong>. Each of those audiences judges the project on
              something different: the structure underneath, the visual authoring surface, the writing
              workflow, or simply whether the story is worth reading. The demo has to answer all four,
              and that is the current priority.
            </p>
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

            <div class="flowchain" role="img" aria-label="Story to Chapters to Sections to Elements">
              <span class="flownode">Story</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Chapters</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Sections</span>
              <span class="flowarrow">→</span>
              <span class="flownode">Elements</span>
            </div>

            <p>
              Elements are the atoms of a scene — text, choices and media all sit at the same level, so the
              thing a creator drags onto the canvas is the same object the story is built from. Branching is
              carried by the choice elements themselves, each referencing its destination by identifier.
            </p>

            <p>
              Branching is modelled as a <strong>graph, not a tree</strong>: paths can merge, loop back, or
              end. Endings are <em>authored</em> rather than guessed — a creator marks a scene as an ending and
              gives it a type, because a death screen offering "return to chapter 2" is still an ending, while
              a scene someone simply forgot to connect is a mistake, not a conclusion. Everything else is
              computed from the actual connections: where a story starts, which scenes are unreachable, and
              which have no way out.
            </p>

            <p>
              <strong>Media lives outside the database.</strong> Story structure is stored in MongoDB, while
              images, audio and video are held in Cloudflare R2 object storage. Documents keep only an object
              key, resolved to a public URL at the moment a story is read, and uploads go straight from the
              browser to the bucket. It's a deliberate fit for a read-heavy platform — stories are written once
              and read many times, and R2 doesn't charge for the traffic leaving it.
            </p>

            <p>
              Every write is verified server-side. The backend loads a story by owner as well as by identifier,
              so one creator can never address another's work, and applies edits through an explicit list of
              permitted fields rather than trusting whatever the client sends.
            </p>

            <div class="stackrow">
              <span class="tech">Nuxt 3</span>
              <span class="tech">Vue 3</span>
              <span class="tech">MongoDB / Mongoose</span>
              <span class="tech">Cloudflare R2</span>
              <span class="tech">Vue Flow</span>
              <span class="tech">Vite</span>
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
                  <li>Scene canvas with grid snapping &amp; undo/redo</li>
                  <li>Story-map node graph with drag-to-connect branching</li>
                  <li>Cross-chapter branching &amp; authored endings</li>
                  <li>Searchable section index with live status badges</li>
                  <li>Contextual inspector system</li>
                  <li>Cloudflare R2 storage architecture</li>
                  <li>Full light-theme design system</li>
                </ul>
              </div>
              <div class="statuscol">
                <div class="statuscol__h wip">In progress</div>
                <ul class="ticks ticks--wip">
                  <li>Media upload wired into the editor</li>
                  <li>Fully playable choice &amp; animation elements</li>
                  <li>Full demo — editor and a complete story</li>
                  <li>Chapter management &amp; navigation</li>
                  <li>Reader playback mode</li>
                </ul>
              </div>
            </div>

            <p class="muted">
              Current priority: closing the loop end to end — create a story, build scenes, connect choices,
              read it back — so a creator can go from empty project to finished story without gaps.
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
                  <figure class="shotframe">
                    <img :src="btImg" alt="The Branching Tales landing page — a hero banner reading &quot;Discover Interactive Storytelling&quot;" />
                    <figcaption>Branching Tales, the 2024 predecessor — the idea was already there; the architecture to support it wasn't.</figcaption>
                  </figure>
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
                <div class="tl__when">Early 2026</div>
                <div class="tl__body">
                  <div class="tl__title">Contract, conventions &amp; a docked editor</div>
                  <p>Backend-first contract formalised. The intended structure of the codebase was written down
                  first and treated as binding, then the project was reorganised to match it — a stretch of work
                  with no visible product change, so that later editor work had somewhere stable to land. The
                  editor was re-themed end to end into a coherent light design system and restructured into a
                  docked, game-engine layout.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jun–Jul 2026</div>
                <div class="tl__body">
                  <div class="tl__title">The editor becomes real</div>
                  <p>A fixed portrait scene canvas with grid snapping and bounds clamping, the element type
                  system, and undo/redo with keyboard shortcuts. Underneath it, one state layer took ownership of
                  every edit: changes apply instantly, roll back if the server rejects them, and leave in a
                  strict queue so a fast sequence of actions can't arrive out of order. More machinery than a
                  direct save would need, in exchange for an editor that stays consistent under messy, rapid
                  interaction.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jul 2026</div>
                <div class="tl__body">
                  <div class="tl__title">Branching becomes visual</div>
                  <p>The read-only story graph was replaced with an editable node map — one output handle per
                  choice, and branches wired by dragging from a choice to its destination instead of typing an
                  identifier into a field. Endings became something a creator declares and labels rather than
                  something inferred from missing links. The map stopped being a diagram of the story and became
                  the place the story is authored.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jul 2026</div>
                <div class="tl__body">
                  <div class="tl__title">Storage architecture decided</div>
                  <p>Media moved onto Cloudflare R2, splitting structure from bytes: documents hold an object key,
                  never a file or a URL, and uploads go browser-to-bucket directly. Chosen for the economics of a
                  read-heavy platform — written once, read many times, with no charge on traffic leaving the
                  store — and for keeping the storage provider a swappable detail rather than something baked
                  into every record.</p>
                </div>
              </li>
              <li class="tl">
                <div class="tl__when">Jul 2026</div>
                <div class="tl__body">
                  <div class="tl__title">Consolidation — one codebase, one schema</div>
                  <p>Two earlier storage systems were retired outright and the data model collapsed to a single
                  coherent shape, with anything the product had moved past removed rather than left switched off.
                  The point where the architecture stopped accumulating and started settling.</p>
                </div>
              </li>
            </ol>
          </section>

          <!-- What's next -->
          <section id="next" class="section">
            <span class="kicker">Roadmap</span>
            <h2 class="h2">What's next</h2>
            <ul class="nextlist">
              <li><strong>Media upload pipeline</strong> — wiring direct browser-to-bucket uploads into the editor so creators can bring in their own images, audio and animation.</li>
              <li><strong>Playable elements</strong> — making choice and animation elements fully functional, not just placeable.</li>
              <li><strong>The full demo</strong> — the editor and a complete story, built to be read by developers, animators, writers and general readers alike.</li>
              <li><strong>Reader experience</strong> — a dedicated player for consuming stories on web and mobile.</li>
              <li><strong>Autosave</strong> — removing the last manual step from the authoring loop.</li>
              <li><strong>Chapter &amp; project inspectors</strong> — completing the inspector set alongside scenes and elements.</li>
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
import btImg from '@/assets/Images/loomverse/bt.png';
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


.unselect{
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
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