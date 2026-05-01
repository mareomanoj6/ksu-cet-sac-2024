"use client";

import { useId, useState } from "react";
import type { SemesterPapers } from "@/lib/types";

const SEM_KEYS = ["sem1", "sem2", "sem3", "sem4", "sem5", "sem6", "sem7", "sem8"] as const;

type QuestionDepartmentViewProps = {
  data: Record<string, SemesterPapers>;
};

export function QuestionDepartmentView({ data }: QuestionDepartmentViewProps) {
  const [active, setActive] = useState("sem1");
  const selectId = useId();

  return (
    <>
      <div className="semester-selector">
        <label htmlFor={selectId} className="sr-only">
          Select semester
        </label>
        <select
          id={selectId}
          className="semester-select"
          value={active}
          onChange={(e) => setActive(e.target.value)}
          aria-label="Select semester"
        >
          {SEM_KEYS.map((key, i) => (
            <option key={key} value={key}>
              Semester {i + 1}
            </option>
          ))}
        </select>
      </div>

      {SEM_KEYS.map((key) => {
        const sem = data[key];
        if (!sem) return null;

        const isActive = active === key;

        return (
          <div
            key={key}
            id={key}
            className={`semester-content ${isActive ? "active" : ""}`}
            role="tabpanel"
            aria-hidden={!isActive}
          >
            <div className="subject-grid">
              {sem.subjects.map((sub) => (
                <div key={sub.name} className="subject-card">
                  <div className="subject-header">{sub.name}</div>
                  <div className="subject-content">
                    {sub.papers.length === 0 ? (
                      <p style={{ color: "var(--text-muted)", margin: 0 }}>
                        Question papers for this semester will be available soon.
                      </p>
                    ) : (
                      <ul className="paper-list">
                        {sub.papers.map((p) => (
                          <li key={p.label}>
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {p.label} <i className="fas fa-download" aria-hidden />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
