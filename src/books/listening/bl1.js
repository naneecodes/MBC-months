//Bricks Listening 250 L1
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Bricks Listening 250 L1";
export const subject = subjects.LISTENING;
export const units = [
  {
    unit: 1,
    title: "Greeting",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [9],
        workBookPages: [4],
      },
      {
        title: "Topic 1: Introducing Each Other",
        studentBookPages: [6],
        workBookPages: [5],
      },
      {
        title: "Topic 2: A New Student",
        studentBookPages: [7],
        workBookPages: [6],
      },
      {
        title: "Topic 3: Talking about Yourself",
        studentBookPages: [8],
        workBookPages: [7],
      },

      {
        title: "Listening Skills (Characters) & Unit Test",
        studentBookPages: [10, 11],
      },
    ],
  },
  {
    unit: 2,
    title: "School Life",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [15],
        workBookPages: [8],
      },
      {
        title: "Topic 1: Folk Dance",
        studentBookPages: [12],
        workBookPages: [9, 10],
      },
      {
        title: "Topic 2: Instrumental Music",
        studentBookPages: [13],
        workBookPages: [10, 11],
      },
      {
        title: "Topic 3: Life in School",
        studentBookPages: [14],
        workBookPages: [11, 12],
      },

      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [16, 17],
      },
    ],
  },
  {
    unit: 3,
    title: "Family and Neighbors",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [21],
        workBookPages: [13],
      },
      {
        title: "Topic 1: Families and Relatives",
        studentBookPages: [18],
        workBookPages: [14],
      },
      {
        title: "Topic 2: My Neighbor",
        studentBookPages: [19],
        workBookPages: [15],
      },
      {
        title: "Topic 3: With My Family",
        studentBookPages: [20],
        workBookPages: [16],
      },

      {
        title: "Listening Skills (Conversation) & Unit Test",
        studentBookPages: [22, 23],
      },
    ],
  },
  {
    unit: 4,
    title: "Hobbies",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [27],
        workBookPages: [17],
      },
      {
        title: "Topic 1: What's Your Hobby?",
        studentBookPages: [24],
        workBookPages: [18, 19],
      },
      {
        title: "Topic 2: Enjoying Various Hobbies",
        studentBookPages: [25],
        workBookPages: [19, 20],
      },
      {
        title: "Topic 3: My Friend Emily's Hobbies",
        studentBookPages: [26],
        workBookPages: [20, 21],
      },
      {
        title: "Listening Skills (Categorizing) & Unit Test",
        studentBookPages: [28, 29],
      },
    ],
  },
  {
    unit: 5,
    title: "Birthday Party",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [33],
        workBookPages: [22],
      },
      {
        title: "Topic 1: Congraulations",
        studentBookPages: [30],
        workBookPages: [23],
      },
      {
        title: "Topic 2: Surprise Party",
        studentBookPages: [31],
        workBookPages: [24],
      },
      {
        title: "Topic 3: My Father's Birthday",
        studentBookPages: [32],
        workBookPages: [25],
      },
      {
        title: "Listening Skills (Sequencing Events) & Unit Test",
        studentBookPages: [34, 35],
      },
    ],
  },
  {
    unit: 6,
    title: "Time",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [39],
        workBookPages: [26],
      },
      {
        title: "Topic 1: Time, Time, Time",
        studentBookPages: [36],
        workBookPages: [27],
      },
      {
        title: "Topic 2: Schedule for the Summer Vacation",
        studentBookPages: [37],
        workBookPages: [28, 29],
      },
      {
        title: "Topic 3: Movie Time Information",
        studentBookPages: [38],
        workBookPages: [29],
      },
      {
        title: "Listening Skills (Acquisition of Information) & Unit Test",
        studentBookPages: [40, 41],
      },
      {
        title: "Midterm Test",
        studentBookPages: [42, 43],
      },
    ],
  },
  {
    unit: 7,
    title: "Making Appointments",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [47],
        workBookPages: [30],
      },
      {
        title: "Topic 1: Checking Things for an Appointment",
        studentBookPages: [44],
        workBookPages: [31, 32],
      },
      {
        title: "Topic 2: Making Leisure Appointments",
        studentBookPages: [45],
        workBookPages: [32],
      },
      {
        title: "Topic 3: Changing Appointments",
        studentBookPages: [46],
        workBookPages: [33],
      },
      {
        title: "Listening Skills (Specifying Stories) & Unit Test",
        studentBookPages: [48, 49],
      },
    ],
  },
  {
    unit: 8,
    title: "Weather",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [53],
        workBookPages: [34],
      },
      {
        title: "Topic 1: Weather in Arizona and Colorado",
        studentBookPages: [50],
        workBookPages: [35],
      },
      {
        title: "Topic 2: Weather Forecast",
        studentBookPages: [51],
        workBookPages: [36, 37],
      },
      {
        title: "Topic 3: Weather Station",
        studentBookPages: [52],
        workBookPages: [38],
      },
      {
        title: "Listening Skills (Predictions) & Unit Test",
        studentBookPages: [54, 55],
      },
    ],
  },
  {
    unit: 9,
    title: "Telephone",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [59],
        workBookPages: [39],
      },
      {
        title: "Topic 1: Leaving a Message",
        studentBookPages: [56],
        workBookPages: [40],
      },
      {
        title: "Topic 2: Talking on the Phone",
        studentBookPages: [57],
        workBookPages: [41],
      },
      {
        title: "Topic 3: Voice Messages",
        studentBookPages: [58],
        workBookPages: [42],
      },
      {
        title: "Listening Skills (Specifying Stories) & Unit Test",
        studentBookPages: [60, 61],
      },
    ],
  },
  {
    unit: 10,
    title: "Shopping",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [65],
        workBookPages: [43],
      },
      {
        title: "Topic 1: Buying a Present",
        studentBookPages: [62],
        workBookPages: [44, 45],
      },
      {
        title: "Topic 2: Discount",
        studentBookPages: [63],
        workBookPages: [45, 46],
      },
      {
        title: "Topic 3: Advertisement of a Shopping Mall",
        studentBookPages: [64],
        workBookPages: [46, 47],
      },

      {
        title: "Listening Skills (Acquisition of Information) & Unit Test",
        studentBookPages: [66, 67],
      },
    ],
  },
  {
    unit: 11,
    title: "Activities",
    lessons: [
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [71],
        workBookPages: [48],
      },
      {
        title: "Topic 1: Scout Club",
        studentBookPages: [68],
        workBookPages: [49, 50],
      },
      {
        title: "Topic 2: Taking Interesting Classes",
        studentBookPages: [69],
        workBookPages: [50, 51],
      },
      {
        title: "Topic 3: Animation Creator Club",
        studentBookPages: [70],
        workBookPages: [51, 52],
      },

      {
        title: "Listening Skills (Inferring Feelings) & Unit Test",
        studentBookPages: [72, 73],
      },
    ],
  },
  {
    unit: 12,
    title: "Asking Directions",
    lessons: [
      {
        title: "Topic 1: Looking for a Bank",
        studentBookPages: [74],
        workBookPages: [54],
      },
      {
        title: "Topic 2: How to Get to the Well Being Mart",
        studentBookPages: [75],
        workBookPages: [55, 56],
      },
      {
        title: "Topic 3: Map of the Museum",
        studentBookPages: [76],
        workBookPages: [56],
      },
      {
        title: "Look Up & Check Up (WORD TEST)",
        studentBookPages: [77],
        workBookPages: [53],
      },
      {
        title: "Listening Skills (Describing) & Unit Test",
        studentBookPages: [78, 79],
      },
      {
        title: "Final Test",
        studentBookPages: [80, 81],
      },
    ],
  },
];

export const totalNumLessons = calculateTotalLessons(units);
