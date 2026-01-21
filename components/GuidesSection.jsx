// components/GuidesSection.jsx
"use client";

import React, { useMemo, useState } from "react";

export default function GuidesSection() {
  const guides = useMemo(
    () => [
      { title: "Outlook Setup Guide", file: "/pdf/Outlook_Setup_User_Guide.pdf" },
      { title: "Mobile Version Setup Guide", file: "/pdf/Outlook_Mobile_Version_Setup_Guide.pdf" },
      { title: "Reporting Email as Junk", file: "/pdf/Outlook__Reporting_Email_as_Junk.pdf" },
      { title: "Adding a Shared Mailbox", file: "/pdf/Outlook__Adding_a_Shared_Mailbox.pdf" },
      { title: "Sending Email as Alias", file: "/pdf/Outlook__Sending_Email_as_Alias.pdf" },
    ],
    []
  );

  const [activeIdx, setActiveIdx] = useState(0);
  const activeGuide = guides[activeIdx];

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto mt-8 rounded-lg md:gap-16">
      <div className="flex flex-row md:flex-col md:w-72 overflow-x-auto md:overflow-x-visible mb-4 md:mb-0">
        {guides.map((g, idx) => (
          <button
            key={g.file}
            onClick={() => setActiveIdx(idx)}
            className={`
              text-center md:text-left py-2 px-4 font-mono transition-all whitespace-nowrap
              ${
                activeIdx === idx
                  ? "text-blue dark:text-light-lime font-bold border-blue dark:border-light-lime border-b-2 md:border-l-4 md:border-b-0"
                  : "text-gray-500 dark:text-gray-400 opacity-70 hover:opacity-100 border-b-2 border-transparent md:border-l-4 md:border-b-0"
              }
            `}
          >
            {g.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="border border-gray-500 dark:border-gray-700 rounded-md overflow-hidden bg-transparent">
          <div className="px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-gray-200 dark:border-gray-700">
            <div className="text-left hidden md:inline">
              <div className="text-black dark:text-white font-mono text-sm md:text-base">
                {activeGuide?.title}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={activeGuide?.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded text-sm font-mono text-blue dark:text-light-lime border border-blue dark:border-gray-600 hover:opacity-90"
              >
                Open in new tab
              </a>
            </div>
          </div>

          <div className="h-[58vh] md:h-[65vh] bg-white dark:bg-[#0B1220]">
            <object
              key={activeGuide?.file}
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
              <div className="p-6 text-sm text-gray-600 dark:text-gray-300">
                PDF preview isn’t available here.{" "}
                <a
                  href={activeGuide?.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue dark:text-light-lime"
                >
                  Open the PDF
                </a>
                .
              </div>
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
