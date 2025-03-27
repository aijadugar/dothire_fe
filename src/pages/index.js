import { useState } from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import ResumeList from "../components/ResumeList";

export default function Home() {
  const [jobDesc, setJobDesc] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">AI Resume Screener</h1>
        
        <textarea
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Paste Job Description..."
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />

        <ResumeUpload />
        {jobDesc && <ResumeList jobDesc={jobDesc} />}
      </div>
    </div>
  );
}
