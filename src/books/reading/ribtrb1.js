import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Radix iBT TOEFL Reading Blue L1";
export const subject = subjects.READING;
export const units = [
  {
    unit: 1,
    title: "Vocabulary",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [10, 11]
      },
      {
        title: "Reading Practice 01: Wombats",
        studentBookPages: [12, 13]
      },
      {
        title: "Reading Practice 02: The Butterfly Effect",
        studentBookPages: [14, 15]
      },
      {
        title: "Reading Practice 03: 30 St.Mary Axe",
        studentBookPages: [16, 17]
      },
      {
        title: "iBT Practice: A New Style of Art: Impressionism",
        studentBookPages: [18, 20]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [21, 22]
      }
    ]
  },
  {
    unit: 2,
    title: "Reference",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [24, 25]
      },
      {
        title: "Reading Practice 01: The Great Chicago Fire",
        studentBookPages: [26, 27]
      },
      {
        title: "Reading Practice 02: Separation Anxiety",
        studentBookPages: [28, 29]
      },
      {
        title: "Reading Practice 03: The Disapperance of a Lake",
        studentBookPages: [30, 31]
      },
      {
        title: "iBT Practice: An Unusual Ocean Creature: the Jellyfish",
        studentBookPages: [32, 34]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [35, 36]
      }
    ]
  },
  {
    unit: 3,
    title: "Fact & Negative Fact",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [38, 39]
      },
      {
        title: "Reading Practice 01: The Washington Monument",
        studentBookPages: [40, 41]
      },
      {
        title: "Reading Practice 02: Ants and Termites",
        studentBookPages: [42, 43]
      },
      {
        title:
          "Reading Practice 03: The Mystery of the Indus Valley Civilization",
        studentBookPages: [44, 45]
      },
      {
        title: "iBT Practice: The Paintings of Lascaux",
        studentBookPages: [46, 48]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [49, 50]
      }
    ]
  },
  {
    unit: 4,
    title: "Sentence Simpification",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [52, 53]
      },
      {
        title: "Reading Practice 01: Paleoclimatology",
        studentBookPages: [54, 55]
      },
      {
        title: "Reading Practice 02: Jacques Cousteau",
        studentBookPages: [56, 57]
      },
      {
        title: "Reading Practice 03: The Four Forces of Flight",
        studentBookPages: [58, 59]
      },
      {
        title: "iBT Practice: Copyleft",
        studentBookPages: [60, 62]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [63, 64]
      },
      {
        title: "Actual Practice Test 1: Three Layers of Skin",
        studentBookPages: [66, 69]
      }
    ]
  },
  {
    unit: 5,
    title: "Inference",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [72, 73]
      },
      {
        title: "Reading Practice 01: Underground Railroad: A Secret Network",
        studentBookPages: [74, 75]
      },
      {
        title: "Reading Practice 02: Fireflies",
        studentBookPages: [76, 77]
      },
      {
        title: "Reading Practice 03: Homo Erectus",
        studentBookPages: [78, 79]
      },
      {
        title: "iBT Practice: Earth's Water Cycle",
        studentBookPages: [80, 82]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [83, 84]
      }
    ]
  },
  {
    unit: 6,
    title: "Rhetorical Purpose",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [86, 87]
      },
      {
        title: "Reading Practice 01: John James Audobon",
        studentBookPages: [88, 89]
      },
      {
        title: "Reading Practice 02: Eruption of Mount St. Helens",
        studentBookPages: [90, 91]
      },
      {
        title: "Reading Practice 03: The Attribution Theory",
        studentBookPages: [92, 93]
      },
      {
        title: "iBT Practice: The Dangers of Algal Blooms",
        studentBookPages: [94, 96]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [97, 98]
      },
      {
        title: "Actual Practice Test 2: Ancient Athens and Sparta",
        studentBookPages: [100, 103]
      }
    ]
  },
  {
    unit: 7,
    title: "Insertion",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [106, 107]
      },
      {
        title: "Reading Practice 01: The Roman Colosseum",
        studentBookPages: [108, 109]
      },
      {
        title: "Reading Practice 02: The Invention of the Traffic Light",
        studentBookPages: [110, 111]
      },
      {
        title: "Reading Practice 03: Latitude and Longitude",
        studentBookPages: [112, 113]
      },
      {
        title: "iBT Practice: Aestheticism",
        studentBookPages: [114, 116]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [117, 118]
      }
    ]
  },
  {
    unit: 8,
    title: "Prose Summary",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [120, 121]
      },
      {
        title: "Reading Practice 01: The Invention of Windshield Wipers",
        studentBookPages: [122, 123]
      },
      {
        title: "Reading Practice 02: Assemblage Art",
        studentBookPages: [124, 125]
      },
      {
        title: "Reading Practice 03: The Importance of Rain Forests",
        studentBookPages: [126, 127]
      },
      {
        title: "iBT Practice: The Iroquois Longhoue",
        studentBookPages: [128, 130]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [131, 132]
      }
    ]
  },
  {
    unit: 9,
    title: "Schematic Table",
    lessons: [
      {
        title: "Basic Drills 01, Basic Drills 02",
        studentBookPages: [134, 135]
      },
      {
        title: "Reading Practice 01: Bacteria and Viruses",
        studentBookPages: [136, 137]
      },
      {
        title: "Reading Practice 02: Bees and Wasps",
        studentBookPages: [138, 139]
      },
      {
        title: "Reading Practice 03: Sleet and Hail",
        studentBookPages: [140, 141]
      },
      {
        title: "iBT Practice: The Polar Regions",
        studentBookPages: [142, 144]
      },
      {
        title: "Vocabulary Review",
        studentBookPages: [145, 146]
      },
      {
        title: "Actual Practice Test 3",
        studentBookPages: [148, 155]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
