import React, { useState } from "react";
import { IoHelpCircleOutline, IoCallOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FiMail } from "react-icons/fi";

const HelpFeedbackReport = () => {
  const [feedback, setFeedback] = useState("");
  const [report, setReport] = useState("");

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alert("Your report has been submitted!");
    setReport("");
  };

  return (
    <section className="bg-gradient-to-r from-[#111827] to-[#1f2937] text-white py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Need Help or Want to Reach Out?
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Whether you're looking for answers, sharing feedback, or reporting a concern — we're all ears.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Help Center */}
        <div className="bg-[#1f2937] border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <IoHelpCircleOutline className="text-5xl text-[#00B8D4] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Help Center</h3>
          <p className="text-sm text-gray-400 text-center mb-4">
            Find quick answers to the most commonly asked questions.
          </p>
          <a href="/help" className="block text-center text-[#00B8D4] font-medium hover:underline">
            Visit Help Center →
          </a>
        </div>

        {/* Feedback Form */}
        <div className="bg-[#1f2937] border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <BiCommentDetail className="text-5xl text-[#FF6F61] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Give Feedback</h3>
          <form onSubmit={handleFeedbackSubmit} className="space-y-4 mt-4">
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-[#FF6F61] outline-none"
              placeholder="Share your thoughts with us..."
              rows="4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-[#FF6F61] hover:bg-[#FF3D3D] text-white font-semibold py-2 rounded-lg transition">
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Report an Issue */}
        <div className="bg-[#1f2937] border border-gray-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
          <MdReportProblem className="text-5xl text-[#FF6F61] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2 text-center">Report an Issue</h3>
          <form onSubmit={handleReportSubmit} className="space-y-4 mt-4">
            <textarea
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-[#FF6F61] outline-none"
              placeholder="Describe the issue you’re facing..."
              rows="4"
              value={report}
              onChange={(e) => setReport(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-[#FF6F61] hover:bg-[#FF3D3D] text-white font-semibold py-2 rounded-lg transition">
              Submit Report
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto mt-20 px-6 py-10 bg-[#1f2937] border border-gray-700 rounded-2xl shadow-xl text-center">
        <h3 className="text-2xl font-semibold mb-6 text-white">Reach Out Directly</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-300 text-sm sm:text-base">
          <p className="flex items-center gap-2">
            <CiLocationOn className="text-xl text-[#00B8D4]" /> India, Kerala
          </p>
          <p className="flex items-center gap-2">
            <IoCallOutline className="text-xl text-[#00B8D4]" /> +91 9000000009
          </p>
          <p className="flex items-center gap-2">
            <FiMail className="text-xl text-[#00B8D4]" /> buyit@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpFeedbackReport;
