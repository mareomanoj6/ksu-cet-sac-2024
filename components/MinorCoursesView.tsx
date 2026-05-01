"use client";

import { useState } from "react";
import { GENERAL_INFO } from "@/data/minor-courses";
import type { DepartmentData } from "@/data/minor-courses";

interface MinorCoursesViewProps {
  minorCoursesData: Record<string, DepartmentData>;
}

export function MinorCoursesView({ minorCoursesData }: MinorCoursesViewProps) {
  const [selectedDept, setSelectedDept] = useState<string>("");
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);

  const handleDeptChange = (value: string) => {
    setSelectedDept(value);
  };

  const renderDepartmentInfo = () => {
    if (!selectedDept) return null;

    const data = minorCoursesData[selectedDept];
    if (!data) return null;

    if (data.minors) {
      return (
        <div className="minor-cards-row">
          {data.minors.map((minor) => (
            <div key={minor.value} className="minor-card">
              <div className="minor-card-title">{minor.label}</div>
              {minor.driveLink ? (
                <a
                  href={minor.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-btn"
                >
                  View Curriculum
                </a>
              ) : (
                <button
                  className="info-btn"
                  disabled
                  style={{ opacity: 0.5, cursor: "not-allowed" }}
                >
                  Link Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      );
    }

    if (data.label && data.driveLink) {
      return (
        <div>
          <div className="minor-title">{data.label}</div>
          <a
            href={data.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="info-btn"
            style={{ margin: "0 auto", maxWidth: "320px" }}
          >
            View Curriculum
          </a>
        </div>
      );
    }

    return (
      <p style={{ color: "#888", fontSize: "0.95rem" }}>Link not yet added</p>
    );
  };

  return (
    <>
      {/* Info Box */}
      <div className="minor-info-box">
        <h2>What is a Minor in Engineering?</h2>
        <p>
          A B.Tech. Minor allows you to take additional courses outside your
          main branch of study. This helps you gain expertise in a secondary
          engineering field, expand your knowledge, and improve your career
          prospects by diversifying your skills and opening up more opportunities
          in multidisciplinary areas.
        </p>
      </div>

      {/* Department Selector */}
      <div className="department-selector">
        <button
          id="viewInfoBtn"
          className="info-btn"
          onClick={() => setShowGeneralInfo(true)}
        >
          View General Information
        </button>
        <select
          id="deptSelect"
          className="dept-select"
          value={selectedDept}
          onChange={(e) => handleDeptChange(e.target.value)}
        >
          <option value="">-- Choose Department --</option>
          <option value="aei">
            Applied Electronics & Instrumentation (AEI)
          </option>
          <option value="cse">Computer Science & Engineering (CSE)</option>
          <option value="ece">
            Electronics & Communication Engineering (ECE)
          </option>
          <option value="eee">
            Electrical & Electronics Engineering (EEE)
          </option>
          <option value="ie">Industrial Engineering (IE)</option>
          <option value="me">Mechanical Engineering (ME)</option>
        </select>
      </div>

      {/* Department Info */}
      {selectedDept && (
        <div id="deptInfo" className="dept-info">
          {renderDepartmentInfo()}
        </div>
      )}

      {/* General Info Modal */}
      {showGeneralInfo && (
        <div
          className="general-info-modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowGeneralInfo(false);
          }}
        >
          <div className="general-info-content">
            <div className="general-info-header">
              <button
                id="closeGeneralInfo"
                onClick={() => setShowGeneralInfo(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <h2>{GENERAL_INFO.title}</h2>
            </div>
            <div className="general-info-body">
              <ol>
                {GENERAL_INFO.content.slice(0, 7).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
                <li>
                  {GENERAL_INFO.content[7]}
                  <ul>
                    {GENERAL_INFO.creditBreakdown.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>{GENERAL_INFO.content[8]}</li>
              </ol>
              <h3>Allotment of Minor Program</h3>
              <ol>
                {GENERAL_INFO.allotmentInfo.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
