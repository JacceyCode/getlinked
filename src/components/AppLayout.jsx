import { Outlet } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

function AppLayout() {
  return (
    <section className="bg-background">
      <Header />
      <ScrollToTop />
      <Outlet />
    </section>
  );
}

export default AppLayout;
