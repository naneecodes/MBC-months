//Developing Listening Skills 1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Developing Listening Skills L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "Asteroids and Comets",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [11 - 12],
        workBookPages: [4]
      },
      {
        title: "Comprehension",
        studentBookPages: [13]
      },
      {
        title: "Listening Skills",
        studentBookPages: [14],
        workBookPages: [5]
      }
    ]
  },
  {
    unit: 2,
    title: "Eclipses",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [15, 16],
        workBookPages: [6]
      },
      {
        title: "Comprehension",
        studentBookPages: [17]
      },
      {
        title: "Listening Skills",
        studentBookPages: [18],
        workBookPages: [7]
      }
    ]
  },
  {
    unit: 3,
    title: "Galileo Galilei",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [19, 20],
        workBookPages: [8]
      },
      {
        title: "Comprehension",
        studentBookPages: [21]
      },
      {
        title: "Listening Skills",
        studentBookPages: [22],
        workBookPages: [9]
      }
    ]
  },
  {
    unit: 4,
    title: "Percival Lowell",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [23, 24],
        workBookPages: [10]
      },
      {
        title: "Comprehension",
        studentBookPages: [25]
      },
      {
        title: "Listening Skills",
        studentBookPages: [26],
        workBookPages: [11]
      }
    ]
  },
  {
    unit: 5,
    title: "Norse Gods and Goddesses",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [29, 30],
        workBookPages: [14]
      },
      {
        title: "Comprehension",
        studentBookPages: [31]
      },
      {
        title: "Listening Skills",
        studentBookPages: [32],
        workBookPages: [15]
      }
    ]
  },
  {
    unit: 6,
    title: "Creatures in Norse Mythology",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [33, 34],
        workBookPages: [16]
      },
      {
        title: "Comprehension",
        studentBookPages: [35]
      },
      {
        title: "Listening Skills",
        studentBookPages: [36],
        workBookPages: [17]
      }
    ]
  },
  {
    unit: 7,
    title: "Thor's Wedding",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [37, 38],
        workBookPages: [18]
      },
      {
        title: "Comprehension",
        studentBookPages: [39]
      },
      {
        title: "Listening Skills",
        studentBookPages: [40],
        workBookPages: [19]
      }
    ]
  },
  {
    unit: 8,
    title: "Ragnarok",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [41, 42],
        workBookPages: [20]
      },
      {
        title: "Comprehension",
        studentBookPages: [43]
      },
      {
        title: "Listening Skills",
        studentBookPages: [44],
        workBookPages: [21]
      }
    ]
  },
  {
    unit: 9,
    title: "King Tut's Tomb",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [47, 48],
        workBookPages: [24]
      },
      {
        title: "Comprehension",
        studentBookPages: [49]
      },
      {
        title: "Listening Skills",
        studentBookPages: [50],
        workBookPages: [25]
      }
    ]
  },
  {
    unit: 10,
    title: "The Rosetta Stone",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [51, 52],
        workBookPages: [26]
      },
      {
        title: "Comprehension",
        studentBookPages: [53]
      },
      {
        title: "Listening Skills",
        studentBookPages: [54],
        workBookPages: [27]
      }
    ]
  },
  {
    unit: 11,
    title: "Penicillin",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [55, 56],
        workBookPages: [28]
      },
      {
        title: "Comprehension",
        studentBookPages: [57]
      },
      {
        title: "Listening Skills",
        studentBookPages: [58],
        workBookPages: [29]
      }
    ]
  },
  {
    unit: 12,
    title: "The Microwave Oven",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [59, 60],
        workBookPages: [30]
      },
      {
        title: "Comprehension",
        studentBookPages: [61]
      },
      {
        title: "Listening Skills",
        studentBookPages: [62],
        workBookPages: [31]
      }
    ]
  },
  {
    unit: 13,
    title: "Frankenstein",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [65, 66],
        workBookPages: [34]
      },
      {
        title: "Comprehension",
        studentBookPages: [67]
      },
      {
        title: "Listening Skills",
        studentBookPages: [68],
        workBookPages: [35]
      }
    ]
  },
  {
    unit: 14,
    title: "Dracula",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [69, 70],
        workBookPages: [36]
      },
      {
        title: "Comprehension",
        studentBookPages: [71]
      },
      {
        title: "Listening Skills",
        studentBookPages: [72],
        workBookPages: [37]
      }
    ]
  },
  {
    unit: 15,
    title: "Alice's Adventures in Wonderland",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [73, 74],
        workBookPages: [38]
      },
      {
        title: "Comprehension",
        studentBookPages: [75]
      },
      {
        title: "Listening Skills",
        studentBookPages: [76],
        workBookPages: [39]
      }
    ]
  },
  {
    unit: 16,
    title: "20,000 Leagues Under the Sea",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [77, 78],
        workBookPages: [40]
      },
      {
        title: "Comprehension",
        studentBookPages: [79]
      },
      {
        title: "Listening Skills",
        studentBookPages: [80],
        workBookPages: [41]
      }
    ]
  },
  {
    unit: 17,
    title: "The Koala",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [83, 84],
        workBookPages: [44]
      },
      {
        title: "Comprehension",
        studentBookPages: [85]
      },
      {
        title: "Listening Skills",
        studentBookPages: [86],
        workBookPages: [45]
      }
    ]
  },
  {
    unit: 18,
    title: "The Komodo Dragon",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [87, 88],
        workBookPages: [46]
      },
      {
        title: "Comprehension",
        studentBookPages: [89]
      },
      {
        title: "Listening Skills",
        studentBookPages: [90],
        workBookPages: [47]
      }
    ]
  },
  {
    unit: 19,
    title: "The Walking Leaf",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [91, 92],
        workBookPages: [48]
      },
      {
        title: "Comprehension",
        studentBookPages: [93]
      },
      {
        title: "Listening Skills",
        studentBookPages: [94],
        workBookPages: [49]
      }
    ]
  },
  {
    unit: 20,
    title: "The Hummingbird",
    lessons: [
      {
        title: "Pre-Listening Questions, Vocabulary & Text",
        studentBookPages: [95, 96],
        workBookPages: [50]
      },
      {
        title: "Comprehension",
        studentBookPages: [97]
      },
      {
        title: "Listening Skills",
        studentBookPages: [98],
        workBookPages: [51]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
