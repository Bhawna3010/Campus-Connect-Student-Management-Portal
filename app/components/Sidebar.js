"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "📊 Dashboard" },
    { href: "/students", label: "👨‍🎓 Students" },
    { href: "/courses", label: "📚 Courses" },
    { href: "/assignments", label: "📝 Assignments" },
  ];

  const accountItems = [
    { href: "/profile", label: "👤 My Profile" },
    { href: "/settings", label: "⚙️ Settings" },
    { href: "/login", label: "↪ Logout" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">🎓 CampusConnect</h2>

      <p className="menu-heading">MENU</p>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              pathname === item.href ||
              pathname.startsWith(item.href + "/")
                ? "active"
                : ""
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <p className="menu-heading">ACCOUNT</p>

      <nav className="sidebar-nav">
        {accountItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="avatar">B</div>
        <div>
          <strong>Bhawna</strong>
          <small>Student</small>
        </div>
      </div>
    </aside>
  );
}
