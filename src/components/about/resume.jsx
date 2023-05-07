import React from "react";

function Resume() {
  // Define your resume details as a JavaScript object
  const resume = {
    name: "John Doe",
    email: "johndoe@email.com",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    experience: [
      {
        company: "Acme Inc.",
        position: "Web Developer",
        startDate: "Jan 2018",
        endDate: "Present",
        responsibilities: ["Built and maintained company website", "Implemented new features using React"]
      },
      {
        company: "XYZ Corp.",
        position: "Software Engineer",
        startDate: "Jun 2015",
        endDate: "Dec 2017",
        responsibilities: ["Developed software solutions for clients", "Collaborated with team members to meet project deadlines"]
      }
    ]
  };

  return (
    <div>
      <p>My Resume:</p>
      <p>Name: {resume.name}</p>
      <p>Email: {resume.email}</p>
      <p>Skills: {resume.skills.join(", ")}</p>
      <p>Experience:</p>
      <ul>
        {resume.experience.map((job, index) => (
          <li key={index}>
            {job.position} at {job.company} ({job.startDate} - {job.endDate})
            <ul>
              {job.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resume;
