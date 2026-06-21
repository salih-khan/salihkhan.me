<template>
  <div class="cv-page">
    <div class="cv-container">
      
      <!-- Minimal Header -->
      <header class="cv-header">
        <h1>Curriculum Vitae</h1>
        <div class="cv-actions">
          <a :href="pdfUrl" download class="btn-download">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </a>
          <a href="/" class="btn-back">Back</a>
        </div>
      </header>

      <!-- PDF Viewer - Fluid height -->
      <div class="pdf-wrapper">
        <object
          :data="pdfUrl"
          type="application/pdf"
          class="pdf-viewer"
          aria-label="PDF viewer for Salih Khan's CV"
        >
          <div class="pdf-fallback">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="12" y1="18" x2="12" y2="12"/>
              <polyline points="9 15 12 18 15 15"/>
            </svg>
            <p>Your browser doesn't support embedded PDFs.</p>
            <a :href="pdfUrl" download class="btn-download">Download PDF instead</a>
          </div>
        </object>
      </div>

    </div>
  </div>
</template>

<script setup>
// Import PDF from assets
import pdfFile from '../assets/Salih_Khan_Tech.pdf';

const pdfUrl = pdfFile;
</script>

<style scoped>
/* ============================================
   Minimalist Modern CV Page - Fluid
   ============================================ */

.cv-page {
  min-height: 100vh;
  background: #f6f5f3;
  padding: 2rem 1.5rem 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.cv-container {
  width: 100%;
  max-width: 1100px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02);
  padding: 2rem 2.5rem 2.5rem;
  transition: box-shadow 0.3s ease;
}

.cv-container:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.02);
}

/* ── Header ── */
.cv-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 1.5rem;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ebe8e2;
}

.cv-header h1 {
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #2c2a27;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
}

/* ── Buttons ── */
.cv-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  background: #1e1c1a;
  color: #ffffff;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  text-decoration: none;
  letter-spacing: 0.2px;
  transition: background 0.25s ease, transform 0.15s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
}

.btn-download:hover {
  background: #33302c;
  transform: translateY(-1px);
}

.btn-download:active {
  transform: scale(0.97);
}

.btn-download svg {
  flex-shrink: 0;
}

.btn-back {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #6b6560;
  font-size: 0.8rem;
  font-weight: 450;
  text-decoration: none;
  border-radius: 40px;
  transition: color 0.2s ease, background 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
}

.btn-back:hover {
  color: #1e1c1a;
  background: #f2efe9;
}

/* ── PDF Viewer - FLUID, no height restriction ── */
.pdf-wrapper {
  background: #f8f7f4;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
}

.pdf-viewer {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1.4; /* Nice proportion for A4-like viewing */
  min-height: 70vh;
  border: none;
  display: block;
  border-radius: 14px;
}

/* ── Fallback ── */
.pdf-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 4rem 2rem;
  color: #6b6560;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
  min-height: 60vh;
}

.pdf-fallback svg {
  color: #b5ada5;
  margin-bottom: 0.25rem;
}

.pdf-fallback p {
  margin: 0;
  font-size: 0.95rem;
}

.pdf-fallback .btn-download {
  margin-top: 0.25rem;
  background: #6b6560;
}

.pdf-fallback .btn-download:hover {
  background: #4a4540;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .cv-page {
    padding: 1rem 0.75rem 3rem;
  }

  .cv-container {
    padding: 1.25rem 1.25rem 1.5rem;
    border-radius: 16px;
  }

  .cv-header {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }

  .cv-header h1 {
    text-align: center;
    font-size: 1.1rem;
  }

  .cv-actions {
    justify-content: center;
    gap: 0.4rem;
  }

  .btn-download {
    padding: 0.45rem 1rem;
    font-size: 0.75rem;
  }

  .btn-back {
    padding: 0.45rem 0.8rem;
    font-size: 0.75rem;
  }

  .pdf-viewer {
    aspect-ratio: 1 / 1.6;
    min-height: 50vh;
    height: auto;
  }

  .pdf-fallback {
    min-height: 40vh;
    padding: 3rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .cv-container {
    padding: 1rem;
    border-radius: 12px;
  }

  .cv-header h1 {
    font-size: 1rem;
  }

  .btn-download {
    padding: 0.4rem 0.85rem;
    font-size: 0.7rem;
  }

  .btn-download svg {
    width: 14px;
    height: 14px;
  }

  .pdf-viewer {
    aspect-ratio: 1 / 1.8;
    min-height: 35vh;
    height: auto;
  }

  .pdf-fallback {
    min-height: 30vh;
    padding: 2rem 1rem;
  }

  .pdf-fallback svg {
    width: 36px;
    height: 36px;
  }

  .pdf-fallback p {
    font-size: 0.85rem;
  }
}

/* ── Print Styles ── */
@media print {
  .cv-page {
    padding: 0;
    background: #ffffff;
  }

  .cv-container {
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }

  .cv-header {
    display: none;
  }

  .pdf-wrapper {
    background: #ffffff;
    border-radius: 0;
  }

  .pdf-viewer {
    aspect-ratio: auto;
    height: 100vh;
    border-radius: 0;
  }
}
</style>