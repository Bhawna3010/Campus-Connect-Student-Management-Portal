import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}
