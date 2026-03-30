import Sidebar from "./Sidebar";
import Header from "./Header";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#fdfaf6]">
      <Sidebar />

      {/* Main content offset by sidebar width */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 px-8 py-7">
          {children}
        </main>
      </div>
    </div>
  );
}
