"use client";

import { useState } from "react";
import Link from "next/link";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [assignmentAlerts, setAssignmentAlerts] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(false);
  const [theme, setTheme] = useState("Light");

  function saveSettings() {
    alert("Settings saved successfully!");
  }

  return (
    <main className="settings-page">
      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your account preferences and notifications.</p>
        </div>

        <Link href="/dashboard" className="settings-back">
          Back to Dashboard
        </Link>
      </div>

      <div className="settings-container">

        <section className="settings-card">
          <h2>🔔 Notification Settings</h2>
          <p className="settings-description">
            Choose which notifications you want to receive.
          </p>

          <div className="setting-option">
            <div>
              <h3>Email Notifications</h3>
              <p>Receive important updates through email.</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
          </div>

          <div className="setting-option">
            <div>
              <h3>Assignment Alerts</h3>
              <p>Get reminders about assignment deadlines.</p>
            </div>
            <input
              type="checkbox"
              checked={assignmentAlerts}
              onChange={(e) => setAssignmentAlerts(e.target.checked)}
            />
          </div>

          <div className="setting-option">
            <div>
              <h3>Course Updates</h3>
              <p>Receive notifications about new course updates.</p>
            </div>
            <input
              type="checkbox"
              checked={courseUpdates}
              onChange={(e) => setCourseUpdates(e.target.checked)}
            />
          </div>
        </section>

        <section className="settings-card">
          <h2>🎨 Appearance</h2>
          <p className="settings-description">
            Select your preferred display theme.
          </p>

          <label className="theme-label">Choose Theme</label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="Light">Light Theme</option>
            <option value="Dark">Dark Theme</option>
          </select>

          <p className="theme-note">
            Selected theme: {theme}
          </p>
        </section>

        <section className="settings-card">
          <h2>🔐 Account Settings</h2>
          <p className="settings-description">
            Manage your CampusConnect account.
          </p>

          <div className="account-detail">
            <strong>Account Name</strong>
            <span>Bhawna</span>
          </div>

          <div className="account-detail">
            <strong>Account Type</strong>
            <span>Student</span>
          </div>

          <div className="account-detail">
            <strong>Platform</strong>
            <span>CampusConnect</span>
          </div>
        </section>

        <button className="save-settings" onClick={saveSettings}>
          Save Settings
        </button>

      </div>
    </main>
  );
}
