"use client";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import Login from "./auth/login/page";

export default function Home() {
  const user = false;
  if (!user) {
    return <Login />;
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-container">salom</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
