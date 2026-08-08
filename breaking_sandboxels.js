// breaking_sandboxels.js
// Fixed to use the same short element IDs as drug_mod.js (pa, ma, bs)
// and to register reactions on those IDs so the mod works together with drug_mod.js

// Ensure elements object exists
if (typeof elements === "undefined") window.elements = {};

elements.ma = {
    name: "Methylamine",
    color: "#e3f2fd",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 699
};

elements.pa = {
    name: "Phenylacetone",
    color: "#fff9c4",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 1020
};

elements.bs = {
    name: "Blue Sky",
    color: "#00b0ff",
    behavior: "POWDER",
    category: "powders",
    state: "solid",
    density: 1200
};

// Ensure reactions object exists and register reaction on the short IDs
if (typeof reactions === "undefined") window.reactions = {};
reactions.pa = reactions.pa || {};
reactions.pa.ma = { elem1: "bs", elem2: "bs", chance: 0.8 };

// Reciprocal (some engines check both sides)
reactions.ma = reactions.ma || {};
reactions.ma.pa = { elem1: "bs", elem2: "bs", chance: 0.8 };
