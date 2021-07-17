class ProjectEntry {
    constructor(name, date, type, langs, demoLink, sourceLink, releaseLink, desc, photosSrc) {
        this.name = name;
        this.date = date;
        this.type = type;
        this.langs = langs;
        this.demoLink = demoLink;
        this.sourceLink = sourceLink;
        this.releaseLink = releaseLink;
        this.desc = desc;
        this.photosSrc = photosSrc;
    }
}

// HOME
export const welcomeTXT = "Welcome to my Site!";
export const welcomeSubheaderTXT =
    "Try using the nav bar or enjoy the beach photo!";
export const namePretextTxt = "Hello, I am"
export const nameTxt = "Aidan Frost"
export const nameSubTitleTxt = "UBC Computer Science Student, Independent Developer."

// Image paths
export const DOG1 = require("./img/dog-1.png").default;
export const DOG2 = require("./img/dog-2.png").default;
export const DOG3 = require("./img/dog-3.png").default;
export const DOG4 = require("./img/dog-4.png").default;
export const THREE1 = require("./img/304-1.png").default;
export const THREE2 = require("./img/304-2.png").default;
export const THREE3 = require("./img/304-3.png").default;
export const CAL1 = require("./img/cal1.png").default;
export const CAL2 = require("./img/cal2.png").default;
export const DOGGO1 = require("./img/doggo1.jpg").default;
export const DOGGO2 = require("./img/doggo2.jpg").default;
export const PA1 = require("./img/pa1.jpg").default;
export const STOCK1 = require("./img/stock1.png").default;
export const STOCK2 = require("./img/login.png").default;
export const STOCK3 = require("./img/create acc.png").default;
export const PLANE1 = require("./img/plane-1.png").default;
export const PLANE2 = require("./img/plane-2.png").default;
export const MINE1 = require("./img/mine1.png").default;
export const MINE2 = require("./img/mine2.png").default;
export const OTRAIL1 = require("./img/otrail-1.png").default;
export const OTRAIL2 = require("./img/otrail-2.png").default;
export const OTRAIL3 = require("./img/otrail-3.png").default;
export const OTRAIL4 = require("./img/otrail-4.png").default;
export const OTRAIL5 = require("./img/otrail-5.png").default;
export const OTRAIL6 = require("./img/otrail-6.png").default;

// Tech skills
export const languagesKnown = [{}]; // TODO tuples of lang and comfort level

// Contacts
export const myPlatforms = [
    {name: "GitHub", link: "https://github.com/aid848"}, {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/aidan-frost-83271415a/"
    }
];

// ABOUT ME
export const bioTXT =
    "Hello, I am a fourth year computer science student at UBC and have two golden retrievers! I made this site to show some of my projects to the world. Many of these projects are have source code and/or demos available so please take a look! I will be adding my CV here soon!";


// PROJECT DESCRIPTIONS
export const carRentTXT =
    " Developed, with two other team members, a graphical application to interface with an Oracle DBMS system that could be used to manage a car rental company’s day-to-day transactions. Worked on developing the SQL query templates regarding customer actions such as reserving a vehicle and querying the availability of vehicles based on various criteria. Also developed the base GUI in the Swing library for all actions to build upon.  ";
export const dogwalkerTXT =
    " Created an easy-to-use application that allows the user to enter details about where they took their dog(s) and provides useful insight to allow for a better future walking experience. Features include but not limited to: real time weather report of walk destination (weather service API calls), walking times visited for each location by dog or in total (saved to disk).  ";
export const PATXT =
    "This analysis tool allows the user to read compiled Java programs and view a visual output of the various dependencies between classes such as levels of inheritance (super class and/or interfaces) as well as any fields. The tool highlights potential structural problems such as the large class code smell that could lead to issues with development. Additionally the tool allows inexperienced users that may be new to an existing project to interactively explore the codebase and reduce the time needed to become familiar with the project.";
export const StockTXT =
    "This is a multi-user stock market simulator website that is intended to be educational and be used in a school environment where students can create their own companies and trade virtual stocks of their peers’ companies. The goal is to have a dynamic price based on the students’ input on various updates each company makes with up or down votes that recalculate the price after each trading cycle. The tool’s main goal is to improve literacy skills in conjunction with critical thinking for primary school / early high students while remaining fun and interactive. The rationale for having a self-contained server rather than a central website is to provide platform flexibility and compatibility no matter the technical environment. \n" +
    "Note: this is still an ongoing project and many of the features have been put on hold until I have a school break.";
export const minesweeperTXT =
    "A remake of Minesweeper, written for SWI prolog. Our remake explores the feasibility of using SWI Prolog for classic games using the built-in XPCE library. We use a randomly generated map, various difficulty levels, and event listeners along with Prolog alarms to make the game work like the old classic game. \nAttributions:\n" +
    "Icons (MIT LICENSE): https://github.com/HaikuArchives/BeMines\n" +
    "Original Minesweeper game: Curt Johnson, Robert Donner, Microsoft Corporation.";
