import Link from "next/link";

const studentData = {
  "1": {
    name: "Aarav Sharma",
    roll: "CS101",
    email: "aarav@gmail.com",
    department: "Computer Science",
    year: "2nd Year",
    attendance: "88%",
    courses: 6,
    completed: 18,
  },
  "2": {
    name: "Priya Verma",
    roll: "CS102",
    email: "priya@gmail.com",
    department: "Computer Science",
    year: "3rd Year",
    attendance: "92%",
    courses: 7,
    completed: 22,
  },
  "3": {
    name: "Rahul Kumar",
    roll: "IT103",
    email: "rahul@gmail.com",
    department: "Information Technology",
    year: "2nd Year",
    attendance: "85%",
    courses: 6,
    completed: 16,
  },
  "4": {
    name: "Ananya Singh",
    roll: "EC104",
    email: "ananya@gmail.com",
    department: "Electronics",
    year: "1st Year",
    attendance: "90%",
    courses: 5,
    completed: 14,
  },
  "5": {
    name: "Rohan Gupta",
    roll: "IT105",
    email: "rohan@gmail.com",
    department: "Information Technology",
    year: "3rd Year",
    attendance: "82%",
    courses: 7,
    completed: 20,
  },
  "6": {
    name: "Sneha Patel",
    roll: "EC106",
    email: "sneha@gmail.com",
    department: "Electronics",
    year: "2nd Year",
    attendance: "95%",
    courses: 6,
    completed: 21,
  },
};

export default async function StudentDetails({ params }) {
  const { id } = await params;
  const student = studentData[id];

  if (!student) {
    return <main className="student-detail-page">
      <h1>Student Not Found</h1>
      <Link href="/students">Back to Students</Link>
    </main>;
  }

  return (
    <main className="student-detail-page">
      <Link href="/students" className="detail-back">
        ← Back to Students
      </Link>

      <div className="detail-card">
        <div className="detail-avatar">
          {student.name.charAt(0)}
        </div>

        <h1>{student.name}</h1>
        <p className="detail-role">Student</p>

        <div className="detail-info">
          <div><strong>Roll Number</strong><p>{student.roll}</p></div>
          <div><strong>Email</strong><p>{student.email}</p></div>
          <div><strong>Department</strong><p>{student.department}</p></div>
          <div><strong>Academic Year</strong><p>{student.year}</p></div>
        </div>

        <h2>Academic Overview</h2>

        <div className="detail-stats">
          <div><strong>{student.attendance}</strong><p>Attendance</p></div>
          <div><strong>{student.courses}</strong><p>Enrolled Courses</p></div>
          <div><strong>{student.completed}</strong><p>Completed Assignments</p></div>
        </div>
      </div>
    </main>
  );
}
