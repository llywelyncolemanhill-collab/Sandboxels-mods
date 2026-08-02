/* =========================================
   OFFICIAL SANDBOXELS COMPATIBLE FORMAT
   ========================================= */

// --- LIQUIDS CATEGORY ---
elements.ma = {
    name: "Methylamine",
    color: "#e3f2fd",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 699
};

elements.pa = {
    name: "Phenylacetone",
    color: "#fff9c4",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020
};

elements.wk = {
    name: "Whiskey",
    color: "#b5651d",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 920,
    desc: "Highly flammable alcohol.",
    tick: function(pixel) {
        if (pixel.temp > 80 && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
    },
    burn: 80,
    burnTime: 4000
};

elements.lm = {
    name: "Liquid Medicine",
    color: "#b2dfdb",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1020
};

// --- POWDERS CATEGORY ---
elements.me = {
    name: "Meth",
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200
};

elements.bs = {
    name: "Blue Sky",
    color: "#00b0ff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200
};

elements.pd = {
    name: "Panadol",
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1200
};

elements.nr = {
    name: "Nurofen",
    color: "#ffeb3b",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 1100
};

elements.fh = {
    name: "Forest Herb",
    color: "#2e7d32",
    behavior: behaviors.POWDER,
    category: "energy",
    state: "solid",
    density: 400,
    tick: function(pixel) {
        if (pixel.temp > 120 && !pixel.burning) {
            pixel.burning = true;
            pixel.burnStart = pixelTicks;
        }
    },
    burn: 30,
    burnTime: 6000
};

// --- SOLIDS CATEGORY ---
elements.cg = {
    name: "Cigarette",
    color: "#f5f5f5",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 300
};

elements.sc = {
    name: "Smoking Cigarette",
    color: "#ff3d00",
    behavior: behaviors.WALL,
    category: "solids",
    state: "solid",
    density: 300,
    tick: function(pixel) {
        if (Math.random() < 0.2) {
            var upY = pixel.y - 1;
            if (isEmpty(pixel.x, upY)) {
                createPixel("smoke", pixel.x, upY);
            }
        }
    }
};

// --- GASES CATEGORY ---
elements.hi = {
    name: "Herbal Incense",
    color: "#a5d6a7",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 1
};

// --- LIFE CATEGORY ---
elements.dh = {
    name: "Dizzy Human",
    color: "#a7ffeb",
    behavior: ["M2|M1|M2", "M1|XX|M1", "M2|M1|M2"],
    category: "life",
    state: "solid",
    density: 1000
};

elements.rh = {
    name: "Relaxed Human",
    color: "#c8e6c9",
    behavior: ["XX|XX|XX", "M1%0.1|XX|M1%0.1", "XX|M1%0.2|XX"],
    category: "life",
    state: "solid",
    density: 1000
};

elements.drh = {
    name: "Drunk Human",
    color: "#ffccbc",
    behavior: ["XX|XX|XX", "M1%0.3|XX|M1%0.3", "M2%0.4|M1|M2%0.4"],
    category: "life",
    state: "solid",
    density: 1000
};

// --- CHEMICAL REACTION CODES ---
reactions.pa = {
    "ma": { elem1: "me", elem2: "me", chance: 0.5 }
};
reactions.me = {
    "fire": { elem1: "bs", chance: 0.3 },
    "torch": { elem1: "bs", chance: 0.5 },
    "lava": { elem1: "bs", chance: 0.5 }
};
reactions.cg = {
    "fire": { elem1: "sc", chance: 0.9 },
    "torch": { elem1: "sc", chance: 0.9 }
};
reactions.sc = {
    "human": { elem1: "sc", elem2: "dh", chance: 0.8 },
    "head": { elem1: "sc", elem2: "dh", chance: 0.8 },
    "body": { elem1: "sc", elem2: "dh", chance: 0.8 }
};
reactions.fh = {
    "fire": { elem1: "hi", chance: 0.5 },
    "torch": { elem1: "hi", chance: 0.8 }
};
reactions.hi = {
    "human": { elem1: "hi", elem2: "rh", chance: 0.7 },
    "head": { elem1: "hi", elem2: "rh", chance: 0.7 }
};
reactions.pd = {
    "water": { elem1: "lm", elem2: "lm", chance: 0.6 },
    "dh": { elem1: "pd", elem2: "human", chance: 1.0 },
    "rh": { elem1: "pd", elem2: "human", chance: 1.0 },
    "drh": { elem1: "pd", elem2: "human", chance: 1.0 }
};
reactions.nr = {
    "water": { elem1: "lm", elem2: "lm", chance: 0.6 },
    "dh": { elem1: "nr", elem2: "human", chance: 1.0 },
    "rh": { elem1: "nr", elem2: "human", chance: 1.0 },
    "drh": { elem1: "nr", elem2: "human", chance: 1.0 }
};
reactions.wheat = {
    "water": { elem1: "wk", elem2: "wk", chance: 0.1 }
};
reactions.wk = {
    "human": { elem1: "water", elem2: "drh", chance: 0.9 },
    "head": { elem1: "water", elem2: "drh", chance: 0.9 },
    "body": { elem1: "water", elem2: "drh", chance: 0.9 }
};
