import React from "react";

/**
 * Home.jsx — School Website Module
 * Theme: "Notice Board & Letterhead" — the homepage reads like the school's
 * physical bulletin board: a headmaster's letter, pinned announcement cards,
 * and a timetable-style quick-links grid. Built with Tailwind utility classes.
 *
 * Palette:
 *   Ink Navy    #1B2A4A  (headings, primary text)
 *   Parchment   #EFE8D8  (page background)
 *   Brass Gold  #B08D57  (accent, stamps, dividers)
 *   Forest      #2F5233  (secondary accent, links)
 *   Chalk White #FFFFFF  (cards)
 *
 * Type:
 *   Display — "Newsreader" (academic serif, used for the letter + headings)
 *   Body    — "Public Sans" (clean, legible for announcements)
 *   Utility — "IBM Plex Mono" (dates, stamps, period numbers)
 *
 * Fonts are loaded from Google Fonts in the <head> of the parent app,
 * or you can add the <link> tags shown in the comment at the bottom.
 */

const announcements = [
  {
    id: 1,
    date: "22 JUL",
    tag: "Admissions",
    title: "2026–27 admissions now open",
    body: "Applications for Grades 1–10 close on 15 August. Sibling and staff-ward forms available at the front office.",
    rotate: "-rotate-1",
  },
  {
    id: 2,
    date: "19 JUL",
    tag: "Sports",
    title: "Inter-house athletics meet",
    body: "Heats begin Monday on the north field. Parents welcome for the finals on Saturday morning.",
    rotate: "rotate-1",
  },
  {
    id: 3,
    date: "14 JUL",
    tag: "PTA",
    title: "Parent-teacher meeting, Class 6–8",
    body: "Report cards will be discussed. Please book a 10-minute slot through the front office by Thursday.",
    rotate: "-rotate-2",
  },
];

const quickLinks = [
  { period: "01", label: "Academics", desc: "Curriculum, syllabus & exam calendar" },
  { period: "02", label: "Admissions", desc: "Eligibility, fees & how to apply" },
  { period: "03", label: "Faculty", desc: "Meet the teaching staff" },
  { period: "04", label: "Gallery", desc: "Events, sports day & annual day" },
  { period: "05", label: "Notices", desc: "Circulars & holiday list" },
  { period: "06", label: "Contact", desc: "Address, phone & school map" },
];

export default function Home() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#EFE8D8",
        fontFamily: "'Public Sans', system-ui, sans-serif",
        color: "#1B2A4A",
      }}
    >
      {/* ---------- Top bar ---------- */}
      <header
        className="border-b-2 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ borderColor: "#B08D57" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: "#1B2A4A", color: "#EFE8D8" }}
          >
            GHS
          </div>
          <span
            className="text-lg md:text-xl tracking-wide"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 600 }}
          >
            Greenwood High School
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Academics", "Admissions", "Faculty", "Notices", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:opacity-70 transition-opacity"
              style={{ color: "#2F5233" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* ---------- Hero: Headmaster's letter ---------- */}
      <section className="px-6 md:px-12 py-14 md:py-20 max-w-4xl mx-auto">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#B08D57" }}
        >
          Office of the Headmistress · Est. 1978
        </p>
        <h1
          className="text-3xl md:text-5xl leading-tight mb-6"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 500 }}
        >
          Dear students, parents, and visitors — welcome.
        </h1>
        <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: "#1B2A4A" }}>
          Greenwood High has spent five decades teaching young people to ask good
          questions and follow them somewhere useful. Whether you're a prospective
          parent, a returning student, or checking today's notices — you'll find
          everything pinned right here on our board.
        </p>
        <p
          className="text-sm italic"
          style={{ fontFamily: "'Newsreader', serif", color: "#2F5233" }}
        >
          — Mrs. Anita Rao, Headmistress
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#admissions"
            className="px-6 py-3 text-sm font-semibold rounded-sm transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: "#1B2A4A", color: "#EFE8D8" }}
          >
            Apply for Admission
          </a>
          <a
            href="#notices"
            className="px-6 py-3 text-sm font-semibold rounded-sm border-2 transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "#1B2A4A", color: "#1B2A4A" }}
          >
            View Notice Board
          </a>
        </div>
      </section>

      {/* ---------- Notice board ---------- */}
      <section id="notices" className="px-6 md:px-12 py-14" style={{ backgroundColor: "#E4DBC4" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl md:text-3xl mb-2"
            style={{ fontFamily: "'Newsreader', serif", fontWeight: 600 }}
          >
            Pinned to the board
          </h2>
          <p className="text-sm mb-10" style={{ color: "#2F5233" }}>
            The latest announcements, as they went up.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {announcements.map((note) => (
              <div
                key={note.id}
                className={`relative bg-white p-6 shadow-md ${note.rotate} hover:rotate-0 transition-transform duration-200`}
                style={{ borderTop: "4px solid #B08D57" }}
              >
                {/* pin */}
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow"
                  style={{ backgroundColor: "#B08D57" }}
                />
                <div
                  className="text-xs mb-3 inline-block px-2 py-1 rounded-sm"
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    backgroundColor: "#1B2A4A",
                    color: "#EFE8D8",
                  }}
                >
                  {note.date}
                </div>
                <p
                  className="text-xs uppercase tracking-wide mb-2 font-semibold"
                  style={{ color: "#B08D57" }}
                >
                  {note.tag}
                </p>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#1B2A4A" }}>
                  {note.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quick links: timetable grid ---------- */}
      <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <h2
          className="text-2xl md:text-3xl mb-10"
          style={{ fontFamily: "'Newsreader', serif", fontWeight: 600 }}
        >
          Today's period, at a glance
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#B08D57" }}>
          {quickLinks.map((link) => (
            <a
              key={link.period}
              href={`#${link.label.toLowerCase()}`}
              className="bg-white p-6 flex flex-col justify-between hover:bg-[#F7F3E8] transition-colors"
            >
              <span
                className="text-3xl mb-4"
                style={{ fontFamily: "'IBM Plex Mono', monospace", color: "#B08D57" }}
              >
                {link.period}
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: "#1B2A4A" }}>
                  {link.label}
                </h3>
                <p className="text-sm" style={{ color: "#6B7280" }}>
                  {link.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer
        className="px-6 md:px-12 py-8 text-sm flex flex-col md:flex-row justify-between gap-2"
        style={{ backgroundColor: "#1B2A4A", color: "#EFE8D8" }}
      >
        <span>© {new Date().getFullYear()} Greenwood High School</span>
        <span style={{ color: "#B08D57" }}>123 School Road · Mumbai · +91-00000-00000</span>
      </footer>
    </div>
  );
}

/*
  Recommended font imports (add to your index.html <head> or App-level CSS):

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:wght@500;600&family=Public+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

  This component assumes Tailwind CSS is configured in the project (school-website module).
  If Tailwind isn't set up, the inline `style` props still cover colors/fonts/layout basics,
  but you'll want to replace the utility classes (grid, flex, spacing, hover:, etc.) with
  equivalent CSS.
*/
