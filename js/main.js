/* ── NAV ACTIVE STATE ── */
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && !href.startsWith('#') && path === href) {
      a.classList.add('active');
    }
  });
})();

/* ── FAQ TOGGLE ── */
function toggleFaq(btn) {
  btn.parentElement.classList.toggle('open');
}

/* ── COPY COMMAND ── */
function copyCmd(el, cmd) {
  const text = cmd || 'npm install -g tasuki';
  navigator.clipboard.writeText(text).then(() => {
    const hint = document.getElementById('copy-hint');
    if (hint) {
      hint.textContent = '✓ copied';
      hint.style.color = 'var(--reviewer)';
      setTimeout(() => { hint.textContent = 'click to copy'; hint.style.color = ''; }, 2000);
    }
    // brief flash on element
    const prev = el.style.borderColor;
    el.style.borderColor = 'rgba(74,222,128,0.5)';
    setTimeout(() => { el.style.borderColor = prev; }, 800);
  });
}

/* ── STAGE EXPAND (pipeline.html) ── */
function toggleStage(block) {
  block.classList.toggle('open');
}

/* ── CMD EXPAND (cli.html) ── */
function toggleCmd(block) {
  block.classList.toggle('open');
}

/* ── SCROLL REVEAL ── */
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.06 });

  function initReveal() {
    document.querySelectorAll('.agent-card, .agent-card-new, .pipeline-stage, .price-card, .comp-card, .stage-block, .cmd-block, .stack-card, .hook-block, .layer-card, .mem-card, .mode-card, .adapter-card').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();

/* ── NAV LOGO SVG ── */
const NAV_LOGO_SVG = `<svg width="26" height="26" viewBox="0 0 92 84" fill="none">
  <line x1="18" y1="12" x2="52" y2="8"   stroke="#D8D4CC" stroke-width="1.2" opacity="0.55"/>
  <line x1="18" y1="12" x2="14" y2="44"  stroke="#D8D4CC" stroke-width="1.2" opacity="0.25"/>
  <line x1="52" y1="8"  x2="72" y2="28"  stroke="#F5E642"  stroke-width="1.2" opacity="0.5"/>
  <line x1="52" y1="8"  x2="62" y2="48"  stroke="#F5E642"  stroke-width="1.2" opacity="0.42"/>
  <line x1="72" y1="28" x2="62" y2="48"  stroke="#4A9EFF"  stroke-width="1.2" opacity="0.52"/>
  <line x1="62" y1="48" x2="38" y2="58"  stroke="#00D4FF"  stroke-width="1.2" opacity="0.52"/>
  <line x1="62" y1="48" x2="14" y2="44"  stroke="#00D4FF"  stroke-width="1.2" opacity="0.22"/>
  <line x1="38" y1="58" x2="14" y2="44"  stroke="#FF7B6B"  stroke-width="1.2" opacity="0.32"/>
  <line x1="38" y1="58" x2="28" y2="72"  stroke="#FF7B6B"  stroke-width="1.2" opacity="0.46"/>
  <line x1="28" y1="72" x2="58" y2="72"  stroke="#FF4444"  stroke-width="1.2" opacity="0.56"/>
  <line x1="58" y1="72" x2="76" y2="60"  stroke="#4ADE80"  stroke-width="1.2" opacity="0.5"/>
  <line x1="62" y1="48" x2="76" y2="60"  stroke="#00D4FF"  stroke-width="1.2" opacity="0.2"/>
  <circle cx="18" cy="12" r="4.5" fill="#D8D4CC"/>
  <circle cx="52" cy="8"  r="4"   fill="#F5E642"/>
  <circle cx="72" cy="28" r="3.5" fill="#4A9EFF"/>
  <circle cx="62" cy="48" r="5"   fill="#00D4FF"/>
  <circle cx="38" cy="58" r="4"   fill="#FF7B6B"/>
  <circle cx="14" cy="44" r="3"   fill="#FF8C2B"/>
  <circle cx="28" cy="72" r="4.5" fill="#FF4444"/>
  <circle cx="58" cy="72" r="4.5" fill="#4ADE80"/>
  <circle cx="76" cy="60" r="3.5" fill="#A0A8B0"/>
</svg>`;

const FOOTER_LOGO_SVG = `<svg width="18" height="18" viewBox="0 0 92 84" fill="none" style="opacity:0.5">
  <line x1="18" y1="12" x2="52" y2="8"   stroke="#D8D4CC" stroke-width="1.2" opacity="0.55"/>
  <line x1="52" y1="8"  x2="72" y2="28"  stroke="#F5E642"  stroke-width="1.2" opacity="0.5"/>
  <line x1="72" y1="28" x2="62" y2="48"  stroke="#4A9EFF"  stroke-width="1.2" opacity="0.52"/>
  <line x1="62" y1="48" x2="38" y2="58"  stroke="#00D4FF"  stroke-width="1.2" opacity="0.52"/>
  <line x1="38" y1="58" x2="28" y2="72"  stroke="#FF7B6B"  stroke-width="1.2" opacity="0.46"/>
  <line x1="28" y1="72" x2="58" y2="72"  stroke="#FF4444"  stroke-width="1.2" opacity="0.56"/>
  <line x1="58" y1="72" x2="76" y2="60"  stroke="#4ADE80"  stroke-width="1.2" opacity="0.5"/>
  <circle cx="18" cy="12" r="4.5" fill="#D8D4CC"/>
  <circle cx="52" cy="8"  r="4"   fill="#F5E642"/>
  <circle cx="72" cy="28" r="3.5" fill="#4A9EFF"/>
  <circle cx="62" cy="48" r="5"   fill="#00D4FF"/>
  <circle cx="38" cy="58" r="4"   fill="#FF7B6B"/>
  <circle cx="14" cy="44" r="3"   fill="#FF8C2B"/>
  <circle cx="28" cy="72" r="4.5" fill="#FF4444"/>
  <circle cx="58" cy="72" r="4.5" fill="#4ADE80"/>
  <circle cx="76" cy="60" r="3.5" fill="#A0A8B0"/>
</svg>`;
