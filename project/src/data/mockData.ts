import { Match, MatchResult, Player, Achievement, Trivia } from "../types";

export const upcomingMatches: Match[] = [];

export const recentResults: MatchResult[] = [
  {
    id: "1",
    date: "09/04/2025",
    event: "PGL Bucharest 2025",
    opponent: "The MongolZ",
    score: "0-2",
    outcome: "loss",
  },
  {
    id: "2",
    date: "08/04/2025",
    event: "PGL Bucharest 2025",
    opponent: "Virtus.pro",
    score: "0-2",
    outcome: "loss",
  },
  {
    id: "3",
    date: "07/04/2025",
    event: "PGL Bucharest 2025",
    opponent: "Complexity",
    score: "1-2",
    outcome: "loss",
  },
  {
    id: "4",
    date: "06/04/2025",
    event: "PGL Bucharest 2025",
    opponent: "Betclic Apogee Esports",
    score: "2-0",
    outcome: "win",
  },
  {
    id: "5",
    date: "22/03/2025",
    event: "BLAST Open Spring 2025",
    opponent: "M80",
    score: "1-2",
    outcome: "loss",
  },
  {
    id: "6",
    date: "20/03/2025",
    event: "BLAST Open Spring 2025",
    opponent: "Natus Vincere",
    score: "0-2",
    outcome: "loss",
  },
  {
    id: "7",
    date: "10/03/2025",
    event: "ESL Pro League Season 21: Stage 2",
    opponent: "Team Falcons",
    score: "1-2",
    outcome: "loss",
  },
  {
    id: "8",
    date: "09/03/2025",
    event: "ESL Pro League Season 21: Stage 2",
    opponent: "MIBR",
    score: "2-1",
    outcome: "win",
  },
];

export const roster: Player[] = [
  {
    id: "1",
    name: "Brazil yuurih",
    realName: "Yuri Boian",
    joinDate: "08/11/2017",
    image: "https://img-cdn.hltv.org/playerbodyshot/On8gJkqpHLJc8v-lS_LM5g.png",
  },
  {
    id: "2",
    name: "Brazil KSCERATO",
    realName: "Kaike Cerato",
    joinDate: "06/02/2018",
    image: "https://img-cdn.hltv.org/playerbodyshot/JRoHNs2TFYoVGbjbqOu3KP.png",
  },
  {
    id: "3",
    name: "Brazil FalleN",
    realName: "Gabriel Toledo",
    joinDate: "03/07/2023",
    image: "https://img-cdn.hltv.org/playerbodyshot/qP6aQSM0KeF5O-28rI-8Om.png",
  },
  {
    id: "4",
    name: "Kazakhstan molodoy",
    realName: "Danil Golubenko",
    joinDate: "11/04/2025",
    image: "https://img-cdn.hltv.org/playerbodyshot/placeholder.png",
  },
  {
    id: "5",
    name: "Latvia YEKINDAR",
    realName: "Mareks Gaļinskis",
    joinDate: "22/04/2025",
    image: "https://img-cdn.hltv.org/playerbodyshot/placeholder.png",
  },
  {
    id: "6",
    name: "Brazil sidde",
    realName: "Sidnei Macedo",
    joinDate: "09/07/2024",
    image: "https://img-cdn.hltv.org/playerbodyshot/placeholder.png",
  },
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "Elisa Masters Espoo 2023",
    date: "03/12/2023",
    description: "1st Place – 🏆 Champions (3:1 vs Apeks)",
  },
  {
    id: "2",
    title: "Intel Extreme Masters Rio Major 2022",
    date: "12/11/2022",
    description: "3rd-4th Place – 🥉 Semi-finalists (1:2 vs Heroic)",
  },
  {
    id: "3",
    title: "ESL Pro League Season 15",
    date: "09/04/2022",
    description: "3rd-4th Place – 🥉 Semi-finalists (0:2 vs FaZe Clan)",
  },
  {
    id: "4",
    title: "Elisa Invitational Summer 2021",
    date: "04/07/2021",
    description: "1st Place – 🏆 Champions (2:1 vs SKADE)",
  },
  {
    id: "5",
    title: "ESL Pro League Season 12: North America",
    date: "27/09/2020",
    description: "1st Place – 🏆 Champions (3:0 vs 100 Thieves)",
  },
  {
    id: "6",
    title: "DreamHack Masters Spring 2020: North America",
    date: "14/06/2020",
    description: "1st Place – 🏆 Champions (3:0 vs Team Liquid)",
  },
  {
    id: "7",
    title: "Arctic Invitational 2019",
    date: "14/09/2019",
    description: "1st Place – 🏆 Champions (2:0 vs CR4ZY)",
  },
  {
    id: "8",
    title: "EMF CS:GO World Invitational 2019",
    date: "26/07/2019",
    description: "1st Place – 🏆 Champions (3:1 vs AVANGAR)",
  },
  {
    id: "9",
    title: "ESEA Season 31: Global Challenge",
    date: "14/07/2019",
    description: "1st Place – 🏆 Champions (2:0 vs Team Spirit)",
  },
  {
    id: "10",
    title: "ECS Season 7 - Finals",
    date: "09/06/2019",
    description: "2nd Place – 🥈 Runner-up (0:2 vs Team Vitality)",
  },
];

export const triviaQuestions: Trivia[] = [
  {
    id: "1",
    question: "In which year was FURIA Esports founded?",
    options: ["2015", "2016", "2017", "2018"],
    answer: 2,
    explanation:
      "FURIA Esports was founded in 2017 by Jaime Pádua and André Akkari.",
  },
  {
    id: "2",
    question: "Which country does FURIA represent?",
    options: ["United States", "Sweden", "Brazil", "Denmark"],
    answer: 2,
    explanation:
      "FURIA is a Brazilian esports organization, representing Brazil in international competitions.",
  },
  {
    id: "3",
    question: "Which player has been with FURIA CS team the longest?",
    options: ["KSCERATO", "yuurih", "FalleN", "arT"],
    answer: 1,
    explanation:
      'Yuri "yuurih" Santos has been with FURIA since 2017, making him the longest-standing member of the team.',
  },
  {
    id: "4",
    question: "What was FURIA's first major international tournament victory?",
    options: [
      "ESL One Cologne",
      "BLAST Premier Spring Finals",
      "ESL Pro League Season 12",
      "DreamHack Masters",
    ],
    answer: 2,
    explanation:
      "FURIA won their first major international tournament when they became champions of ESL Pro League Season 12 in 2020.",
  },
  {
    id: "5",
    question: "Which legendary Brazilian player joined FURIA in 2023?",
    options: ["coldzera", "FalleN", "fer", "TACO"],
    answer: 1,
    explanation:
      'Gabriel "FalleN" Toledo, considered one of the greatest Brazilian CS players, joined FURIA in 2023.',
  },
];

export const initialMessages = [
  {
    id: "1",
    text: "Hey there, FURIA fan! I'm your CS companion. What would you like to know about our team today?",
    sender: "bot",
    timestamp: new Date(),
    options: [
      { id: "1", text: "Show Upcoming Matches", action: "SHOW_MATCHES" },
      { id: "2", text: "Latest Results", action: "SHOW_RESULTS" },
      { id: "3", text: "Team Roster", action: "SHOW_ROSTER" },
      { id: "4", text: "Team Achievements", action: "SHOW_ACHIEVEMENTS" },
      { id: "5", text: "Give Me a Trivia", action: "SHOW_TRIVIA" },
    ],
  },
] as any;
