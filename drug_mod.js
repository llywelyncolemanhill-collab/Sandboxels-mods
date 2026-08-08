/* =========================================
   REMADE drug_mod.js — modernized and defensive
   - Keeps original element definitions and reactions
   - Registers short IDs and long-name aliases
   - Writes reactions into global reactions map and element.reactions
   - Re-applies registrations after a short timeout to survive load-order issues
   - Optional debug overlay when URL includes ?debug
   ========================================= */

// ensure globals
if (typeof window !== "undefined") {
  window.elements = window.elements || {};
  window.reactions = window.reactions || {};
}

// element definitions (short IDs)
const E = {
  ma: {
    name: "Methylamine",
    color: "#e3f2fd",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 699
  },
  pa: {
    name: "Phenylacetone",
    color: "#fff9c4",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 1020
  },
  wk: {
    name: "Whiskey",
    color: "#b5651d",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 920,
    desc: "Highly flammable alcohol."
  },
  me: {
    name: "Meth",
    color: "#ffffff",
    behavior: "POWDER",
    category: "energy",
    state: "solid",
    density: 1200
  },
  bs: {
    name: "Blue Sky",
    color: "#00b0ff",
    behavior: "POWDER",
    category: "energy",
    state: "solid",
    density: 1200
  },
  pd: {
    name: "Panadol",
    color: "#ffffff",
    behavior: "POWDER",
    category: "energy",
    state: "solid",
    density: 1200
  },
  cg: {
    name: "Cigarette",
    color: "#f5f5f5",
    behavior: "WALL",
    category: "solids",
    state: "solid",
    density: 300
  },
  sc: {
    name: "Smoking Cigarette",
    color: "#ff3d00",
    behavior: "WALL",
    category: "solids",
    state: "solid",
    density: 300
  },
  drh: {
    name: "Drunk Human",
    color: "#ffccbc",
    behavior: ["XX|XX|XX", "M1%0.3|XX|M1%0.3", "M2%0.4|M1|M2%0.4"],
    category: "life",
    state: "solid",
    density: 1000
  }
};

function registerElements() {
  try {
    // write short IDs only if not already defined
    elements.ma = elements.ma || E.ma;
    elements.pa = elements.pa || E.pa;
    elements.wk = elements.wk || E.wk;
    elements.me = elements.me || E.me;
    elements.bs = elements.bs || E.bs;
    elements.pd = elements.pd || E.pd;
    elements.cg = elements.cg || E.cg;
    elements.sc = elements.sc || E.sc;
    elements.drh = elements.drh || E.drh;

    // long-name aliases
    elements.methylamine = elements.methylamine || elements.ma;
    elements.phenylacetone = elements.phenylacetone || elements.pa;
    elements.whiskey = elements.whiskey || elements.wk;
    elements.meth = elements.meth || elements.me;
    elements.blue_crystals = elements.blue_crystals || elements.bs;
    elements.panadol = elements.panadol || elements.pd;
    elements.cigarette = elements.cigarette || elements.cg;
    elements.smoking_cigarette = elements.smoking_cigarette || elements.sc;
    elements.drunk_human = elements.drunk_human || elements.drh;
  } catch (e) {
    console.warn("registerElements error:", e);
  }
}

// canonical reaction objects (use the original semantics where present)
const RX = {
  pa_ma_to_me: { elem1: "me", elem2: "me", chance: 0.5 },
  me_on_fire: { elem1: "bs", chance: 0.3 },
  wk_on_human: { elem1: "water", elem2: "drh", chance: 0.9 },
  pd_on_drh: { elem1: "pd", elem2: "human", chance: 1.0 }
};

