<template>
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
    
</template>

<style scoped>
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
    font-weight: 700 !important;
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

</style>
