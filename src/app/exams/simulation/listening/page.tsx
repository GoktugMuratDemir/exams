"use client";

import Header from "./sections/header";
import Questions1To5Section from "./sections/questions-1-to-5-section";

export default function ListeningPage() {
  const handleSubmit = () => {
    // Handle test submission
    console.log("Test submitted");
    // You can add navigation or other logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSubmit={handleSubmit} />

      {/* Main Content Area */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Part 1 Header */}
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Part 1</h1>

            {/* Questions 1-5 Header */}
            <h2 className="text-2xl font-semibold text-cyan-500 mb-8">
              Questions 1-5
            </h2>

            {/* Main Content Text */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                The housing officer takes some details from the girl.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed italic">
                Complete the following form with{" "}
                <span className="text-red-500 font-bold">
                  NO MORE THAN THREE WORDS AND/OR A NUMBER
                </span>{" "}
                for each answer.
              </p>
            </div>

            <Questions1To5Section />
          </div>
        </div>
      </div>
    </div>
  );
}
