// breaking_sandboxels.js
// Ensure the two liquids (Methylamine & Phenylacetone) have full "liquid" properties

// Ensure elements object exists
if (typeof elements === "undefined") window.elements = {};

// Define Methylamine (short id: ma) with liquid properties
elements.ma = elements.ma || {
    name: "Methylamine",
    color: "#e3f2fd",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 699
};

// Define Phenylacetone (short id: pa) with liquid properties
elements.pa = elements.pa || {
    name: "Phenylacetone",
    color: "#fff9c4",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 1020
};

// Blue crystals (powder) — unchanged
elements.bs = elements.bs || {
    name: "Blue Sky",
    color: "#00b0ff",
    behavior: "POWDER",
    category: "powders",
    state: "solid",
    density: 1200
};

// Ensure reactions exist and register pa <-> ma -> bs
if (typeof reactions === "undefined") window.reactions = {};
reactions.pa = reactions.pa || {};
reactions.pa.ma = reactions.pa.ma || { elem1: "bs", elem2: "bs", chance: 0.8 };
reactions.ma = reactions.ma || {};
reactions.ma.pa = reactions.ma.pa || { elem1: "bs", elem2: "bs", chance: 0.8 };
