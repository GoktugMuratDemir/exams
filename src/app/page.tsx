"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/exams");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-white p-4 rounded-full shadow-lg">
              <svg width="64" height="64" fill="#1A2E45" viewBox="0 0 24 24">
                <path
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke="#1A2E45"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1A2E45] mb-6">
            IELTS Practice
          </h1>

          <p className="text-xl md:text-2xl text-[#6B7A90] mb-8 max-w-2xl mx-auto leading-relaxed">
            Master your IELTS skills with our comprehensive practice tests and
            simulations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1A2E45] mb-2">
              Real Test Experience
            </h3>
            <p className="text-[#6B7A90]">
              Practice with authentic IELTS format and timing
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1A2E45] mb-2">
              Instant Feedback
            </h3>
            <p className="text-[#6B7A90]">
              Get immediate results and detailed explanations
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#1A2E45] mb-2">
              Comprehensive Coverage
            </h3>
            <p className="text-[#6B7A90]">
              All four skills: Listening, Reading, Writing, Speaking
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1A2E45] mb-4">
            Ready to Start Your IELTS Journey?
          </h2>
          <p className="text-[#6B7A90] mb-6">
            Join thousands of students who have improved their IELTS scores with
            our practice platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-3 bg-[#1A2E45] text-white rounded-full font-semibold text-lg hover:bg-[#16325c] transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </button>
            <button
              onClick={handleGetStarted}
              className="px-8 py-3 border-2 border-[#1A2E45] text-[#1A2E45] rounded-full font-semibold text-lg hover:bg-[#1A2E45] hover:text-white transition-colors"
            >
              Take Practice Test
            </button>
          </div>

          <p className="text-sm text-[#6B7A90] mt-4">
            Click the buttons above to start practicing
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-[#6B7A90] text-sm">
            © 2025 IELTS Practice Platform. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
