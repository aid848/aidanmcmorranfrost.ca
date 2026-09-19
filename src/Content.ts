// Image paths, project imgs must be 1920x1080
import DOG1 from "./img/scaled/dog-1.png";
import DOG2 from "./img/scaled/dog-2.png";
import DOG3 from "./img/scaled/dog-3.png";
import DOG4 from "./img/scaled/dog-4.png";
import THREE1 from "./img/scaled/304-1.png";
import THREE2 from "./img/scaled/304-2.png";
import THREE3 from "./img/scaled/304-3.png";
import CAL1 from "./img/scaled/cal1.png";
import CAL2 from "./img/scaled/cal2.png";
import PA1 from "./img/scaled/pa1.jpg";
import STOCK1 from "./img/scaled/stock1.png";
import STOCK2 from "./img/scaled/login.png";
import STOCK3 from "./img/scaled/create-acc.png";
import PLANE1 from "./img/scaled/plane-1.png";
import PLANE2 from "./img/scaled/plane-2.png";
import MINE1 from "./img/scaled/mine1.png";
import MINE2 from "./img/scaled/mine2.png";
import OTRAIL1 from "./img/scaled/otrail-1.png";
import OTRAIL2 from "./img/scaled/otrail-2.png";
import OTRAIL3 from "./img/scaled/otrail-3.png";
import OTRAIL4 from "./img/scaled/otrail-4.png";
import OTRAIL5 from "./img/scaled/otrail-5.png";
import OTRAIL6 from "./img/scaled/otrail-6.png";
import SPONGE1 from "./img/scaled/sponge1.png";
import CARDAPP1 from "./img/scaled/card_app.png";
import CARDAPP2 from "./img/scaled/card_app2.png";
import AML1 from "./img/scaled/autoML_1.png";
import AML2 from "./img/scaled/autoML_2.png";
import AML3 from "./img/scaled/autoML_3.png";
import AML4 from "./img/scaled/autoML_4.png";
import AML5 from "./img/scaled/autoML_5.png";
import AML6 from "./img/scaled/autoML_6.png";
import AML7 from "./img/scaled/autoML_7.png";
import AML8 from "./img/scaled/autoML_8.png";
import AML9 from "./img/scaled/autoML_9.png";
import AML10 from "./img/scaled/autoML_10.png";
import TEMPLE1 from "./img/scaled/temple1.png";
import TEMPLE2 from "./img/scaled/temple2.png";
import TEMPLE3 from "./img/scaled/temple3.png";
import TEMPLE4 from "./img/scaled/temple4.png";
import TEMPLE5 from "./img/scaled/temple5.png";

export interface ProjectEntry {
    name: string;
    date: string;
    type: string;
    langs: string;
    demoLink: string | null;
    sourceLink: string | null;
    releaseLink: string | null;
    desc: string;
    photosSrc: string[];
}

// HOME
export const namePretextTxt = "Hello, I am";
export const nameTxt = "Aidan Frost";
export const nameSubTitleTxt = "Software Developer";

// Contacts
export const myPlatforms = [
    { name: "GitHub", link: "https://github.com/aid848" },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/aidan-frost-83271415a/",
    },
];

// ABOUT ME
export const bioTXT =
    "Hello, I have just graduated with a B.Sc. in computer science (with Distinction) from UBC and have two golden retrievers! I made this site to show some of my projects to the world. Many of these projects are have source code and/or demos available so please take a look! To get in contact with me please visit my Linkedin.";
// PROJECT DESCRIPTIONS
export const carRentTXT =
    " Developed, with two other team members, a graphical application to interface with an Oracle DBMS system that could be used to manage a car rental company’s day-to-day transactions. Worked on developing the SQL query templates regarding customer actions such as reserving a vehicle and querying the availability of vehicles based on various criteria. Also developed the base GUI in the Swing library for all actions to build upon.  ";
export const dogwalkerTXT =
    " Created an easy-to-use application that allows the user to enter details about where they took their dog(s) and provides useful insight to allow for a better future walking experience. Features include but not limited to: real time weather report of walk destination (weather service API calls), walking times visited for each location by dog or in total (saved to disk).  ";
