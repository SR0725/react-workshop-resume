import { useEffect, useRef, useState } from "react";

function useResume() {
  const isInitialRef = useRef(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [resume, setResume] = useState("");

  // Load data from localStorage
  useEffect(() => {
    if (isInitialRef.current) {
      return;
    }
    const storedName = localStorage.getItem("name") || "";
    const storedGender = localStorage.getItem("gender") || "";
    const storedSkills = JSON.parse(localStorage.getItem("skills") || "[]");
    const storedResume = localStorage.getItem("resume") || "";
    setName(storedName);
    setGender(storedGender);
    setSkills(storedSkills);
    setResume(storedResume);
    isInitialRef.current = true;
    console.log("initial");
  }, []);

  // Save data to localStorage
  useEffect(() => {
    if (!isInitialRef.current) {
      return;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("gender", gender);
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("resume", resume);
  }, [name, gender, skills, resume]);

  return {
    name,
    setName,
    gender,
    setGender,
    skills,
    setSkills,
    resume,
    setResume,
  };
}

export default useResume;
