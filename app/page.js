import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <h2>🎓 CampusConnect</h2>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>

        <Link href="/login" className="nav-btn">
          Get Started
        </Link>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="tag">WELCOME TO CAMPUSCONNECT</span>

          <h1>
            Your Campus Life,
            <span> Simplified.</span>
          </h1>

          <p>
            Manage your courses, assignments, attendance
            and student information all in one place.
            Make your academic journey easier with CampusConnect.
          </p>

          <div className="hero-buttons">
            <Link href="/login" className="primary-btn">
              Get Started →
            </Link>

            <Link href="/dashboard" className="secondary-btn">
              Explore Dashboard
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>Student Overview</span>
            <span>📊</span>
          </div>

          <h2>Welcome Back!</h2>
          <p>Here's your academic overview.</p>

          <div className="stats">
            <div>
              <h3>06</h3>
              <p>Courses</p>
            </div>

            <div>
              <h3>85%</h3>
              <p>Attendance</p>
            </div>

            <div>
              <h3>12</h3>
              <p>Assignments</p>
            </div>
          </div>

          <div className="progress-box">
            <p>Overall Progress</p>
            <div className="progress">
              <div></div>
            </div>
            <small>75% completed</small>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Everything You Need in One Place</h2>
        <p>Manage your academic activities easily.</p>

        <div className="feature-grid">
          <div className="feature-card">
            <span>📚</span>
            <h3>Courses</h3>
            <p>View your enrolled courses and learning progress.</p>
          </div>

          <div className="feature-card">
            <span>📝</span>
            <h3>Assignments</h3>
            <p>Track assignments and upcoming deadlines.</p>
          </div>

          <div className="feature-card">
            <span>📊</span>
            <h3>Attendance</h3>
            <p>Keep track of your attendance percentage.</p>
          </div>
        </div>
      </section>

      <footer>
        © 2026 CampusConnect. All Rights Reserved.
      </footer>
    </main>
  );
}
