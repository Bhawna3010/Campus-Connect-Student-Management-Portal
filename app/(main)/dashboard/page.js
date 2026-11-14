import Link from "next/link";

export default function Dashboard() {
  const activities = [
    { icon: "📚", title: "Web Development", detail: "New course added", time: "Today" },
    { icon: "📝", title: "React Assignment", detail: "Assignment submitted", time: "Yesterday" },
    { icon: "📊", title: "Attendance Updated", detail: "Attendance recorded", time: "2 days ago" },
    { icon: "🎓", title: "Database Systems", detail: "Course progress updated", time: "3 days ago" },
  ];

  const deadlines = [
    { title: "React Project", course: "Web Development", date: "18 Nov 2026", color: "red" },
    { title: "SQL Assignment", course: "Database Systems", date: "20 Nov 2026", color: "orange" },
    { title: "DSA Practice", course: "Data Structures", date: "23 Nov 2026", color: "blue" },
  ];

  return (
    <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back! Here's your academic overview.</p>
          </div>

          <div className="header-profile">
            <span>🔔</span>
            <div className="avatar">B</div>
            <strong>Bhawna</strong>
          </div>
        </header>

        <section className="welcome-banner">
          <div>
            <h2>Hello, Bhawna! 👋</h2>
            <p>Keep learning, keep growing. Have a great day!</p>
          </div>
          <span>🎓</span>
        </section>

        <section className="stats-grid">

          <div className="stat-card">
            <span className="stat-icon blue">📚</span>
            <p>Total Courses</p>
            <h2>06</h2>
            <small>Enrolled courses</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon orange">📝</span>
            <p>Pending Assignments</p>
            <h2>08</h2>
            <small>Need your attention</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon green">✅</span>
            <p>Completed Assignments</p>
            <h2>24</h2>
            <small>Successfully completed</small>
          </div>

          <div className="stat-card">
            <span className="stat-icon purple">📊</span>
            <p>Attendance</p>
            <h2>85%</h2>
            <small>Overall attendance</small>
          </div>

        </section>

        <section className="dashboard-content">

          <div className="dashboard-box">
            <div className="section-heading">
              <h3>Recent Activities</h3>
              <span>Latest updates</span>
            </div>

            {activities.map((activity, index) => (
              <div className="activity-item" key={index}>
                <div className="activity-icon">{activity.icon}</div>
                <div className="activity-info">
                  <strong>{activity.title}</strong>
                  <p>{activity.detail}</p>
                </div>
                <small>{activity.time}</small>
              </div>
            ))}
          </div>

          <div className="dashboard-box">
            <div className="section-heading">
              <h3>Upcoming Deadlines</h3>
              <span>Important dates</span>
            </div>

            {deadlines.map((item, index) => (
              <div className="deadline-item" key={index}>
                <div className={"deadline-dot " + item.color}></div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.course}</p>
                  <small>Due: {item.date}</small>
                </div>
              </div>
            ))}

            <Link href="/assignments" className="view-all">
              View All Assignments →
            </Link>
          </div>

        </section>

        <footer className="dashboard-footer">
          © 2026 CampusConnect. All Rights Reserved.
        </footer>
    </main>
  );
}
