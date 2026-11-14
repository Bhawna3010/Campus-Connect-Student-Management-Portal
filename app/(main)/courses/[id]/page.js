import Link from "next/link";

const courseData = {
  "1": {
    name: "Web Development",
    code: "CS301",
    faculty: "Prof. Amit Sharma",
    credits: 4,
    progress: 75,
    category: "Development",
    description: "Learn HTML, CSS, JavaScript, React and Next.js to build modern websites.",
    duration: "6 Months",
    assignments: 8,
    completed: 6,
  },
  "2": {
    name: "Database Systems",
    code: "CS302",
    faculty: "Prof. Neha Gupta",
    credits: 3,
    progress: 60,
    category: "Database",
    description: "Learn database concepts, SQL queries, normalization and database management.",
    duration: "5 Months",
    assignments: 10,
    completed: 6,
  },
  "3": {
    name: "Data Structures",
    code: "CS303",
    faculty: "Prof. Rajesh Kumar",
    credits: 4,
    progress: 85,
    category: "Programming",
    description: "Understand arrays, linked lists, stacks, queues, trees and algorithms.",
    duration: "6 Months",
    assignments: 7,
    completed: 6,
  },
  "4": {
    name: "Computer Networks",
    code: "CS304",
    faculty: "Prof. Priya Singh",
    credits: 3,
    progress: 50,
    category: "Networking",
    description: "Study networking fundamentals, protocols, network layers and communication.",
    duration: "5 Months",
    assignments: 8,
    completed: 4,
  },
  "5": {
    name: "Operating Systems",
    code: "CS305",
    faculty: "Prof. Ankit Verma",
    credits: 4,
    progress: 70,
    category: "Computer Science",
    description: "Learn process management, memory management and operating system concepts.",
    duration: "6 Months",
    assignments: 10,
    completed: 7,
  },
  "6": {
    name: "Software Engineering",
    code: "CS306",
    faculty: "Prof. Sneha Patel",
    credits: 3,
    progress: 90,
    category: "Development",
    description: "Understand software development life cycle, testing and project management.",
    duration: "5 Months",
    assignments: 10,
    completed: 9,
  },
};

export default async function CourseDetails({ params }) {
  const { id } = await params;
  const course = courseData[id];

  if (!course) {
    return (
      <main className="course-detail-page">
        <h1>Course Not Found</h1>
        <Link href="/courses">Back to Courses</Link>
      </main>
    );
  }

  return (
    <main className="course-detail-page">
      <Link href="/courses" className="course-detail-back">
        ← Back to Courses
      </Link>

      <div className="course-detail-card">
        <div className="course-detail-icon">📚</div>

        <span className="course-category">{course.category}</span>

        <h1>{course.name}</h1>
        <p className="course-detail-code">{course.code}</p>

        <p className="course-description">{course.description}</p>

        <div className="course-detail-info">
          <div>
            <strong>Faculty</strong>
            <p>{course.faculty}</p>
          </div>
          <div>
            <strong>Credits</strong>
            <p>{course.credits}</p>
          </div>
          <div>
            <strong>Duration</strong>
            <p>{course.duration}</p>
          </div>
          <div>
            <strong>Total Assignments</strong>
            <p>{course.assignments}</p>
          </div>
        </div>

        <h2>Course Progress</h2>

        <div className="course-detail-progress">
          <div className="progress-heading">
            <span>Overall Progress</span>
            <strong>{course.progress}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="completed-assignment">
          <h2>{course.completed}/{course.assignments}</h2>
          <p>Assignments Completed</p>
        </div>
      </div>
    </main>
  );
}
