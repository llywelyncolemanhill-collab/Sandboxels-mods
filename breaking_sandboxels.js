elements.methylamine = {
    color: "#e3f2fd",
    behavior: behaviors.LIQUID,
    category: "liquids"
};

elements.phenylacetone = {
    color: "#fff9c4",
    behavior: behaviors.LIQUID,
    category: "liquids"
};

elements.blue_crystals = {
    color: "#00b0ff",
    behavior: behaviors.POWDER,
    category: "powders"
};

reactions.phenylacetone = {
    methylamine: { elem1: "blue_crystals", elem2: "blue_crystals", chance: 0.8 }
};
