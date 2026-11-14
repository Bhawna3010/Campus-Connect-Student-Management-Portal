import Link from "next/link";

const courses = [
  {
    id: "1",
    name: "Web Development",
    code: "CS301",
    faculty: "Prof. Amit Sharma",
    credits: 4,
    progress: 75,
    category: "Development",
  },
  {
    id: "2",
    name: "Database Systems",
    code: "CS302",
    faculty: "Prof. Neha Gupta",
    credits: 3,
    progress: 60,
    category: "Database",
  },
  {
    id: "3",
    name: "Data Structures",
    code: "CS303",
    faculty: "Prof. Rajesh Kumar",
    credits: 4,
    progress: 85,
    category: "Programming",
  },
  {
    id: "4",
    name: "Computer Networks",
    code: "CS304",
    faculty: "Prof. Priya Singh",
    credits: 3,
    progress: 50,
    category: "Networking",
  },
  {
    id: "5",
    name: "Operating Systems",
    code: "CS305",
    faculty: "Prof. Ankit Verma",
    credits: 4,
    progress: 70,
    category: "Computer Science",
  },
  {
    id: "6",
    name: "Software Engineering",
    code: "CS306",
    faculty: "Prof. Sneha Patel",
    credits: 3,
    progress: 90,
    category: "Development",
  },
];

export default function CoursesPage() {
  return (
    <main className="courses-page">
      <div className="courses-header">
        <div>
          <h1>My Courses</h1>
          <p>Explore your enrolled courses and track your progress.</p>
        </div>

        <Link href="/dashboard" className="courses-back">
          Back to Dashboard
        </Link>
      </div>

      <div className="courses-summary">
        <div>
          <h2>06</h2>
          <p>Total Courses</p>
        </div>
        <div>
          <h2>21</h2>
          <p>Total Credits</p>
        </div>
        <div>
          <h2>72%</h2>
          <p>Average Progress</p>
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">📚</div>

            <span className="course-category">
              {course.category}
            </span>

            <h2>{course.name}</h2>
            <p className="course-code">{course.code}</p>

            <div className="course-details">
              <p><strong>Faculty:</strong> {course.faculty}</p>
              <p><strong>Credits:</strong> {course.credits}</p>
            </div>

            <div className="progress-heading">
              <span>Course Progress</span>
              <strong>{course.progress}%</strong>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <Link
              href={`/courses/${course.id}`}
              className="course-view-button"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
