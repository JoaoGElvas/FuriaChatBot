export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  options?: ChatOption[];
}

export interface ChatOption {
  id: string;
  text: string;
  action: string;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  event: string;
  opponent: string;
  watchLink?: string;
}

export interface MatchResult {
  id: string;
  date: string;
  event: string;
  opponent: string;
  score: string;
  outcome: "win" | "loss" | "draw";
}

export interface Player {
  id: string;
  name: string;
  realName: string;
  joinDate: string;
  image?: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface Trivia {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}
