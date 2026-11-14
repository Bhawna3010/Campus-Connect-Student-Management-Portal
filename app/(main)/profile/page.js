"use client";

import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const [name, setName] = useState("Bhawna");
  const [email, setEmail] = useState("bhawna@gmail.com");
  const [department, setDepartment] = useState("Computer Science");
  const [year, setYear] = useState("2nd Year");
  const [phone, setPhone] = useState("9876543210");
  const [editing, setEditing] = useState(false);

  function handleSave(e) {
    e.preventDefault();
    setEditing(false);
    alert("Profile updated successfully!");
  }

  return (
    <main className="profile-page">
      <div className="profile-header">
        <div>
          <h1>My Profile</h1>
          <p>View and manage your personal information.</p>
        </div>
        <Link href="/dashboard" className="profile-back">
          Back to Dashboard
        </Link>
      </div>

      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">B</div>
          <div>
            <h2>{name}</h2>
            <p>Student</p>
            <span>CampusConnect Member</span>
          </div>
        </div>

        <div className="profile-section">
          <div className="profile-section-heading">
            <h2>Personal Information</h2>
            <button
              className="edit-profile"
              onClick={() => setEditing(!editing)}
            >
              {editing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          <form onSubmit={handleSave}>
            <div className="profile-fields">
              <div>
                <label>Full Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div>
                <label>Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div>
                <label>Department</label>
                <input
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div>
                <label>Academic Year</label>
                <input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={!editing}
                  required
                />
              </div>
            </div>

            {editing && (
              <button type="submit" className="save-profile">
                Save Changes
              </button>
            )}
          </form>
        </div>

        <div className="profile-academic">
          <h2>Academic Overview</h2>
          <div className="profile-stats">
            <div>
              <h3>06</h3>
              <p>Enrolled Courses</p>
            </div>
            <div>
              <h3>85%</h3>
              <p>Attendance</p>
            </div>
            <div>
              <h3>24</h3>
              <p>Completed Assignments</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
