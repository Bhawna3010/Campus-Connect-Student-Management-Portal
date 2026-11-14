"use client";

import { useState } from "react";
import Link from "next/link";

const initialAssignments = [
  {
    id: 1,
    title: "React Project",
    course: "Web Development",
    dueDate: "18 Nov 2026",
    status: "Pending",
    description: "Build a responsive website using React.",
  },
  {
    id: 2,
    title: "SQL Assignment",
    course: "Database Systems",
    dueDate: "20 Nov 2026",
    status: "Submitted",
    description: "Write SQL queries and create database tables.",
  },
  {
    id: 3,
    title: "DSA Practice",
    course: "Data Structures",
    dueDate: "23 Nov 2026",
    status: "Pending",
    description: "Solve array, stack and linked list problems.",
  },
  {
    id: 4,
    title: "Network Design",
    course: "Computer Networks",
    dueDate: "25 Nov 2026",
    status: "Submitted",
    description: "Prepare a basic computer network design.",
  },
  {
    id: 5,
    title: "OS Case Study",
    course: "Operating Systems",
    dueDate: "28 Nov 2026",
    status: "Pending",
    description: "Study process and memory management.",
  },
  {
    id: 6,
    title: "Software Testing",
    course: "Software Engineering",
    dueDate: "30 Nov 2026",
    status: "Submitted",
    description: "Prepare test cases for a sample application.",
  },
];

export default function AssignmentsPage() {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [filter, setFilter] = useState("All");

  const filteredAssignments = assignments.filter((item) => {
    return filter === "All" || item.status === filter;
  });

  function submitAssignment(id) {
    setAssignments((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status: "Submitted" } : item
      )
    );
  }

  const pending = assignments.filter(
    (item) => item.status === "Pending"
  ).length;

  const submitted = assignments.filter(
    (item) => item.status === "Submitted"
  ).length;

  return (
    <main className="assignments-page">
      <div className="assignments-header">
        <div>
          <h1>My Assignments</h1>
          <p>Track your assignments and submission status.</p>
        </div>

        <Link href="/dashboard" className="assignment-back">
          Back to Dashboard
        </Link>
      </div>

      <div className="assignment-summary">
        <div>
          <h2>{assignments.length}</h2>
          <p>Total Assignments</p>
        </div>
        <div>
          <h2>{pending}</h2>
          <p>Pending</p>
        </div>
        <div>
          <h2>{submitted}</h2>
          <p>Submitted</p>
        </div>
      </div>

      <div className="assignment-filter">
        <label htmlFor="status-filter">Filter by Status:</label>
        <select
          id="status-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Assignments</option>
          <option value="Pending">Pending</option>
          <option value="Submitted">Submitted</option>
        </select>
      </div>

      <div className="assignments-list">
        {filteredAssignments.map((item) => (
          <div className="assignment-card" key={item.id}>
            <div className="assignment-card-top">
              <div>
                <span className="assignment-icon">📝</span>
                <h2>{item.title}</h2>
                <p>{item.course}</p>
              </div>

              <span
                className={
                  item.status === "Submitted"
                    ? "status-badge submitted"
                    : "status-badge pending"
                }
              >
                {item.status}
              </span>
            </div>

            <p className="assignment-description">
              {item.description}
            </p>

            <p className="assignment-date">
              📅 Due Date: {item.dueDate}
            </p>

            {item.status === "Pending" ? (
              <button
                className="submit-assignment"
                onClick={() => submitAssignment(item.id)}
              >
                Submit Assignment
              </button>
            ) : (
              <button className="submitted-button" disabled>
                ✓ Submitted
              </button>
            )}
          </div>
        ))}
      </div>

      {filteredAssignments.length === 0 && (
        <p className="no-assignments">No assignments found.</p>
      )}
    </main>
  );
}
