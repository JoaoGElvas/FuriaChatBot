import { useState, useCallback } from "react";
import { Message, ChatOption } from "../types";
import {
  initialMessages,
  upcomingMatches,
  recentResults,
  roster,
  achievements,
  triviaQuestions,
} from "../data/mockData";
import { v4 as uuidv4 } from "uuid";

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback(
    (text: string, sender: "user" | "bot", options?: ChatOption[]) => {
      const newMessage: Message = {
        id: uuidv4(),
        text,
        sender,
        timestamp: new Date(),
        options,
      };

      setMessages((prev) => [...prev, newMessage]);
      return newMessage;
    },
    []
  );

  const addUserMessage = useCallback(
    (text: string) => {
      return addMessage(text, "user");
    },
    [addMessage]
  );

  const addBotMessage = useCallback(
    (text: string, options?: ChatOption[]) => {
      setIsTyping(true);

      // Simulate typing delay
      setTimeout(() => {
        addMessage(text, "bot", options);
        setIsTyping(false);
      }, 1000);
    },
    [addMessage]
  );

  const handleSendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;

      addUserMessage(text);

      // Simple keyword matching for demo purposes
      const lowerText = text.toLowerCase();

      if (
        lowerText.includes("match") ||
        lowerText.includes("play") ||
        lowerText.includes("when")
      ) {
        handleAction("SHOW_MATCHES");
      } else if (
        lowerText.includes("result") ||
        lowerText.includes("score") ||
        lowerText.includes("win")
      ) {
        handleAction("SHOW_RESULTS");
      } else if (
        lowerText.includes("player") ||
        lowerText.includes("roster") ||
        lowerText.includes("team")
      ) {
        handleAction("SHOW_ROSTER");
      } else if (
        lowerText.includes("achievement") ||
        lowerText.includes("trophy") ||
        lowerText.includes("win")
      ) {
        handleAction("SHOW_ACHIEVEMENTS");
      } else if (
        lowerText.includes("trivia") ||
        lowerText.includes("fact") ||
        lowerText.includes("quiz")
      ) {
        handleAction("SHOW_TRIVIA");
      } else {
        // Default response
        addBotMessage(
          "I'm not sure what you're asking. Here are some things I can help you with:",
          [
            { id: "1", text: "Show Upcoming Matches", action: "SHOW_MATCHES" },
            { id: "2", text: "Latest Results", action: "SHOW_RESULTS" },
            { id: "3", text: "Team Roster", action: "SHOW_ROSTER" },
            { id: "4", text: "Team Achievements", action: "SHOW_ACHIEVEMENTS" },
            { id: "5", text: "Give Me a Trivia", action: "SHOW_TRIVIA" },
          ]
        );
      }
    },
    [addUserMessage, addBotMessage]
  );

  const handleAction = useCallback(
    (action: string, payload?: any) => {
      switch (action) {
        case "SHOW_MATCHES":
          if (upcomingMatches.length === 0) {
            addBotMessage("📭 Não há jogos futuros no momento.", [
              { id: "1", text: "Ver Resultados", action: "SHOW_RESULTS" },
              { id: "2", text: "Ver Elenco", action: "SHOW_ROSTER" },
            ]);
            break;
          }

          const matchesText = "Here are FURIA's upcoming matches:";
          const matchesDetails = upcomingMatches
            .map(
              (match) =>
                `🗓️ ${match.date} ${match.time}\n` +
                `🏆 ${match.event}\n` +
                `🆚 vs ${match.opponent}\n` +
                `📺 ${
                  match.watchLink
                    ? `Watch: ${match.watchLink}`
                    : "Watch link TBA"
                }`
            )
            .join("\n\n");

          addBotMessage(`${matchesText}\n\n${matchesDetails}`, [
            { id: "1", text: "Show Results", action: "SHOW_RESULTS" },
            { id: "2", text: "Team Roster", action: "SHOW_ROSTER" },
          ]);
          break;

        case "SHOW_RESULTS":
          const resultsText = "Here are FURIA's recent results:";
          const resultsDetails = recentResults
            .map((result) => {
              const outcomeEmoji =
                result.outcome === "win"
                  ? "✅"
                  : result.outcome === "loss"
                  ? "❌"
                  : "➖";
              return (
                `${outcomeEmoji} ${result.date}\n` +
                `🏆 ${result.event}\n` +
                `🆚 vs ${result.opponent}\n` +
                `🎯 Score: ${result.score}`
              );
            })
            .join("\n\n");

          addBotMessage(`${resultsText}\n\n${resultsDetails}`, [
            { id: "1", text: "Upcoming Matches", action: "SHOW_MATCHES" },
            { id: "2", text: "Team Achievements", action: "SHOW_ACHIEVEMENTS" },
          ]);
          break;

        case "SHOW_ROSTER":
          const rosterText = "Here's the current FURIA CS roster:";
          const rosterDetails = roster
            .map((player) => {
              const flag =
                player.realName === "Mareks Gaļinskis"
                  ? "🇱🇻"
                  : player.realName === "Danil Golubenko"
                  ? "🇰🇿"
                  : "🇧🇷";

              return `👤 ${flag} ${player.name} (${player.realName}) - Joined on ${player.joinDate}`;
            })
            .join("\n\n");

          addBotMessage(`${rosterText}\n\n${rosterDetails}`, [
            { id: "1", text: "Team Achievements", action: "SHOW_ACHIEVEMENTS" },
            { id: "2", text: "Give Me a Trivia", action: "SHOW_TRIVIA" },
          ]);
          break;

        case "SHOW_ACHIEVEMENTS":
          const achievementsText = "Here are FURIA's major achievements:";
          const achievementsDetails = achievements
            .map(
              (achievement) =>
                `🏆 ${achievement.title}\n` +
                `📅 ${achievement.date}\n` +
                `🎖️ ${achievement.description}`
            )
            .join("\n\n");

          addBotMessage(`${achievementsText}\n\n${achievementsDetails}`, [
            { id: "1", text: "Team Roster", action: "SHOW_ROSTER" },
            { id: "2", text: "Give Me a Trivia", action: "SHOW_TRIVIA" },
          ]);
          break;

        case "SHOW_TRIVIA":
          const randomIndex = Math.floor(
            Math.random() * triviaQuestions.length
          );
          const trivia = triviaQuestions[randomIndex];

          addBotMessage(
            `🎯 FURIA Fan Trivia Time! 🎯\n\n${trivia.question}`,
            trivia.options.map((option, index) => ({
              id: index.toString(),
              text: option,
              action: "ANSWER_TRIVIA",
            }))
          );
          break;

        case "ANSWER_TRIVIA":
          const selectedOption = parseInt(payload);
          const lastMessage = messages[messages.length - 1];
          const question = lastMessage.text.split("\n\n")[1];
          const triviaQuestion = triviaQuestions.find(
            (t) => t.question === question
          );

          if (triviaQuestion) {
            const isCorrect = selectedOption === triviaQuestion.answer;
            const responseText = isCorrect
              ? `✅ Correct! ${triviaQuestion.explanation}`
              : `❌ Incorrect. The correct answer is "${
                  triviaQuestion.options[triviaQuestion.answer]
                }". ${triviaQuestion.explanation}`;

            addBotMessage(responseText, [
              { id: "1", text: "Another Trivia", action: "SHOW_TRIVIA" },
              { id: "2", text: "Show Matches", action: "SHOW_MATCHES" },
            ]);
          }
          break;

        default:
          addBotMessage(
            "I'm not sure what you're asking. Here are some things I can help you with:",
            [
              {
                id: "1",
                text: "Show Upcoming Matches",
                action: "SHOW_MATCHES",
              },
              { id: "2", text: "Latest Results", action: "SHOW_RESULTS" },
              { id: "3", text: "Team Roster", action: "SHOW_ROSTER" },
              {
                id: "4",
                text: "Team Achievements",
                action: "SHOW_ACHIEVEMENTS",
              },
              { id: "5", text: "Give Me a Trivia", action: "SHOW_TRIVIA" },
            ]
          );
      }
    },
    [messages, addBotMessage]
  );

  return {
    messages,
    isTyping,
    handleSendMessage,
    handleAction,
  };
};
