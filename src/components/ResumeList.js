import { useEffect, useState } from "react";
import { getRankedResumes } from "../api";

const ResumeList = ({ jobDesc }) => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResumes();
  }, [jobDesc]);

  const fetchResumes = async () => {
    setLoading(true);
    try {
      const response = await getRankedResumes(jobDesc);
      setResumes(response.data.ranked_resumes);
    } catch (error) {
      alert("Failed to fetch resumes");
    }
    setLoading(false);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-2">Ranked Resumes</h2>
      {loading ? <p>Loading...</p> : (
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {resumes.map((resume, index) => (
            <li key={index} className="border-b p-2">
              <strong>{resume.name}</strong> - Score: {resume.job_match_score.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeList;