export const oTrailTXT =
    "A remake of the popular MECC computer game (with some modifications), written in Haskell. Our remake is written 100% in Haskell. All text and images are rendered via the Gloss library. The backend is coded from scratch and features pseudo-random event generation and a custom map.\n" +
    "Note: All Bitmap images belong to the Minnesota Educational Computing Consortium (MECC)";
export const planeTXT =
    "This visualization aims to provide high-level insight into the more dangerous elements of air travel. From identifying the most problematic aircraft makers, makes, or particular trends regarding flight stage or geographic outliers. Our first view addresses both the overall picture and detailed analysis regarding aircraft safety given various selectable metrics. These include the absolute values and more normalized scores such as the ratio of injuries to uninjured.  The second view focuses on the dangers of a particular flight phase and the differences in flight phase risks between commercial flights and personal flights. The story is told by scrolling through the various phases of flights where the distribution of accidents is split between the reason of flight and the associated stacked bar chart provides a breakdown of the severity of injuries. Note: the demo was targeting and works best on desktops with 16:9 or 16:10 screens.";
export const spongeTXT =
    "A simple Java-based plugin to automatically save your sponge Minecraft server’s world in a convenient Zip format with a user-specified number of backups and backup frequency.";
export const calDescTXT =
    "CalendarDSL is a domain specific language that helps users to optimize their schedules. The tokenization, parsing, and evaluation rely on a Java backend which can then  generate a CVS file and import the output into your Google Calendar or other compatible software.";
export const autoMlTXT = "TBA";

// PROJECT ENTRIES


// const AUTOMLENTRY
const PLANEENTRY = new ProjectEntry(
    "Historic Airplane Safety Interactive Visualization Tool",
    "March-May 2021",
    "Academic",
    "JavaScript with D3.js, Python",
    null, // TODO add demo link
    "https://github.com/aid848/PlaneVis",
    null,
    planeTXT,
    [PLANE1, PLANE2]
)
const PAENTRY = new ProjectEntry(
    "Java Program Analysis Tool",
    "Summer 2020",
    "Academic",
    "Java",
    null, // TODO add demo link
    "https://github.com/aid848/-410-Program-Analysis",
    null,
    PATXT,
    [PA1]
)
const OTRAILENTRY = new ProjectEntry(
    "The Oregon Trail Remake",
    "February 2021",
    "Academic",
    "Haskell with Gloss",
    "https://github.com/aid848/-410-Program-Analysis",
    "https://github.com/aid848/The-Oregon-Trail-Remake",
    "https://github.com/aid848/The-Oregon-Trail-Remake/releases",
    oTrailTXT,
    [OTRAIL1, OTRAIL2, OTRAIL3, OTRAIL4, OTRAIL5,
        OTRAIL6]
)
const MINESWEEPERENTRY = new ProjectEntry(
    "Minesweeper Remake",
    "March 2021",
    "Academic",
    "SWI Prolog and XPCE",
    null,
    "https://github.com/aid848/Minesweeper",
    null,
    minesweeperTXT,
    [MINE1, MINE2]
)
const CALDSLENTRY = new ProjectEntry(
    "Calendar Domain Specific Language",
    "Summer 2020",
    "Academic",
    "Java based (Tokenizer, Parser, and Evaluator)",
    null,
    "https://github.com/aid848/CalendarDSL",
    null,
    calDescTXT,
    [CAL1, CAL2]
)
const CARRENTENTRY = new ProjectEntry(
    "Car rental and report database companion",
    "Sept-Nov 2019",
    "Academic",
    "Java and SQL",
    null,
    "https://github.com/aid848/SuperRent",
    null,
    carRentTXT,
    [THREE1, THREE2, THREE3]
)
const STOCKENTRY = new ProjectEntry(
    "Educational Multi-User Stock Market Simulator",
    "Summer 2020-Ongoing",
    "Personal",
    "Typescript with React",
    null,
    "https://github.com/aid848/stockMarketGameServer",
    null,
    StockTXT,
    [STOCK1, STOCK2, STOCK3]
);
const SPONGEENTRY = new ProjectEntry(
    "Sponge Server Auto Save Plugin",
    "May 2020",
    "Hobby",
    "Java",
    null,
    "https://github.com/aid848/AutoSaver_Sponge",
    "https://ore.spongepowered.org/aid848/Autosaver",
    spongeTXT,
    null
)
const DOGWALKERENTRY = new ProjectEntry(
    "Dog Walker Companion",
    "Sept-Nov 2019",
    "Academic",
    "Java",
    null,
    "https://github.com/aid848/DogWalkingHelper",
    null,
    dogwalkerTXT,
    [DOG1, DOG2, DOG3, DOG4]
)

// PROJECTS
export const MYPROJECTS = [PLANEENTRY, PAENTRY, OTRAILENTRY, MINESWEEPERENTRY, CALDSLENTRY, CARRENTENTRY, STOCKENTRY, SPONGEENTRY, DOGWALKERENTRY]
