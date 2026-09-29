//Get Smart 2A
import { subjects } from "../../constants";
import { calculateTotalLessons } from "../../utilities/calculateTotalLessons";

export const title = "Get Smart 2A";
export const subject = subjects.SPEAKING;
export const units = [
  {
    unit: 1,
    title: "We're Back",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [3]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [2]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [4, 5],
        workBookPages: [3]
      },
      {
        //lesson 4
        title: "Once Upon A Time",
        studentBookPages: [6, 7],
        workBookPages: [4]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [8],
        workBookPages: [5]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [9],
        workBookPages: [6]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [9],
        workBookPages: [6]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [9],
        workBookPages: [6]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [9],
        workBookPages: [6]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [9],
        workBookPages: [6]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [10, 11],
        workBookPages: [7]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [12],
        workBookPages: [8, 9]
      }
    ]
  },

  {
    unit: 2,
    title: "Home and Family",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [13]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [10]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [14, 15],
        workBookPages: [11]
      },
      {
        //lesson 4
        title: "Once Upon A Time",
        studentBookPages: [16, 17],
        workBookPages: [12]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [18],
        workBookPages: [13]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [19],
        workBookPages: [14]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [19],
        workBookPages: [14]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [20, 21],
        workBookPages: [15]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [22],
        workBookPages: [16, 17]
      }
    ]
  },
  {
    unit: 3,
    title: "Friends",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [23]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [18]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [24, 25],
        workBookPages: [19]
      },
      {
        //lesson 4
        title: "Once Upon A Time",
        studentBookPages: [26, 27],
        workBookPages: [20]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [28],
        workBookPages: [21]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [29],
        workBookPages: [22]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [29],
        workBookPages: [22]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [29],
        workBookPages: [22]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [29],
        workBookPages: [22]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [29],
        workBookPages: [22]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [30, 31],
        workBookPages: [23]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [32],
        workBookPages: [24, 25]
      }
    ]
  },
  {
    unit: 4,
    title: "Animals",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [33]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [26]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [34, 35],
        workBookPages: [27]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [36, 37],
        workBookPages: [28]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [38],
        workBookPages: [29]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [39],
        workBookPages: [30]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [39],
        workBookPages: [30]
      },

      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [40, 41],
        workBookPages: [31]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [42],
        workBookPages: [32, 33]
      }
    ]
  },
  {
    unit: 5,
    title: "My Town",
    lessons: [
      {
        //lesson 1
        title: "Sing A Song - DAY 1",
        studentBookPages: [43]
      },
      {
        //lesson 2
        title: "Sing A Song - DAY 2",
        workBookPages: [34]
      },
      {
        //lesson 3
        title: "Smart Kids",
        studentBookPages: [44, 45],
        workBookPages: [35]
      },
      {
        //lesson 4
        title: "Our World",
        studentBookPages: [46, 47],
        workBookPages: [36]
      },
      {
        //lesson 5
        title: "Let's Play",
        studentBookPages: [48],
        workBookPages: [37]
      },
      {
        //lesson 6
        title: "Project - DAY 1",
        studentBookPages: [49],
        workBookPages: [38]
      },
      {
        //lesson 7
        title: "Project - DAY 2",
        studentBookPages: [49],
        workBookPages: [38]
      },
      {
        //lesson 8
        title: "Project - DAY 3",
        studentBookPages: [49],
        workBookPages: [38]
      },
      {
        //lesson 9
        title: "Project - DAY 4",
        studentBookPages: [49],
        workBookPages: [38]
      },
      {
        //lesson 10
        title: "Project - DAY 5",
        studentBookPages: [49],
        workBookPages: [38]
      },
      {
        //lesson 11
        title: "Story Time",
        studentBookPages: [50, 51],
        workBookPages: [39]
      },
      {
        //lesson 12
        title: "Revision",
        studentBookPages: [52],
        workBookPages: [40, 41]
      }
    ]
  },
  {
    unit: 5,
    title: "EXTRA CLASSES",
    lessons: [
      {
        title: "Phonics Units 1-3",
        studentBookPages: [53, 57],
        workBookPages: [44, 46]
      },
      {
        title: "Phonics Units 4-5",
        studentBookPages: [68, 69],
        workBookPages: [47, 49]
      },
      {
        title: "Picture Dictionary",
        studentBookPages: [42, 43]
      }
    ]
  }
];

export const totalNumLessons = calculateTotalLessons(units);
