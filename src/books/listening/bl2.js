//Bricks Listening 250 L2
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Listening 250 L2";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "What I Want to Be",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [9],
        workBookPages: [4]
      },
      {
        title: "Topic 1: What Do You Want to Do?",
        studentBookPages: [6],
        workBookPages: [5, 6]
      },
      {
        title: "Topic 2: Dreams About the Future",
        studentBookPages: [7],
        workBookPages: [6, 7]
      },
      {
        title: "Topic 3: Worrying About Future Dreams",
        studentBookPages: [8],
        workBookPages: [7, 8]
      },
      {
        title: "Listening Skills (Reasoning) & Unit Test",
        studentBookPages: [10, 11]
      }
    ]
  },
  {
    unit: 2,
    title: "Seasons",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [15],
        workBookPages: [9]
      },
      {
        title: "Topic 1: What's Your Favorite Season?",
        studentBookPages: [12],
        workBookPages: [10, 11]
      },
      {
        title: "Topic 2: Different Seasons in Different Countries",
        studentBookPages: [13],
        workBookPages: [11, 12]
      },
      {
        title: "Topic 3: A Season I Like, A Season I Dislike",
        studentBookPages: [14],
        workBookPages: [13]
      },
      {
        title: "Listening Skills (Comparing and Contrasting) & Unit Test",
        studentBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 3,
    title: "Holidays",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [21],
        workBookPages: [14]
      },
      {
        title: "Topic 1: Specialty of the Holidays",
        studentBookPages: [18],
        workBookPages: [15, 16]
      },
      {
        title: "Topic 2: New Year's Eve",
        studentBookPages: [19],
        workBookPages: [16, 17]
      },
      {
        title: "Topic 3: Mother's Day",
        studentBookPages: [20],
        workBookPages: [18]
      },
      {
        title: "Listening Skills (Comparing and Contrasting) & Unit Test",
        studentBookPages: [22, 23]
      }
    ]
  },
  {
    unit: 4,
    title: "Restaurant",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [27],
        workBookPages: [19]
      },
      {
        title: "Topic 1: Recommendation for Lunch",
        studentBookPages: [24],
        workBookPages: [20, 21]
      },
      {
        title: "Topic 2: Ordering Food on the Phone",
        studentBookPages: [25],
        workBookPages: [21, 22]
      },
      {
        title: "Topic 3: Launching of New Pizza",
        studentBookPages: [26],
        workBookPages: [23]
      },
      {
        title: "Listening Skills (Specifying Stories) & Unit Test",
        studentBookPages: [28, 29]
      }
    ]
  },
  {
    unit: 5,
    title: "Sports",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [33],
        workBookPages: [24]
      },
      {
        title: "Topic 1: Polo",
        studentBookPages: [30],
        workBookPages: [25, 26]
      },
      {
        title: "Topic 2: American Sports",
        studentBookPages: [31],
        workBookPages: [26, 27, 28]
      },
      {
        title: "Topic 3: About Team Names",
        studentBookPages: [32],
        workBookPages: [29]
      },
      {
        title: "Listening Skills (Supporting Details) & Unit Test",
        studentBookPages: [34, 35]
      }
    ]
  },
  {
    unit: 6,
    title: "Movies",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [39],
        workBookPages: [30]
      },
      {
        title: "Topic 1: Movies and Personality",
        studentBookPages: [36],
        workBookPages: [31, 32]
      },
      {
        title: "Topic 2: Interview with a Heroine",
        studentBookPages: [37],
        workBookPages: [32, 33]
      },
      {
        title: "Topic 3: Animation Movie, 'Elvis'",
        studentBookPages: [38],
        workBookPages: [34]
      },
      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [40, 41]
      },
      {
        title: "Midterm Test",
        studentBookPages: [42, 43]
      }
    ]
  },
  {
    unit: 7,
    title: "Travel",
    lessons: [
      {
        title: "Topic 1: Field Trip",
        studentBookPages: [44],
        workBookPages: [36, 37]
      },
      {
        title: "Topic 2: Arizona Desert",
        studentBookPages: [45],
        workBookPages: [37, 38, 39]
      },
      {
        title: "Topic 3: Grand Canyon",
        studentBookPages: [46],
        workBookPages: [39]
      },
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [47],
        workBookPages: [35]
      },
      {
        title: "Listening Skills (Sequencing Events) & Unit Test",
        studentBookPages: [48, 49]
      }
    ]
  },
  {
    unit: 8,
    title: "Country vs. Town",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [53],
        workBookPages: [40]
      },
      {
        title: "Topic 1: New York, the Big Apple",
        studentBookPages: [50],
        workBookPages: [41, 42]
      },
      {
        title: "Topic 2: City Life or Country Life?",
        studentBookPages: [51],
        workBookPages: [42, 43, 44]
      },
      {
        title: "Topic 3: Country Mouse and Town Mouse",
        studentBookPages: [52],
        workBookPages: [44, 45]
      },
      {
        title: "Listening Skills (Comparing and Contrasting) & Unit Test",
        studentBookPages: [54, 55]
      }
    ]
  },
  {
    unit: 9,
    title: "Kinds of Letters",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [59],
        workBookPages: [46]
      },
      {
        title: "Topic 1: My Pen Pal, Gloria",
        studentBookPages: [56],
        workBookPages: [47, 48]
      },
      {
        title: "Topic 2: Letter to the Consultant",
        studentBookPages: [57],
        workBookPages: [48, 49]
      },
      {
        title: "Topic 3: Ms. Wiseley",
        studentBookPages: [58],
        workBookPages: [50, 51]
      },
      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [60, 61]
      }
    ]
  },
  {
    unit: 10,
    title: "Television",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [65],
        workBookPages: [52]
      },
      {
        title: "Topic 1: TV Guide",
        studentBookPages: [62],
        workBookPages: [53, 54]
      },
      {
        title: "Topic 2: Buying a TV Set",
        studentBookPages: [63],
        workBookPages: [54, 55, 56]
      },
      {
        title: "Topic 3: Advantages and Disadvantages of TV",
        studentBookPages: [64],
        workBookPages: [57]
      },
      {
        title: "Listening Skills (Catching Facts) & Unit Test",
        studentBookPages: [66, 67]
      }
    ]
  },
  {
    unit: 11,
    title: "Colds",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [71],
        workBookPages: [58]
      },
      {
        title: "Topic 1: Seeing a Doctor",
        studentBookPages: [68],
        workBookPages: [59, 60]
      },
      {
        title: "Topic 2: Domestic Medicine",
        studentBookPages: [69],
        workBookPages: [60, 61]
      },
      {
        title: "Topic 3: Protection Against Cold",
        studentBookPages: [70],
        workBookPages: [61, 62]
      },
      {
        title: "Listening Skills (Cause and Effect) & Unit Test",
        studentBookPages: [72, 73]
      }
    ]
  },
  {
    unit: 12,
    title: "Great Men",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [77],
        workBookPages: [63]
      },
      {
        title: "Topic 1: Two Famous American Presidents",
        studentBookPages: [74],
        workBookPages: [64, 65]
      },
      {
        title: "Topic 2: Korean National Hero, Sun-Shin Lee",
        studentBookPages: [75],
        workBookPages: [65, 66]
      },
      {
        title: "Topic 3: Martin Luther King, Jr.",
        studentBookPages: [76],
        workBookPages: [67]
      },
      {
        title: "Listening Skills (Facts and Opinions) & Unit Test",
        studentBookPages: [78, 79]
      },
      {
        title: "Final Test",
        studentBookPages: [80, 81]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
