// --- ELEMENTAL & PHYSICS MATERIALS ---
elements.mineral_spirit = { color: "#e3f2fd", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 700 };
elements.amber_oil = { color: "#fff9c4", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1000 };
elements.crystal_shard = { color: "#ffffff", behavior: behaviors.POWDER, category: "solids", state: "solid", density: 1200 };
elements.sky_gem = { color: "#00b0ff", behavior: behaviors.POWDER, category: "solids", state: "solid", density: 1200 };

// --- ENERGY & BOTANICALS ---
elements.botanical_extract = { color: "#4e342e", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1000 };
elements.energy_powder = { color: "#f5f5f5", behavior: behaviors.POWDER, category: "solids", state: "solid", density: 1200 };
elements.vitamins = { color: "#e0e0e0", behavior: behaviors.POWDER, category: "solids", state: "solid", density: 1400 };
elements.healing_fluid = { color: "#00e676", behavior: behaviors.LIQUID, category: "liquids", state: "liquid", density: 1050 };

// --- MEDICAL DRUGS ---
elements.panadol = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 1200,
    desc: "Pain reliever tablet. Dissolves in water and cures dizzy, relaxed, or drunk humans."
};

elements.nurofen = {
    color: "#ffeb3b",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 1100,
    desc: "Anti-inflammatory pill. Dissolves in liquid and cures sick or altered elements."
};

elements.liquid_medicine = {
    color: "#b2dfdb",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020,
    desc: "A soothing medicinal syrup."
};

// --- WHISKEY LIQUOR ---
elements.whiskey = {
    color: "#b5651d",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 920,
    desc: "Distilled amber alcohol. Highly flammable."
};

// --- NATURE & SMOKING STUFF ---
elements.forest_herb = {
    color: "#2e7d32", 
    behavior: behaviors.POWDER, 
    category: "solids",
    state: "solid",
    density: 400,
    desc: "A green herbal element found in deep woods."
};

elements.herbal_incense = {
    color: "#a5d6a7", 
    behavior: behaviors.GAS, 
    category: "gases",
    state: "gas",
    density: 1,
    desc: "A calming green mist released from forest herbs."
};

elements.cigarette = {
    color: "#f5f5f5",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 300,
    desc: "Light it with fire to start smoking."
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
    density: 300,
    desc: "Actively burning tobacco product."
};

// --- HUMANS (ALTERED STATES) ---
elements.dizzy_human = {
    color: "#a7ffeb",
    behavior: [
        "M2|M1|M2",
        "M1|XX|M1",
        "M2|M1|M2"
    ],
    category: "life",
    state: "solid",
    density: 1000,
    desc: "A human experiencing highly unorganised movement."
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
    density: 1000,
    desc: "A human experiencing a state of calm and slow movement."
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
    density: 1000,
    desc: "A human who drank too much whiskey. Prone to stumbling and falling over."
};

// --- REACTION RECIPES ---
// Lab Basics
reactions.amber_oil = { "mineral_spirit": { elem1: "crystal_shard", elem2: "crystal_shard", chance: 0.5 } };
reactions.crystal_shard = { "fire": { elem1: "sky_gem", chance: 0.3 } };
reactions.botanical_extract = { "fire": { elem1: "energy_powder", chance: 0.4 } };
reactions.healing_fluid = { "meat": { elem1: "healing_fluid", elem2: "body", chance: 0.9 } };

// Cigarette Lighting & Smoke Physics
reactions.cigarette = {
    "fire": { elem1: "smoking_cigarette", chance: 0.9 },
    "torch": { elem1: "smoking_cigarette", chance: 0.9 },
    "plasma": { elem1: "smoking_cigarette", chance: 0.9 },
    "lava": { elem1: "smoking_cigarette", chance: 0.9 }
};
reactions.smoking_cigarette = {
    "human": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 },
    "head": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 },
    "body": { elem1: "smoking_cigarette", elem2: "dizzy_human", chance: 0.8 }
};

// Forest Herb Physics
reactions.forest_herb = { "fire": { elem1: "herbal_incense", chance: 0.5 }, "torch": { elem1: "herbal_incense", chance: 0.8 } };
reactions.herbal_incense = {
    "human": { elem1: "herbal_incense", elem2: "relaxed_human", chance: 0.7 },
    "head": { elem1: "herbal_incense", elem2: "relaxed_human", chance: 0.7 },
    "body": { elem1: "herbal_incense", elem2: "relaxed_human", chance: 0.7 }
};

// Medical Dissolving & Cures
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
reactions.liquid_medicine = {
    "dizzy_human": { elem1: "water", elem2: "human", chance: 1.0 },
    "relaxed_human": { elem1: "water", elem2: "human", chance: 1.0 },
    "drunk_human": { elem1: "water", elem2: "human", chance: 1.0 },
    "plague": { elem1: "water", elem2: "water", chance: 0.5 }
};

// Distillery & Alcohol Physics
reactions.wheat = { "water": { elem1: "whiskey", elem2: "whiskey", chance: 0.1 } };
reactions.whiskey = {
    "fire": { elem1: "fire", elem2: "fire", chance: 0.8 },
    "torch": { elem1: "fire", elem2: "fire", chance: 0.8 },
    "human": { elem1: "water", elem2: "drunk_human", chance: 0.9 },
    "head": { elem1: "water", elem2: "drunk_human", chance: 0.9 },
    "body": { elem1: "water", elem2: "drunk_human", chance: 0.9 },
    "dizzy_human": { elem1: "water", elem2: "drunk_human", chance: 0.9 }
};