function registerReactions() {
  try {
    window.reactions = window.reactions || {};

    // pa + ma => me (original mapping preserved)
    reactions.pa = reactions.pa || {};
    reactions.pa.ma = reactions.pa.ma || RX.pa_ma_to_me;
    reactions.ma = reactions.ma || {};
    reactions.ma.pa = reactions.ma.pa || RX.pa_ma_to_me;

    // me + fire => bs
    reactions.me = reactions.me || {};
    reactions.me.fire = reactions.me.fire || RX.me_on_fire;

    // wk + human => water + drh
    reactions.wk = reactions.wk || {};
    reactions.wk.human = reactions.wk.human || RX.wk_on_human;

    // pd + drh => pd + human
    reactions.pd = reactions.pd || {};
    reactions.pd.drh = reactions.pd.drh || RX.pd_on_drh;

    // Also register under long names to be robust
    reactions.phenylacetone = reactions.phenylacetone || {};
    reactions.phenylacetone.methylamine = reactions.phenylacetone.methylamine || RX.pa_ma_to_me;

    reactions.methylamine = reactions.methylamine || {};
    reactions.methylamine.phenylacetone = reactions.methylamine.phenylacetone || RX.pa_ma_to_me;

    reactions.meth = reactions.meth || {};
    reactions.meth.fire = reactions.meth.fire || RX.me_on_fire;

    reactions.whiskey = reactions.whiskey || {};
    reactions.whiskey.human = reactions.whiskey.human || RX.wk_on_human;

    reactions.panadol = reactions.panadol || {};
    reactions.panadol.drh = reactions.panadol.drh || RX.pd_on_drh;

    // Attach reactions directly onto element objects (some engines check here)
    elements.pa.reactions = elements.pa.reactions || {};
    elements.pa.reactions.ma = elements.pa.reactions.ma || RX.pa_ma_to_me;
    elements.ma.reactions = elements.ma.reactions || {};
    elements.ma.reactions.pa = elements.ma.reactions.pa || RX.pa_ma_to_me;

    elements.me.reactions = elements.me.reactions || {};
    elements.me.reactions.fire = elements.me.reactions.fire || RX.me_on_fire;

    elements.wk.reactions = elements.wk.reactions || {};
    elements.wk.reactions.human = elements.wk.reactions.human || RX.wk_on_human;

    elements.pd.reactions = elements.pd.reactions || {};
    elements.pd.reactions.drh = elements.pd.reactions.drh || RX.pd_on_drh;

  } catch (e) {
    console.warn("registerReactions error:", e);
  }
}

// initial registration
registerElements();
registerReactions();

// re-register after a short delay to survive other mods overwriting things
setTimeout(() => {
  registerElements();
  registerReactions();
  if (typeof console !== "undefined") console.log("drug_mod: re-registered elements and reactions");
}, 800);

// optional ?debug overlay
(function maybeDebugOverlay() {
  try {
    if (!location.search.includes("debug")) return;
    setTimeout(() => {
      const info = {
        pa: window.elements && window.elements.pa ? window.elements.pa : null,
        ma: window.elements && window.elements.ma ? window.elements.ma : null,
        me: window.elements && window.elements.me ? window.elements.me : null,
        bs: window.elements && window.elements.bs ? window.elements.bs : null,
        rx_pa: window.reactions && window.reactions.pa ? window.reactions.pa : null
      };
      const id = "drugmod-debug-overlay";
      const old = document.getElementById(id);
      if (old) old.remove();
      const box = document.createElement('pre');
      box.id = id;
      Object.assign(box.style, {
        position: 'fixed',
        right: '8px',
        top: '8px',
        zIndex: 999999,
        maxHeight: '80vh',
        overflow: 'auto',
        background: 'rgba(0,0,0,0.85)',
        color: '#e6f7ff',
        padding: '10px',
        borderRadius: '8px',
        fontSize: '12px',
        lineHeight: '1.2',
        whiteSpace: 'pre-wrap'
      });
      box.textContent = JSON.stringify(info, null, 2);
      document.body.appendChild(box);
      console.log('drug_mod debug info:', info);
    }, 400);
  } catch (e) { /* ignore */ }
})();
