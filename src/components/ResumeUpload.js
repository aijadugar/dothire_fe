import { useState } from "react";
import { uploadResume } from "../api";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    let formData = new FormData();
    formData.append("resume", file);
    setUploading(true);

    try {
      await uploadResume(formData);
      alert("Resume uploaded successfully!");
    } catch (error) {
      alert("Upload failed!");
    }
    setUploading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-lg font-semibold mb-4">Upload Resume</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button
        onClick={handleUpload}
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Resume"}
      </button>
    </div>
  );
};

export default ResumeUpload;
