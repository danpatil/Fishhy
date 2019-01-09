
// Convert numbers into INR, Passed value is in Paise.
export function formatPrice(paise) {
    return (paise/100).toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    })
};

// Random names for store picker
export function randomName(name) {
    return name[Math.floor(Math.random() * name.length)];
};

// Genrate random number from given Adjective or Noun
export function funNames() {
    const adjective = [
        "adorable",
        "beautiful",
        "clean",
        "drab",
        "elegant",
        "fancy",
        "glamorous",
        "handsome",
        "long",
        "magnificent",
        "old-fashioned",
        "plain",
        "quaint",
        "sparkling",
        "ugliest",
        "unsightly",
        "angry",
        "bewildered",
        "clumsy",
        "defeated",
        "embarrassed",
        "fierce",
        "grumpy",
        "helpless",
        "itchy",
        "jealous",
        "lazy",
        "mysterious",
        "nervous",
        "obnoxious",
        "panicky",
        "repulsive",
        "scary",
        "thoughtless",
        "uptight",
        "worried"       
    ];

    const nouns = [
        "women",
        "men",
        "children",
        "teeth",
        "feet",
        "people",
        "leaves",
        "mice",
        "geese",
        "halves",
        "knives",
        "wives",
        "lives",
        "elves",
        "loaves",
        "potatoes",
        "tomatoes",
        "cacti",
        "foci",
        "fungi",
        "nuclei",
        "syllabuses",
        "analyses",
        "diagnoses",
        "oases",
        "theses",
        "crises",
        "phenomena",
        "criteria",
        "data"
      ];

      return `${randomName(adjective)}-${randomName(adjective)}-${randomName(nouns)}`
};