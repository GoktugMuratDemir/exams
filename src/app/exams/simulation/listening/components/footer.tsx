"use client";

import { cn } from "@/lib/utils";
import React from "react";

const Footer: React.FC = () => {
  const part1Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const part2TotalQuestions = 13;
  const part2AnsweredQuestions = 0;
  const part3TotalQuestions = 14;
  const part3AnsweredQuestions = 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 border border-[#14b8a6] rounded-lg p-2">
          <span className="font-bold text-gray-800">Part 1</span>
          <div className="flex space-x-1">
            {part1Questions.slice(0, 10).map((questionNum) => (
              <button
                key={questionNum}
                className="flex items-center justify-center w-6 h-6 rounded-full bg-[#14b8a6] text-white text-sm hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:ring-opacity-50"
                onClick={() => console.log(`Question ${questionNum} clicked`)}
              >
                {questionNum}
              </button>
            ))}
          </div>
        </div>

        <div className="text-gray-800 font-bold">
          Part 2: {part2AnsweredQuestions} of {part2TotalQuestions} questions
        </div>

        <div className="text-gray-800 font-bold">
          Part 3: {part3AnsweredQuestions} of {part3TotalQuestions} questions
        </div>
      </div>
    </div>
  );
};

export default Footer;
