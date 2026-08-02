// --- CODES VERIFIED ACCORDING TO OFFICIAL SANDBOXELS DOCS ---

// Liquids (category must be strictly "liquids")
elements.methylamine = {
    color: "#e3f2fd",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 699
};

elements.phenylacetone = {
    color: "#fff9c4",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020
};

elements.whiskey = {
    color: "#b5651d",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 920,
    desc: "Distilled amber alcohol."
};

elements.liquid_medicine = {
    color: "#b2dfdb",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020,
    desc: "A soothing medicinal syrup."
};

// Solids (Powders go into "energy", blocks go into "solids")
elements.meth = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200
};

elements.blue_sky = {
    color: "#00b0ff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200
};

elements.panadol = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200,
    desc: "Pain reliever tablet."
};

elements.nurofen = {
    color: "#ffeb3b",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1100,
    desc: "Anti-inflammatory pill."
};

elements.forest_herb = {
    color: "#2e7d32",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 400
};

elements.cigarette = {
    color: "#f5f5f5",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 300
};

elements.smoking_cigarette = {
    color: "#ff3d00",
    behavior: [
        "XX|CR:smoke%0.5|XX",
        "XX|XX|XX",
        "XX|XX|XX"
    ],
    category: "solids",
    state: "solid",
    density: 300
};

// Gases (category must be strictly "gases")
elements.herbal_incense = {
    color: "#a5d6a7",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 1
};

// Life (category must be strictly "life")
elements.dizzy_human = {
    color: "#a7ffeb",
    behavior: [
        "M2|M1|M2",
        "M1|XX|M1",
        "M2|M1|M2"
    ],
    category: "life",
    state: "solid",
    density: 1000
};

elements.relaxed_human = {
    color: "#c8e6c9",
    behavior: [
        "XX|XX|XX",
        "M1%0.1|XX|M1%0.1",
        "XX|M1%0.2|XX"
    ],
    category: "life",
    state: "solid",
    density: 1000
};

elements.drunk_human = {
    color: "#ffccbc",
    behavior: [
        "XX|XX|XX",
        "M1%0.3|XX|M1%0.3",
        "M2%0.4|M1|M2%0.4"
    ],
    category: "life",
    state: "solid",
    density: 1000
};

// --- REACTIONS ---
reactions.phenylacetone = {
    "methylamine": { elem1: "meth", elem2: "meth", chance: 0.5 }
};
reactions.meth = {
    "fire": { elem1: "blue_sky", chance: 0.3 },
    "lava": { elem1: "blue_sky", chance: 0.5 }
};
reactions.cigarette = {
    "fire": { elem1: "smoking_cigarette", chance: 0.9 },
    "torch": { elem1: "smoking_cigarette", chance: 0.9 }
};
reactions.smoking_cigarette = {
    "human": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 },
    "head": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 },
    "body": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 }
};
reactions.forest_herb = {
    "fire": { elem1: "herbal_incense", chance: 0.5 },
    "torch": { elem1: "herbal_incense", chance: 0.8 }
};
reactions.herbal_incense = {
    "human": { elem1: "herbal_incense", elem2: "relaxed_human", chance: 0.7 },
    "head": { elem1: "herbal_incense", elem2: "relaxed_human", chance: 0.7 }
};
reactions.panadol = {
    "water": { elem1: "liquid_medicine", elem2: "liquid_medicine", chance: 0.6 },
    "dizzy_human": { elem1: "panadol", elem2: "human", chance: 1.0 },
    "relaxed_human": { elem1: "panadol", elem2: "human", chance: 1.0 },
    "drunk_human": { elem1: "panadol", elem2: "human", chance: 1.0 }
};
reactions.nurofen = {
    "water": { elem1: "liquid_medicine", elem2: "liquid_medicine", chance: 0.6 },
    "dizzy_human": { elem1: "nurofen", elem2: "human", chance: 1.0 },
    "relaxed_human": { elem1: "nurofen", elem2: "human", chance: 1.0 },
    "drunk_human": { elem1: "nurofen", elem2: "human", chance: 1.0 }
};
reactions.wheat = {
    "water": { elem1: "whiskey", elem2: "whiskey", chance: 0.1 }
};
reactions.whiskey = {
    "fire": { elem1: "fire", elem2: "fire", chance: 0.8 },
    "human": { elem1: "water", elem2: "drunk_human", chance: 0.9 },
    "head": { elem1: "water", elem2: "drunk_human", chance: 0.9 },
    "body": { elem1: "water", elem2: "drunk_human", chance: 0.9 }
};
