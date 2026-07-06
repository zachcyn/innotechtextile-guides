// components/GuidesSection.jsx
"use client";

import React, { useMemo, useState } from "react";

export default function GuidesSection() {
  const selfWrittenGuides = useMemo(
    () => [
      { title: "Outlook Setup Guide", file: "/pdf/Outlook_Setup_User_Guide.pdf" },
      { title: "Mobile Version Setup Guide", file: "/pdf/Outlook_Mobile_Version_Setup_Guide.pdf" },
      { title: "Reporting Email as Junk", file: "/pdf/Outlook__Reporting_Email_as_Junk.pdf" },
      { title: "Adding a Shared Mailbox", file: "/pdf/Outlook__Adding_a_Shared_Mailbox.pdf" },
      { title: "Sending Email as Alias", file: "/pdf/Outlook__Sending_Email_as_Alias.pdf" },
    ],
    []
  );

  const microsoftGuides = useMemo(
    () => [
      { title: "Microsoft Outlook", file: "/pdf/ms/microsoft-outlook-guide.pdf" },
      { title: "Microsoft Teams", file: "/pdf/ms/microsoft-teams-guide.pdf" },
      { title: "Microsoft OneDrive", file: "/pdf/ms/microsoft-onedrive-guide.pdf" },
    ],
    []
  );

  const [activeFolder, setActiveFolder] = useState("ms");
  const [activeIdx, setActiveIdx] = useState(0);

  const currentGuides =
    activeFolder === "ms" ?  microsoftGuides : selfWrittenGuides;

  const activeGuide = currentGuides[activeIdx] ?? currentGuides[0];

  // Reset index when folder changes to avoid out‑of‑range
  const handleFolderChange = (folder) => {
    setActiveFolder(folder);
    setActiveIdx(0);
  };

  return (
     <section className="w-full max-w-5xl mx-auto mt-10 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        {/* Sidebar */}
        <aside className="md:w-72 flex-shrink-0">
          {/* Section label */}
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 font-mono mb-3">
            Guides
          </p>

          {/* Folder toggle */}
          <div className="inline-flex text-xs font-mono rounded-full bg-gray-100/60 dark:bg-white/5 p-1 mb-4">
            <button
              type="button"
              onClick={() => handleFolderChange("ms")}
              className={`
                px-3 py-1 rounded-full transition-colors
                ${
                  activeFolder === "ms"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-200"
                }
              `}
            >
              Microsoft
            </button>
            <button
              type="button"
              onClick={() => handleFolderChange("self")}
              className={`
                px-3 py-1 rounded-full transition-colors
                ${
                  activeFolder === "self"
                    ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-200"
                }
              `}
            >
              Self‑written 
            </button>
          </div>

          {/* Guide list */}
          <div className="space-y-1 border-l border-gray-200/60 dark:border-gray-800/80 pl-3">
            {currentGuides.map((g, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  type="button"
                  key={`${activeFolder}-${g.file}`}
                  onClick={() => setActiveIdx(idx)}
                  className={`
                    w-full text-left text-[13px] md:text-sm font-mono py-1.5 pr-2
                    transition-colors rounded-r
                    ${
                      isActive
                        ? "text-slate-900 dark:text-slate-50 bg-gray-100/70 dark:bg-white/5"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-200"
                    }
                  `}
                >
                  {g.title}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main viewer */}
        <div className="flex-1 flex flex-col min-h-[55vh] md:min-h-[60vh]">
          {/* Header */}
          <div className="flex items-start md:items-center justify-between gap-4 mb-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500 font-mono mb-1">
                {activeFolder === "ms" ? "Microsoft official guide" : "Self‑written guide"}
              </p>
              <h2 className="text-sm md:text-base font-mono text-slate-900 dark:text-slate-50">
                {activeGuide?.title}
              </h2>
            </div>

            <a
              href={activeGuide?.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1.5 text-[11px] font-mono text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              <span>Open</span>
              <span className="text-gray-400 dark:text-gray-500">↗</span>
            </a>
          </div>

          {/* PDF frame */}
          <div className="relative flex-1 rounded-lg border border-gray-200/70 dark:border-gray-800/80 bg-white dark:bg-[#050816] overflow-hidden">
            <object
              key={`${activeFolder}-${activeGuide?.file}`}
              data={activeGuide?.file}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={activeGuide?.file}
                title={activeGuide?.title || "User guide PDF"}
                className="w-full h-full"
                loading="lazy"
              />
              <div className="p-6 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                PDF preview isn’t available here.{" "}
                <a
                  href={activeGuide?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-slate-900 dark:text-slate-50"
                >
                  Open the PDF
                </a>
                .
              </div>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
}