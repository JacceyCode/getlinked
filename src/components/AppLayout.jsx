import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="bg-background h-screen">
      <Outlet />
    </main>
  );
}

export default AppLayout;
