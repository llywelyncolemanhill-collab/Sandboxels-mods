// Ensure globals
window.elements = window.elements || {};
window.reactions = window.reactions || {};

// Methylamine (ma) — explicit liquid properties
elements.ma = elements.ma || {
  name: "Methylamine",
  color: "#e3f2fd",
  behavior: "LIQUID",
  category: "liquids",
  state: "liquid",
  density: 699
};

// Phenylacetone (pa) — explicit liquid properties
elements.pa = elements.pa || {
  name: "Phenylacetone",
  color: "#fff9c4",
  behavior: "LIQUID",
  category: "liquids",
  state: "liquid",
  density: 1020
};

// Keep Blue Sky powder (bs) if needed
elements.bs = elements.bs || {
  name: "Blue Sky",
  color: "#00b0ff",
  behavior: "POWDER",
  category: "powders",
  state: "solid",
  density: 1200
};

// Ensure reaction pa <-> ma -> bs is registered
reactions.pa = reactions.pa || {};
reactions.pa.ma = reactions.pa.ma || { elem1: "bs", elem2: "bs", chance: 0.8 };
reactions.ma = reactions.ma || {};
reactions.ma.pa = reactions.ma.pa || { elem1: "bs", elem2: "bs", chance: 0.8 };
