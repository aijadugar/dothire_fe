const API_URL = "http://127.0.0.1:8000";  // Ensure this is correct

export const uploadResume = async (formData) => {
  try {
    const response = await fetch(`${API_URL}/upload-resume/`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload resume");
    }

    return await response.json();
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
};

// ✅ Add this function to fix the missing import issue
export const getRankedResumes = async () => {
  try {
    const response = await fetch(`${API_URL}/ranked-resumes/`); // Ensure the correct API endpoint

    if (!response.ok) {
      throw new Error("Failed to fetch ranked resumes");
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
