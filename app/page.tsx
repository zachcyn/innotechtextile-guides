// app/page.jsx
"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GuidesSection from "../components/GuidesSection";

export default function HomePage() {
  const scrollToSection = () => {};

  return (
    <div className="min-h-screen flex flex-col">
      <Header scrollToSection={scrollToSection} />

      <main className="flex-1 px-4 md:px-8 pt-28 bg-white dark:bg-navy">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white leading-tight">
            Innotech Textile
            <span className="hidden md:inline"> - </span>
            <br className="block md:hidden" />
            IT Guides
          </h1>

          <GuidesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
 