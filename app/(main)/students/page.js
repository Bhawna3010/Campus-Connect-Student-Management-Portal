"use client";

import { useState } from "react";
import Link from "next/link";

const students = [
  { id: "1", name: "Aarav Sharma", roll: "CS101", department: "Computer Science", year: "2nd Year", email: "aarav@gmail.com" },
  { id: "2", name: "Priya Verma", roll: "CS102", department: "Computer Science", year: "3rd Year", email: "priya@gmail.com" },
  { id: "3", name: "Rahul Kumar", roll: "IT103", department: "Information Technology", year: "2nd Year", email: "rahul@gmail.com" },
  { id: "4", name: "Ananya Singh", roll: "EC104", department: "Electronics", year: "1st Year", email: "ananya@gmail.com" },
  { id: "5", name: "Rohan Gupta", roll: "IT105", department: "Information Technology", year: "3rd Year", email: "rohan@gmail.com" },
  { id: "6", name: "Sneha Patel", roll: "EC106", department: "Electronics", year: "2nd Year", email: "sneha@gmail.com" },
];

export default function StudentsPage() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.roll.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" || student.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <main className="students-page">
      <div className="students-header">
        <div>
          <h1>Students</h1>
          <p>Manage and explore student information.</p>
        </div>
        <Link href="/dashboard" className="back-button">
          Back to Dashboard
        </Link>
      </div>

      <div className="student-filters">
        <input
          type="text"
          placeholder="Search by name or roll number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>

      <p className="student-count">
        Showing {filteredStudents.length} students
      </p>

      <div className="students-grid">
        {filteredStudents.map((student) => (
          <div className="student-card" key={student.id}>
            <div className="student-avatar">
              {student.name.charAt(0)}
            </div>

            <h2>{student.name}</h2>
            <p>{student.roll}</p>
            <div className="student-info">
              <span>{student.department}</span>
              <span>{student.year}</span>
              <span>{student.email}</span>
            </div>

            <Link
              href={`/students/${student.id}`}
              className="view-profile-button"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <p className="no-students">No students found.</p>
      )}
    </main>
  );
}