export const PATXT =
    'This analysis tool allows the user to read compiled Java programs and view a visual output of the various dependencies between classes such as levels of inheritance (super class and/or interfaces) as well as any fields. The tool highlights potential structural problems such as the large class code smell that could lead to issues with development. Additionally the tool allows inexperienced users that may be new to an existing project to interactively explore the codebase and reduce the time needed to become familiar with the project. NOTE: When asked for a file name in the demo please enter either: "cal" and "dogentitiesonly" ';
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
    "This visualization aims to provide high-level insight into the more dangerous elements of air travel. From identifying the most problematic aircraft makers, makes, or particular trends regarding flight stage or geographic outliers. Our first view addresses both the overall picture and detailed analysis regarding aircraft safety given various selectable metrics. These include the absolute values and more normalized scores such as the ratio of injuries to uninjured.  The second view focuses on the dangers of a particular flight phase and the differences in flight phase risks between commercial flights and personal flights. The story is told by scrolling through the various phases of flights where the distribution of accidents is split between the reason of flight and the associated stacked bar chart provides a breakdown of the severity of injuries. Note: the demo was targeting and works best on desktops with 16:9 or 16:10 screens. NOTE: Please wait for the content to load on the demo as its hosted on a slower server.";
export const spongeTXT =
    "A simple Java-based plugin to automatically save your sponge Minecraft server’s world in a convenient Zip format with a user-specified number of backups and backup frequency.";
export const calDescTXT =
    "CalendarDSL is a domain specific language that helps users to optimize their schedules. The tokenization, parsing, and evaluation rely on a Java backend which can then  generate a CVS file and import the output into your Google Calendar or other compatible software.";
export const cardDescTXT =
    "A simple pet trading card React app that showcases the MERN technology stack. This application allows you to add your favourite pets as trading cards with: their name, age, photo, and biography. You can search and sort your virtual card deck or order them any way you would like. This web app is running on Heroku which may take a few moments to start if it has not been used for a while. Note: the instance is shared and not designed for concurrency, therefore multiple users may cause interesting results. NOTE: Source code coming soon!";
export const autoMlTXT =
    "AutoML is a web application designed to help users interact with PLAI's Ensemble Squared automatic machine learning system. Our application focuses on making the system convenient and user-friendly by guiding the user through all the nessesary steps to make predictions of tabular data, even if they are not experts in ML. We include a third party integration with Kaggle to allow users to access even more data to explore and use with the system for competitions.";
export const TEMPLEGAMETXT =
    "Run To The Temple is an interactive party board-style game designed for two players who compete among themselves and two AI players to reach the end of the board with the most treasure. The game consists of an overworld stage where each player takes a turn to roll the dice and maybe buy or use an item from a shop tile. Depending on where they land, they may have a positive or negative event occur. After each player has taken their turn, one of three minigames is chosen (a drawing minigame, a platformer style minigame, or a tank combat minigame). The winner(s) of the minigame can gain additional treasures to help them along the way. ";
// PROJECT ENTRIES

