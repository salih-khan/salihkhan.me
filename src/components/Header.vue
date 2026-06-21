<template>
  <header class="docHeader" role="banner">
    <div class="docHeader__inner">
      <div class="docHeader__title">
        <a href="https://salihkhan.me" class="docHeader__home">
          salihkhan.me
        </a>
      </div>

      <nav class="docHeader__nav" aria-label="Documentation navigation">
        <a href="/cv" class="docHeader__link">
          CV
        </a>
        <a href="/projects/loomverse" class="docHeader__link">
          Loomverse
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* =========================
   Documentation header
   ========================= */
.docHeader {
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.docHeader__inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.docHeader__home {
  font-weight: 700 !important;
  font-size: 0.95rem;
  letter-spacing: 0.2px;
  color: #111827;
  text-decoration: none;
  white-space: nowrap;
}

.docHeader__home:hover {
  text-decoration: underline;
}

.docHeader__nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

.docHeader__link {
  font-weight: 500;
  font-size: 0.9rem;
  color: #374151;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.docHeader__link:hover {
  background: #f3f4f6;
  color: #111827;
}

/* ── Mobile ── */
@media (max-width: 768px) {
  .docHeader__inner {
    padding: 10px 14px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .docHeader__home {
    font-size: 0.85rem;
  }

  .docHeader__nav {
    gap: 4px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .docHeader__link {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
}

@media (max-width: 480px) {
  .docHeader__inner {
    padding: 8px 10px;
    flex-direction: column;
    gap: 6px;
  }

  .docHeader__home {
    font-size: 0.8rem;
  }

  .docHeader__nav {
    gap: 4px;
    width: 100%;
    justify-content: center;
  }

  .docHeader__link {
    font-size: 0.7rem;
    padding: 4px 8px;
  }
}
</style>