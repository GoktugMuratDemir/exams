"use client";

import Header from "./sections/header";

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
        <div className="max-w-6xl mx-auto">
          {/* Test content will go here */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              IELTS Listening Test
            </h1>
            <p className="text-gray-600">Test content will be added here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