const AUTOMLENTRY: ProjectEntry = {
    name: "AutoML Web App",
    date: "Summer 2021",
    type: "Academic (team of 4)",
    langs: "MERN (MongoDB, Express, React, and Node.js) web stack",
    demoLink: null,
    sourceLink: "https://github.com/aid848/AutoML",
    releaseLink: null,
    desc: autoMlTXT,
    photosSrc: [AML1, AML2, AML3, AML4, AML5, AML6, AML7, AML8, AML9, AML10],
};
// "https://github.com/aid848/CPSC455Assignments",
const CARDENTRY: ProjectEntry = {
    name: "Pet Trading Card Web App",
    date: "Summer 2021",
    type: "Academic",
    langs: "MERN (MongoDB, Express, React, and Node.js) web stack",
    demoLink: "https://cpsc455cardapp.herokuapp.com",
    sourceLink: null,
    releaseLink: null,
    desc: cardDescTXT,
    photosSrc: [CARDAPP1, CARDAPP2],
};
// MongoDB, Express, React, and Node.js
const PLANEENTRY: ProjectEntry = {
    name: "Historic Airplane Safety Interactive Visualization Tool",
    date: "March-May 2021",
    type: "Academic (team of 3)",
    langs: "JavaScript with D3.js, Python",
    demoLink: "https://plane-vis-demo.netlify.app/",
    sourceLink: "https://github.com/aid848/PlaneVis",
    releaseLink: null,
    desc: planeTXT,
    photosSrc: [PLANE1, PLANE2],
};
const PAENTRY: ProjectEntry = {
    name: "Java Program Analysis Tool",
    date: "Summer 2020",
    type: "Academic (team of 4)",
    langs: "Java",
    demoLink: "https://java-program-analysis.netlify.app/",
    sourceLink: "https://github.com/aid848/-410-Program-Analysis",
    releaseLink: null,
    desc: PATXT,
    photosSrc: [PA1],
};
const OTRAILENTRY: ProjectEntry = {
    name: "The Oregon Trail Remake",
    date: "February 2021",
    type: "Academic (team of 3)",
    langs: "Haskell with Gloss",
    demoLink: null,
    sourceLink: "https://github.com/aid848/The-Oregon-Trail-Remake",
    releaseLink: "https://github.com/aid848/The-Oregon-Trail-Remake/releases",
    desc: oTrailTXT,
    photosSrc: [OTRAIL1, OTRAIL2, OTRAIL3, OTRAIL4, OTRAIL5, OTRAIL6],
};
const MINESWEEPERENTRY: ProjectEntry = {
    name: "Minesweeper Remake",
    date: "March 2021",
    type: "Academic (team of 3)",
    langs: "SWI Prolog and XPCE",
    demoLink: null,
    sourceLink: "https://github.com/aid848/Minesweeper",
    releaseLink: null,
    desc: minesweeperTXT,
    photosSrc: [MINE1, MINE2],
};
const CALDSLENTRY: ProjectEntry = {
    name: "Calendar Domain Specific Language",
    date: "Summer 2020",
    type: "Academic (team of 5)",
    langs: "Java based (Tokenizer, Parser, and Evaluator)",
    demoLink: null,
    sourceLink: "https://github.com/aid848/CalendarDSL",
    releaseLink: null,
    desc: calDescTXT,
    photosSrc: [CAL1, CAL2],
};
const CARRENTENTRY: ProjectEntry = {
    name: "Car rental and report database companion",
    date: "Sept-Nov 2019",
    type: "Academic (team of 3)",
    langs: "Java and SQL",
    demoLink: null,
    sourceLink: "https://github.com/aid848/SuperRent",
    releaseLink: null,
    desc: carRentTXT,
    photosSrc: [THREE1, THREE2, THREE3],
};
const STOCKENTRY: ProjectEntry = {
    name: "Educational Multi-User Stock Market Simulator",
    date: "Summer 2020-Ongoing",
    type: "Personal",
    langs: "Typescript with React",
    demoLink: null,
    sourceLink: "https://github.com/aid848/stockMarketGameServer",
    releaseLink: null,
    desc: StockTXT,
    photosSrc: [STOCK1, STOCK2, STOCK3],
};
const SPONGEENTRY: ProjectEntry = {
    name: "Sponge Server Auto Save Plugin",
    date: "May 2020",
    type: "Hobby",
    langs: "Java",
    demoLink: null,
    sourceLink: "https://github.com/aid848/AutoSaver_Sponge",
    releaseLink: "https://ore.spongepowered.org/aid848/Autosaver",
    desc: spongeTXT,
    photosSrc: [SPONGE1],
};
const DOGWALKERENTRY: ProjectEntry = {
    name: "Dog Walker Companion",
    date: "Sept-Nov 2019",
    type: "Academic",
    langs: "Java",
    demoLink: null,
    sourceLink: "https://github.com/aid848/DogWalkingHelper",
    releaseLink: null,
    desc: dogwalkerTXT,
    photosSrc: [DOG1, DOG2, DOG3, DOG4],
};
const TEMPLEGAME: ProjectEntry = {
    name: "Run To The Temple",
    date: "Sept-Dec 2021",
    type: "Academic (team of 5)",
    langs: "C++ and OpenGL",
    demoLink: null,
    sourceLink: "https://github.com/aid848/RunToTheTemplePublic",
    releaseLink: null,
    desc: TEMPLEGAMETXT,
    photosSrc: [TEMPLE1, TEMPLE2, TEMPLE3, TEMPLE4, TEMPLE5],
};
// PROJECTS
export const MYPROJECTS: ProjectEntry[] = [
    TEMPLEGAME,
    AUTOMLENTRY,
    PLANEENTRY,
    PAENTRY,
    CARDENTRY,
    OTRAILENTRY,
    MINESWEEPERENTRY,
    CALDSLENTRY,
    CARRENTENTRY,
    STOCKENTRY,
    SPONGEENTRY,
    DOGWALKERENTRY,
];
