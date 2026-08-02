/* =========================================
   VERIFIED MODERN SANDBOXELS ENGINE FORMAT
   ========================================= */

// --- LIQUIDS ---
elements.ma = {
    name: "Methylamine",
    color: "#e3f2fd",
    behavior: "LIQUID", // Modern engine expects strings, not behaviors.LIQUID
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

elements.wk = {
    name: "Whiskey",
    color: "#b5651d",
    behavior: "LIQUID",
    category: "liquids",
    state: "liquid",
    density: 920,
    desc: "Highly flammable alcohol."
};

// --- POWDERS ---
elements.me = {
    name: "Meth",
    color: "#ffffff",
    behavior: "POWDER", // Fixed from behaviors.POWDER
    category: "energy",
    state: "solid",
    density: 1200
};

elements.bs = {
    name: "Blue Sky",
    color: "#00b0ff",
    behavior: "POWDER",
    category: "energy",
    state: "solid",
    density: 1200
};

elements.pd = {
    name: "Panadol",
    color: "#ffffff",
    behavior: "POWDER",
    category: "energy",
    state: "solid",
    density: 1200
};

// --- SOLIDS ---
elements.cg = {
    name: "Cigarette",
    color: "#f5f5f5",
    behavior: "WALL",
    category: "solids",
    state: "solid",
    density: 300
};

elements.sc = {
    name: "Smoking Cigarette",
    color: "#ff3d00",
    behavior: "WALL",
    category: "solids",
    state: "solid",
    density: 300
};

// --- LIFE ---
elements.drh = {
    name: "Drunk Human",
    color: "#ffccbc",
    behavior: ["XX|XX|XX", "M1%0.3|XX|M1%0.3", "M2%0.4|M1|M2%0.4"],
    category: "life",
    state: "solid",
    density: 1000
};

// --- REACTIONS ---
reactions.pa = {
    "ma": { elem1: "me", elem2: "me", chance: 0.5 }
};
reactions.me = {
    "fire": { elem1: "bs", chance: 0.3 }
};
reactions.wk = {
    "human": { elem1: "water", elem2: "drh", chance: 0.9 }
};
reactions.pd = {
    "drh": { elem1: "pd", elem2: "human", chance: 1.0 }
};
