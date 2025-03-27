import { useRouter } from "next/router";
import ResumeList from "../components/ResumeList";

const Results = () => {
  const router = useRouter();
  const { jobDesc } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Ranked Resumes</h1>
      {jobDesc ? <ResumeList jobDesc={jobDesc} /> : <p>No Job Description Provided</p>}
    </div>
  );
};

export default Results;
