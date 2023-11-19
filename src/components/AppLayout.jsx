import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="bg-gray-400">
      <Outlet />
    </main>
  );
}

export default AppLayout;
