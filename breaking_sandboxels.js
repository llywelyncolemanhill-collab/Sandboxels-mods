elements.methylamine = {
    color: "#e3f2fd",
    behavior: "LIQUID",
    category: "liquids"
};

elements.phenylacetone = {
    color: "#fff9c4",
    behavior: "LIQUID",
    category: "liquids"
};

elements.blue_crystals = {
    color: "#00b0ff",
    behavior: "POWDER",
    category: "powders"
};

reactions.phenylacetone = {
    "methylamine": { elem1: "blue_crystals", elem2: "blue_crystals", chance: 0.8 }
};

reactions.methylamine = {
    "phenylacetone": { elem1: "blue_crystals", elem2: "blue_crystals", chance: 0.8 }
};
