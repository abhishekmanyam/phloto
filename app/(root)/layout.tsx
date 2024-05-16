import MobileNav from "@/components/Shared/MobileNav";
import Sidebar from "@/components/Shared/sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <Sidebar />

      <MobileNav />

      <div className="root-container">
        <div className="Wrapper"> {children}</div>
      </div>
    </main>
  );
}

export default Layout;
